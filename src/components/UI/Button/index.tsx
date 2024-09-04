"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef, useState } from "react"

import { Disc3, ClipboardCopy, Check } from "lucide-react"
import cn from "@/utils/classnames"
import { tv, VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
  base: "duration-300 transition-colors inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-text hover:bg-primary/70 icon:stroke-white",
      destructive: "bg-red-80 text-white hover:bg-red-40 icon:stroke-white",
      outline:
        "border border-primary bg-background  hover:bg-primary hover:text-black-100 icon:stroke-primary icon:hover:stroke-black-10",
      secondary:
        "bg-white text-text hover:bg-primary/80 icon:stroke-primary/80",

      link: "text-primary icon:stroke-primary underline-offset-4 hover:underline ",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

interface ButtonLoadingProps extends ButtonProps {
  loading?: boolean
  children: React.ReactNode
}

interface ButtonCopyProps extends ButtonProps {
  valueToCopy: string
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, type = "button", ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={!asChild ? type : undefined}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export const ButtonLoading: React.FC<ButtonLoadingProps> = ({
  loading,
  children,
  disabled,
  ...props
}) => {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading ? <Disc3 className="mr-1 w-4 animate-spin" /> : children}
    </Button>
  )
}

export const ButtonCopy: React.FC<ButtonCopyProps> = ({
  valueToCopy,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState<boolean>(false)

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(valueToCopy)
      setCopied(true)
    } catch (err) {
      setCopied(false)
      console.error("Erro ao copiar texto: ", err)
    }
  }

  return (
    <Button disabled={copied} onClick={copyToClipboard} {...props}>
      {copied ? (
        <>
          <Check className="mr-1 w-4" /> Copiado
        </>
      ) : (
        <>
          <ClipboardCopy className="mr-1 w-4" /> {children}
        </>
      )}
    </Button>
  )
}
