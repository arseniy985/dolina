# dolina

Production deployment lives in this repo:

- `compose.yaml` runs the Next.js app and a local nginx container.
- `deploy/nginx/system/dolina.elifsyndicate.online.conf` is the system nginx vhost for the public domain.
- `deploy/scripts/deploy.sh` updates the repo on the server, reloads nginx, requests certificates, and starts the compose stack.

Server flow:

1. Clone or pull the repo to `/opt/dolina`.
2. Copy `deploy/.env.production.example` to `deploy/.env.production`.
3. Run `docker compose --env-file deploy/.env.production up -d --build`.
