import { useCallback, useMemo, useState } from "react"

type FormValues<T> = { [K in keyof T]: T[K] }

export interface UseForm<T> {
  formValues: FormValues<T>
  handleChange: <K extends keyof T>(name: K, value: T[K]) => void
  clearAll: () => void
  submitForm: (
    event: React.SyntheticEvent,
    onSubmit: () => void | Promise<void>,
  ) => void
  formState: {
    loading: boolean
    success: boolean
    error: string
  }
  isFilled: boolean
}

const useForm = <T extends FormValues<T>>(
  initialValues: T,
  requiredValues: (keyof T)[] = [],
): UseForm<T> => {
  const [values, setValues] = useState<FormValues<T>>(
    initialValues as FormValues<T>,
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const isFilled = useMemo(() => {
    const map: (keyof T)[] = !requiredValues.length
      ? (Object.keys(values) as (keyof T)[])
      : requiredValues

    return map.every((v) => {
      const currentValue = values[v]
      if (Array.isArray(currentValue)) {
        return Array.from(currentValue).length > 0
      } else {
        return !!currentValue
      }
    })
  }, [requiredValues, values])

  const valueSetter = useCallback<UseForm<T>["handleChange"]>((name, value) => {
    setValues((prev) => {
      if (prev[name] === value) return prev
      return { ...prev, [name]: value }
    })
  }, [])

  const submitForm: UseForm<T>["submitForm"] = async (event, onSubmit) => {
    if (event) event.preventDefault()
    if (submitError.length > 0) setSubmitError("")
    setIsSubmitting(true)
    try {
      await onSubmit()
      setSubmitSuccess(true)
    } catch (err) {
      if (err instanceof Error) {
        setSubmitError(err.toString())
        setSubmitSuccess(false)
      } else {
        setSubmitError("Erro desconhecido")
        setSubmitSuccess(false)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const clearAll = (): void => setValues(initialValues as FormValues<T>)

  return {
    formValues: values,
    handleChange: valueSetter,
    clearAll,
    submitForm,
    formState: {
      loading: isSubmitting,
      success: submitSuccess,
      error: submitError,
    },
    isFilled,
  }
}

export default useForm
