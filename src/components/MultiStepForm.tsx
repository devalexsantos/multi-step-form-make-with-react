import { FormProvider, useForm } from "react-hook-form"
import { ServicesStep } from "./Steps/ServicesStep"
import { useState } from "react"
import { PersonalInformationStep } from "./Steps/PersonalInformationStep"
import { AddressInformationStep } from "./Steps/AddressInformationStep"

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [sendSuccess, setSendSuccess] = useState(false);

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
    <AddressInformationStep />
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

  const onSubmit = async (data: {
    service: string,
    name: string,
    email: string,
    phone: string,
    country: string,
    city: string,
    address: string
  }) => {
    console.log(data)
    setSendSuccess(true)
  }

  if (sendSuccess) {
    return (
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl font-semibold text-green-700">
          Form Submitted Successfully
        </h1>
        <p className="text-lg text-zinc-600">
          Thank you for your submission. We will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={
        methods.handleSubmit(onSubmit)
      } className="w-full flex flex-col gap-4">
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
      </form>
    </FormProvider>
  )
}
