import { atom, useAtom } from "jotai"

export type Plan = {
  title: string
  price: string
  discount: string
  icon: string
}

export type AddOn = {
  title: string
  description: string
  price: string
}

export type FormValues = {
  name: string
  email: string
  phoneNumber: string
  plan: Plan[] | null
  addOns: AddOn[] | null
}

const formAtom = atom<FormValues>({
  name: "",
  email: "",
  phoneNumber: "",
  plan: null,
  addOns: null,
})
const stepAtom = atom<number>(0)

const useFormJotaiJotai = () => {
  const [form, setForm] = useAtom(formAtom)
  const [step, setStep] = useAtom(stepAtom)

  const updateFormAndStep = (values: FormValues) => {
    let updatedForm = { ...form }
    if (step === 0) {
      updatedForm = {
        ...form,
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
      }
    } else if (step === 1) {
      updatedForm = {
        ...form,
        plan: values.plan,
      }
    } else if (step === 2) {
      updatedForm = {
        ...form,
        addOns: values.addOns,
      }
    }

    setForm(updatedForm)
    return setStep(step + 1)
  }

  const handleSubmit = (values: FormValues) => {
    updateFormAndStep(values)
  }

  const goBack = () => {
    setStep(step - 1)
  }

  return {
    form,
    step,
    setStep,
    handleSubmit,
    goBack,
  }
}

export default useFormJotaiJotai
