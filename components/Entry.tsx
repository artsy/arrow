import styled from 'styled-components'
import { format } from 'date-fns'

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

const formattedDate = (entry: TimelineEntry) => {
  const { y, m, d } = entry
  if (typeof d === 'number') {
    return format(new Date(y, m, d), 'MMMM do')
  } else {
    return format(new Date(y, m, 1), 'MMMM')
  }
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
        {formattedDate(entry)}
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
