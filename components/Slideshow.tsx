import * as React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import shuffleArray from 'lodash.shuffle'

import { TimelineEntry } from './Entry'
import { color, themeProps } from '@artsy/palette'
import { isThisSecond } from 'date-fns/esm'

interface Props {
  entries: TimelineEntry[]

  /** Duration of each slide, in seconds */
  duration: number

  /** Randomize slide order? */
  shuffle?: boolean
}

interface State {
  index: number
}

const formattedDate = (entry: TimelineEntry) => {
  const { y, m, d } = entry
  if (typeof d === 'number') {
    return format(new Date(y, m, d), 'MMMM do, y')
  } else {
    return format(new Date(y, m, 1), 'MMMM y')
  }
}

export class Slideshow extends React.Component<Props, State> {
  state: State = {
    index: 0
  }

  private timer

  private shuffledEntries

  constructor(props) {
    super(props)

    if (props.shuffle) {
      this.shuffledEntries = shuffleArray(props.entries)
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.advance, this.props.duration * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { shuffle } = this.props
    const entries = shuffle ? this.shuffledEntries : this.props.entries
    return (
      <>
        {entries.map((e, i) => (
          <Slide
            key={`${e.y}-${e.m}-${e.title}`}
            current={i === this.state.index}
          >
            <Datestamp>{formattedDate(e)}</Datestamp>
            <Title>{e.title}</Title>
          </Slide>
        ))}
      </>
    )
  }

  advance = () => {
    this.setState(prev => {
      const nextIndex = (prev.index + 1) % this.props.entries.length
      return { index: nextIndex }
    })
  }
}

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: ${p => (p.current ? 1 : 0)};
  transition: opacity 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Datestamp = styled.div`
  color: ${color('purple100')};
  font-family: ${themeProps.fontFamily.sans.regular};
  font-size: 2vw;
  font-weight: 400;
  line-height: 1.6;
  max-width: 40em;
  margin: 0 10vw;
`

const Title = styled.div`
  color: ${color('black80')};
  font-family: ${themeProps.fontFamily.sans.regular};
  font-size: 3vw;
  font-weight: 400;
  line-height: 1.4;
  max-width: 40em;
  margin: 0 10vw;
`
