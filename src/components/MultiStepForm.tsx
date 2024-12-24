import { FormProvider, useForm } from "react-hook-form"
import { ServicesStep } from "./Steps/ServicesStep"
import { useState } from "react"
import { PersonalInformationStep } from "./Steps/PersonalInformationStep"

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(2)
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      service: "website-design",
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
    }
  })

  const steps = [
    <ServicesStep />,
    <PersonalInformationStep />
  ]



  return (
    <FormProvider {...methods}>
      <div className="w-full flex bg-zinc-50 rounded shadow p-6 justify-center" >
        {steps[currentStep - 1]}
      </div>
    </FormProvider>
  )
}
