import Head from "next/head"
import Navigation from "./Navigation"
import Main from "./Main"

export default function Home() {
  return (
    <>
      <Head>
        <title>First Round</title>
        <meta name="description" content="First Round" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Main />
    </>
  )
}
