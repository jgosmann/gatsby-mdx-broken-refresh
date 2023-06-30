import { PageProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import React from "react"

const Page = ({
  children,
}: PageProps) => {
  return <MDXProvider>{children}</MDXProvider>
}

export default Page
