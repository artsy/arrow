import { NextPage } from 'next'
import Head from 'next/head'
// import { Sans, space } from '@artsy/palette'
import entries from '../data/entriesList.json'
import { Slideshow } from '../components'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <style jsx global>{`
        // minimal css reset
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        p,
        ul {
          margin: 0.5em 0;
        }
        li {
          margin-left: 1.5em;
        }
      `}</style>
      <Slideshow entries={entries} duration={3}/>
    </>
  )
}

export default HomePage
