import { FormProvider, useForm } from "react-hook-form"
import { ServicesStep } from "./Steps/ServicesStep"
import { useState } from "react"

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      service: "",
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
    }
  })

  const steps = [
    <ServicesStep />
  ]



  return (
    <FormProvider {...methods}>
      <div className="w-full flex bg-zinc-50 rounded shadow p-6" >
        {steps[currentStep - 1]}
      </div>
    </FormProvider>
  )
}
