import { ChevronRightIcon } from "lucide-react"
import { useParams } from "next/navigation"
import en from "@/dictionaries/en.json"
import ar from "@/dictionaries/ar.json"

function ProgressSteps( {currentStep}: {currentStep: number} ) {
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;
  const STEPS = dict.appointments.progress.steps
  return (
    <div className="flex items-center gap-4 mb-8" >
      {STEPS.map( (stepName , index) => {
        
        const stepNumber = index + 1
        const isActive = stepNumber <= currentStep

        return (
          <div key={index} className="flex items-center gap-2">

          {/* step number */}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`} > {stepNumber} </div>

          {/* name */}
          <p className={` ${isActive ? "text-foreground" : "text-muted-foreground"} text-sm `}> {stepName} </p>

          {/* arrow */}
          { stepNumber < STEPS.length && ( <ChevronRightIcon className="w-4 h-4 text-muted-foreground" /> )}

          </div>
        )
} )}
    </div>
  )
}

export default ProgressSteps