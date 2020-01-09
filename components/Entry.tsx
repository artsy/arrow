import styled from 'styled-components'

export interface TimelineEntry {
  title: string
  y: number
  m: number
  d?: number
  details?: string
}

interface Props {
  entry: TimelineEntry
}

export const Entry: React.FC<Props> = ({ entry }) => {
  return (
    <EntryRow>
      <Year>{entry.y}</Year>
      <Month>{entry.m}</Month>
      <Title>{entry.title}</Title>
    </EntryRow>
  )
}

const EntryRow = styled.tr``

const Year = styled.td`
  padding: 1em;
`

const Month = styled.td`
  padding: 1em;
`

const Title = styled.td`
  padding: 1em;
`
