import { useFormContext } from "react-hook-form";
import { TimelineSteps } from "../TimelineSteps";

export function AddressInformationStep() {
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-col text-center gap-2">
      <TimelineSteps step={3} />
      <h2 className="text-lg font-semibold">
        Address Information
      </h2>
      <p className="text-sm text-zinc-600">
        We need some information to contact you and send you the quote.
      </p>
      <div className="flex flex-col gap-4 px-6 mt-3">
        <label className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-600 px-3">Country:</span>
          <input
            {...register("country", { required: true })}
            type="text"
            placeholder="Your Country"
            className="px-3 py-2 w-full text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </label>
        <label className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-600 px-3">City:</span>
          <input
            {...register("city", { required: true })}
            type="text"
            placeholder="Your City"
            className="px-3 py-2 w-full text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </label>
        <label className="flex flex-col gap-1 items-start">
          <span className="text-xs text-zinc-600 px-3">Address:</span>
          <input
            {...register("address", { required: true })}
            type="text"
            placeholder="Your Full Address"
            className="px-3 py-2 w-full text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </label>
      </div>
    </div>
  )
}
