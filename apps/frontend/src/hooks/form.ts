import { createFormHook } from '@tanstack/react-form'

import { DestroyButton } from '#/components/form/destroy-button'
import { InputField } from '#/components/form/input-field'
import { SelectField } from '#/components/form/select-field'
import { SubmitButton } from '#/components/form/submit-button'

import { fieldContext, formContext } from './form-context'

export const { useAppForm } = createFormHook({
  fieldComponents: {
    InputField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
    DestroyButton,
  },
  fieldContext,
  formContext,
})
