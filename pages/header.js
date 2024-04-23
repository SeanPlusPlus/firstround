import Head from "next/head"

const SITE = "https://firstround-nfl.vercel.app/"

export default function Header() {
  return (
    <Head>
      <title>First Round</title>
      <meta
        name="description"
        content="First Round - NFL Draft Prediciton Game"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content={`${SITE}logo.png`} />
      <meta property="og:url" content={SITE} />
      <meta property="og:site_name" content="First Round NFL" />
      <meta property="og:type" content="website" />
    </Head>
  )
}
