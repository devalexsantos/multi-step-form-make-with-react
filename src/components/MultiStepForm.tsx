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
    <PersonalInformationStep />,
    <PersonalInformationStep />
  ]

  const nextStep = async () => {
    const isValid = await methods.trigger()
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }

  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  return (
    <FormProvider {...methods}>
      <div className="w-full flex bg-zinc-50 rounded shadow p-6 justify-center" >
        {steps[currentStep - 1]}
      </div>
      <div className="w-full flex items-center justify-center gap-3">
        {
          currentStep > 1 &&
          <button
            onClick={prevStep}
            className="text-sm bg-sky-800 text-white px-4 py-2 rounded-full">
            Back
          </button>
        }
        {
          currentStep < steps.length ?
            (
              <button
                onClick={nextStep}
                className="text-sm bg-sky-800 text-white px-4 py-2 rounded-full">
                Next
              </button>
            )
            :
            (
              <button
                type="submit"
                className="text-sm bg-green-700 text-white px-4 py-2 rounded-full">
                Submit
              </button>
            )
        }
      </div>
    </FormProvider>
  )
}
