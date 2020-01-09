import * as React from 'react'
import styled from 'styled-components'
import { TimelineEntry } from './Entry'
import {
  color,
  themeProps,
  ArrowUpCircleIcon,
  Box,
  EditIcon
} from '@artsy/palette'

interface Props {
  entries: TimelineEntry[]
}

interface State {
  isExpanded: boolean
}

export class YearNav extends React.Component<Props, State> {
  state: State = {
    isExpanded: false
  }

  private distinctYears

  constructor(props) {
    super(props)

    let yearSet: Set<number> = new Set()
    props.entries.reduce((set, entry) => set.add(entry.y), yearSet)
    this.distinctYears = Array.from(yearSet)
  }

  handleMouseEnter = () => {
    this.expand()
  }

  handleMouseLeave = () => {
    this.collapse()
  }

  expand = () => {
    this.setState({ isExpanded: true })
  }

  collapse = () => {
    this.setState({ isExpanded: false })
  }

  render() {
    const { isExpanded } = this.state

    return (
      <>
        <NavList
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {isExpanded ? (
            this.distinctYears.map(y => (
              <NavItem key={y} isExpanded={isExpanded}>
                <Link year={y} />
              </NavItem>
            ))
          ) : (
            <Box p="0.5em 1em">
              <ArrowUpCircleIcon width="2vw" height="2vw" />
            </Box>
          )}
        </NavList>
      </>
    )
  }
}

const NavList = styled.ul`
  position: fixed;
  left: 1vw;
  bottom: 1vw;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  margin: 0;
  padding: 0;
  min-width: 3vw;
  min-height: 0.5vh;

  font-family: ${themeProps.fontFamily.sans.regular};
  font-size: 1.5vw;

  color: ${p => (p.isExpanded ? color('black60') : 'white')};
  border-top: solid 0.25vh ${p => (p.isExpanded ? 'white' : color('black30'))};

  &:hover {
    background: ${color('purple5')};
  }

  a {
    display: block;
    padding: 0.5em;
    cursor: pointer;
    text-decoration: none;
    color: ${color('black60')};
  }
`

const handleYearClick = e => {
  e.preventDefault()
  const year = e.target.innerText
  const selector = `#year-${year}`
  const row = document.querySelector(selector)
  row.scrollIntoView({ behavior: 'smooth' })
}

const Link = ({ year }) => {
  return (
    <a href={`#year-${year}`} onClick={handleYearClick}>
      {year}
    </a>
  )
}

const AdminLink = styled.a`
  display: block;
  position: fixed;
  bottom: 1vw;
  right: 1vw;
  padding: 0.5em;
`

export const AdminNav = () => (
  <AdminLink href="/admin">
    <EditIcon width="2vw" height="2vw" />
  </AdminLink>
)
