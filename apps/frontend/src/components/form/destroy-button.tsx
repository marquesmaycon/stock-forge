import { AlertCircle, Trash2 } from 'lucide-react'
import type { ComponentProps } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#/components/ui/alert-dialog'

import { Button } from '../ui/button'

type DestroyButtonProps = ComponentProps<typeof Button> & {
  label?: string
  title?: string
  description?: string
  destroy: () => void
}

export function DestroyButton({ label, title, description, destroy, ...props }: DestroyButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" {...props} variant="destructive">
          {label || 'Delete'} <AlertCircle />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2 />
          </AlertDialogMedia>
          <AlertDialogTitle>{title || 'Confirmation'}</AlertDialogTitle>
          <AlertDialogDescription>{description || 'This will permanently delete this'}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={() => destroy()}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
