"use client"

import { TooltipPortal } from "@radix-ui/react-tooltip"
import { useState } from "react"

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/UI/TooltipRoot"

type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipContent> & {
  children: React.ReactNode
  description: React.ReactNode
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  description,
  className,
  ...props
}) => {
  const [open, setOpen] = useState(false)

  function handleToggle(): void {
    setOpen(!open)
  }

  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={100}>
      <TooltipRoot open={open} onOpenChange={(isOpen): void => setOpen(isOpen)}>
        <TooltipTrigger asChild onClick={handleToggle}>
          {children}
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent className={className} {...props}>
            {description}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export default Tooltip
