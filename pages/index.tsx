import { NextPage } from 'next'
import styled from 'styled-components'
import { Button } from '@artsy/palette'

interface TimelineProps {}

const HomePage: NextPage<TimelineProps> = () => {
  return (
    <div>
      <Title>Timeline</Title>
      <Button onClick={() => alert('Hello!')}>Hello, Palette</Button>
    </div>
  )
}

export default HomePage

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`
