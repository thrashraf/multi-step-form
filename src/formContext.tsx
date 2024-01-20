import React from "react"
import { UseFormReturn, FieldValues } from "react-hook-form"

export const FormContext = React.createContext<UseFormReturn<
  FieldValues,
  undefined
> | null>(null)
