import { NextPage } from 'next'
import entries from '../data/entriesList.json'
import { Entries, Layout } from '../components'

interface TimelineProps {}

const HomePage: NextPage<TimelineProps> = () => {
  return (
    <Layout>
      <Entries entries={entries} />
    </Layout>
  )
}

export default HomePage
