export function TimelineSteps({ step }: { step: number }) {
  return (
    <div className="w-full px-8 flex justify-between items-center mb-4">
      <div className={`${step === 1 && "bg-sky-800 text-white font-bold"} min-w-[40px] h-[40px] text-lg flex flex-col items-center justify-center leading-none rounded-full border`}>
        1
      </div>
      <div className="w-full border bg-zinc-100" />
      <div className={`${step === 2 && "bg-sky-800 text-white font-bold"} min-w-[40px] h-[40px] text-lg flex flex-col items-center justify-center leading-none rounded-full border`}>
        2
      </div>
      <div className="w-full border bg-zinc-100" />
      <div className={`${step === 3 && "bg-sky-800 text-white font-bold"} min-w-[40px] h-[40px] text-lg flex flex-col items-center justify-center leading-none rounded-full border`}>
        3
      </div>
    </div>

  )
}
