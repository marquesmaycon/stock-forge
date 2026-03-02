import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import type { ClassNameValue } from 'tailwind-merge'

import { cn } from '#/lib/utils'

import { Button } from './ui/button'

function Root({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        'mb-10 flex rise-in flex-col lg:flex-row justify-between items-center island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14',
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
          'pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-radial from-hero-a to-transparent to-66%',
          first,
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-radial from-hero-b to-transparent to-66%',
          second,
        )}
      />
    </>
  )
}

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description: string
}

function Title({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div>
      <p className="island-kicker mb-3">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="mb-8 max-w-2xl text-base text-sea-ink-soft sm:text-lg">{description}</p>
    </div>
  )
}

type BackButtonProps = {
  to: string
  label?: string
}

function BackButton({ to, label = 'Back' }: BackButtonProps) {
  return (
    <Link to={to}>
      <Button variant="secondary">
        <ArrowLeft />
        {label}
      </Button>
    </Link>
  )
}

export const PageTitle = {
  Root,
  Background,
  Title,
  BackButton,
}
