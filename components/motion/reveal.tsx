"use client"

import type { PropsWithChildren } from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  distance?: number
}>

type StaggerGroupProps = PropsWithChildren<{
  className?: string
  delayChildren?: number
  staggerChildren?: number
}>

const viewport = { once: true, amount: 0.2 } as const

function createRevealVariants(distance: number, shouldReduceMotion: boolean, delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }
}

export function Reveal({ children, className, delay = 0, distance = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={createRevealVariants(distance, shouldReduceMotion, delay)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.12,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : {
            delayChildren,
            staggerChildren,
          },
    },
  }

  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={viewport} variants={variants}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, delay = 0, distance = 20 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <motion.div
      className={cn("h-full", className)}
      variants={createRevealVariants(distance, shouldReduceMotion, delay)}
    >
      {children}
    </motion.div>
  )
}
