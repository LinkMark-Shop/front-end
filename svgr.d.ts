declare module "*.svg" {
  import type { FC, SVGProps } from "react"
  const content: FC<SVGProps<SVGElement>>
  console.log("passando por aqui e content", content)
  export default content
}
