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
  const isNewYear = previousEntry ? entry.y !== previousEntry.y : true
  const isNewMonthAndDate = previousEntry
    ? [entry.m, entry.d] !== [previousEntry.m, previousEntry.d]
    : true

  return (
    <EntryRow>
      <Year isNew={isNewYear}>{entry.y}</Year>
      <MonthAndDate isNew={isNewMonthAndDate}>
        {[entry.m, entry.d].filter(x => x).join('-')}
      </MonthAndDate>
      <Title>{entry.title}</Title>
    </EntryRow>
  )
}

const EntryRow = styled.tr``

const Year = styled.td`
  padding: 1em;
  visibility: ${p => (p.isNew ? 'visible' : 'hidden')};
`

const MonthAndDate = styled.td`
  padding: 1em;
  visibility: ${p => (p.isNew ? 'visible' : 'hidden')};
`

const Title = styled.td`
  padding: 1em;
`
