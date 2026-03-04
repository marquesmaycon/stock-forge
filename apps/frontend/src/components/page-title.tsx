import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import type { ClassNameValue } from 'tailwind-merge'

import { cn } from '#/lib/utils'

import { Button } from './ui/button'
import { Skeleton as SkeletonUI } from './ui/skeleton'

function Root({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'island-shell rise-in relative mb-10 flex min-h-64 flex-col items-center justify-between overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14 lg:flex-row',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

type PageHeaderBgProps = {
  first?: ClassNameValue
  second?: ClassNameValue
}

function Background({ first, second }: PageHeaderBgProps) {
  return (
    <>
      <div
        className={cn(
          'from-hero-a pointer-events-none absolute -top-24 -left-20 h-56 w-56 rounded-full bg-radial to-transparent to-66%',
          first,
        )}
      />
      <div
        className={cn(
          'from-hero-b pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-radial to-transparent to-66%',
          second,
        )}
      />
    </>
  )
}

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

function Title({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div>
      <p className="island-kicker mb-3">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="text-sea-ink-soft mb-8 max-w-2xl text-base sm:text-lg">{description}</p>
    </div>
  )
}

type BackButtonProps = {
  to: string
  label?: string
}

function BackButton({ to, label = 'Back' }: BackButtonProps) {
  return (
    <Button variant="secondary" asChild>
      <Link to={to}>
        <ArrowLeft />
        {label}
      </Link>
    </Button>
  )
}

function Skeleton() {
  return (
    <SkeletonUI className="island-shell relative mb-10 flex h-72 w-full flex-col items-center justify-between overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14 lg:flex-row" />
  )
}

export const PageTitle = {
  Root,
  Background,
  Title,
  BackButton,
  Skeleton,
}
