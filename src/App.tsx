import { MultiStepForm } from "./components/MultiStepForm";

export function App() {
  return (
    <div className="bg-zinc-100 w-full min-h-screen flex flex-col gap-4 items-center justify-center p-6">
      <h1 className="text-3xl text-sky-800 font-bold">Request a Quote</h1>
      <MultiStepForm />
    </div>
  )
}

