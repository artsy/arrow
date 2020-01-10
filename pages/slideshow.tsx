import { NextPage } from 'next'
import entries from '../data/entriesList.json'
import { Layout, Slideshow } from '../components'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Slideshow entries={entries} duration={3} shuffle />
    </Layout>
  )
}

export default HomePage
