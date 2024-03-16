import dynamic from "next/dynamic"
import Head from "next/head"

import { Layout } from "@/components/layout"

const DynamicMainMenu = dynamic(
  () => import("../components/main-menu").then((model) => model.default),
  { ssr: false }
)

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{ height: "calc(100vh - 64px)", overflow: "hidden" }}>
        {/* <div className="flex flex-col justify-center items-center gap-2"> */}
        <DynamicMainMenu />
        {/* </div> */}
      </section>
    </Layout>
  )
}
