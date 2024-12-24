import { Bug, CodeXml, LayoutTemplate, PencilRuler } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { TimelineSteps } from "../TimelineSteps";

export function ServicesStep() {
  const { watch, setValue } = useFormContext();

  const services = [{
    id: "website-design",
    title: "Website Design",
    icon: LayoutTemplate,
  },
  {
    id: "design",
    title: "UI Design",
    icon: PencilRuler,
  },
  {
    id: "development",
    title: "Web Development",
    icon: CodeXml,
  },
  {
    id: "support",
    title: "Support",
    icon: Bug,
  }
  ]

  const selectedService = watch("service");


  return (
    <div className="flex flex-col text-center gap-2">
      <TimelineSteps step={1} />
      <h2 className="text-lg font-semibold">What service do you need?</h2>
      <p className="text-sm text-zinc-600">Tell us what you need! Briefly describe the service or assistance you're looking for in the space below.</p>
      <div className="flex items-center gap-3 mt-8">
        {
          services.map(service => (
            <div key={service.id}
              onClick={() => {
                setValue("service", service.id)
              }}
              className={`${selectedService === service.id ? "border-sky-800" : ""} cursor-pointer w-full max-w-[120px] h-[120px] bg-white border rounded-lg flex flex-col justify-center items-center p-2`}>
              <service.icon size={48} className="text-sky-800" />
              <span className="text-xs text-zinc-600">{service.title}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
