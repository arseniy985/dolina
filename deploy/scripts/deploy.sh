#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/dolina}"
BRANCH="${BRANCH:-main}"
REPO_URL="${REPO_URL:-https://github.com/arseniy985/dolina.git}"
DOMAIN="${DOMAIN:-dolina.elifsyndicate.online}"
CERTBOT_EMAIL="${CERTBOT_EMAIL:-admin@elifsyndicate.online}"
HOST_NGINX_PORT="${HOST_NGINX_PORT:-13010}"
SITE_CONF_NAME="${SITE_CONF_NAME:-${DOMAIN}.conf}"
SITE_CONF_PATH="/etc/nginx/sites-available/${SITE_CONF_NAME}"
SITE_LINK_PATH="/etc/nginx/sites-enabled/${SITE_CONF_NAME}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

ensure_repo() {
  mkdir -p "$(dirname "${APP_DIR}")"

  if [ ! -d "${APP_DIR}/.git" ]; then
    git clone "${REPO_URL}" "${APP_DIR}"
  fi

  git -C "${APP_DIR}" remote set-url origin "${REPO_URL}"
  git -C "${APP_DIR}" fetch origin
  git -C "${APP_DIR}" checkout "${BRANCH}"
  git -C "${APP_DIR}" pull --ff-only origin "${BRANCH}"
}

ensure_env_file() {
  if [ ! -f "${APP_DIR}/deploy/.env.production" ]; then
    cp "${APP_DIR}/deploy/.env.production.example" "${APP_DIR}/deploy/.env.production"
  fi

  if ! grep -q '^HOST_NGINX_PORT=' "${APP_DIR}/deploy/.env.production"; then
    printf '\nHOST_NGINX_PORT=%s\n' "${HOST_NGINX_PORT}" >> "${APP_DIR}/deploy/.env.production"
  fi
}

install_system_nginx_conf() {
  install -D -m 644 \
    "${APP_DIR}/deploy/nginx/system/${DOMAIN}.conf" \
    "${SITE_CONF_PATH}"
  ln -sfn "${SITE_CONF_PATH}" "${SITE_LINK_PATH}"
}

ensure_certificate() {
  if [ -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
    return
  fi

  certbot certonly \
    --standalone \
    --non-interactive \
    --agree-tos \
    --pre-hook "systemctl stop nginx" \
    --post-hook "systemctl start nginx" \
    -m "${CERTBOT_EMAIL}" \
    -d "${DOMAIN}" \
    -d "www.${DOMAIN}"
}

main() {
  require_command git
  require_command docker
  require_command nginx
  require_command certbot

  ensure_repo
  ensure_env_file
  ensure_certificate
  install_system_nginx_conf

  nginx -t
  systemctl reload nginx

  docker compose -f "${APP_DIR}/compose.yaml" --env-file "${APP_DIR}/deploy/.env.production" up -d --build
}

main "$@"
