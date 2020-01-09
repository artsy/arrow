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
  previousEntry: TimelineEntry
}

export const Entry: React.FC<Props> = ({ entry, previousEntry }) => {
  return (
    <EntryRow>
      <Year isDifferent={previousEntry && entry.y !== previousEntry.y}>
        {entry.y}
      </Year>
      <Month isDifferent={previousEntry && entry.m !== previousEntry.m}>
        {entry.m}
      </Month>
      <Title>{entry.title}</Title>
    </EntryRow>
  )
}

const EntryRow = styled.tr``

const Year = styled.td`
  padding: 1em;
  visibility: ${p => (p.isDifferent ? 'visible' : 'hidden')};
`

const Month = styled.td`
  padding: 1em;
  visibility: ${p => (p.isDifferent ? 'visible' : 'hidden')};
`

const Title = styled.td`
  padding: 1em;
`
