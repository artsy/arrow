import { NextPage } from 'next'
import styled from 'styled-components'

interface TimelineProps {}

const HomePage: NextPage<TimelineProps> = () => {
  return <Title>Timeline</Title>
}

export default HomePage

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`
