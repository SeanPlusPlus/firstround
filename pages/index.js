import Head from 'next/head'
import Navigation from './Navigation'
import Main from './Main'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Top Ten</title>
        <meta name="description" content="Top Ten" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Main />
    </div>
  )
}
