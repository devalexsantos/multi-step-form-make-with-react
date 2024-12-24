import { useFormContext } from "react-hook-form";
import { TimelineSteps } from "../TimelineSteps";

export function PersonalInformation() {
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-col text-center gap-2">
      <TimelineSteps step={2} />
      <h2 className="text-lg font-semibold">
        Personal Information
      </h2>
      <p className="text-sm text-zinc-600">
        We need some information to contact you and send you the quote.
      </p>
      <div className="flex flex-col gap-4 px-6 mt-3">
        <label className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-600 px-3">Name:</span>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Full Name"
            className="px-3 py-2 w-full text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </label>
        <label className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-600 px-3">Email:</span>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Your Best Email"
            className="px-3 py-2 w-full text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </label>
        <label className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-600 px-3">Phone:</span>
          <input
            {...register("phone", { required: true })}
            type="text"
            placeholder="Your Contact Number"
            className="px-3 py-2 w-full text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </label>
      </div>
    </div>
  )
}
