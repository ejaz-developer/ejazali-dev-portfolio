import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 outline-none select-none hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-on-navy shadow-soft hover:bg-navy-deep hover:shadow-lift",
        outline:
          "border border-line bg-white text-ink hover:border-navy/40 hover:shadow-soft",
        secondary:
          "bg-surface text-ink hover:bg-navy-wash",
        ghost:
          "bg-transparent text-ink hover:bg-surface",
        destructive:
          "bg-destructive text-white hover:opacity-90",
        link: "bg-transparent text-navy normal-case underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 text-sm",
        xs: "h-7 px-3 text-xs",
        sm: "h-8 px-4 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "size-9",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
