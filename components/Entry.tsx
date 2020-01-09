import styled, { css } from 'styled-components'
import { format } from 'date-fns'
import { color, themeProps } from '@artsy/palette'

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
    return format(new Date(y, m, d), 'MMMM d')
  } else {
    return format(new Date(y, m, 1), 'MMMM')
  }
}

const formattedTitle = title => {
  // add breaking zero-width spaces to URLs
  return title.replace(/\//g, '/\u{200B}')
}

export const Entry: React.FC<Props> = ({ entry, previousEntry }) => {
  const isNewYear = previousEntry ? entry.y !== previousEntry.y : true
  const isNewMonthAndDate = previousEntry
    ? [entry.m, entry.d] !== [previousEntry.m, previousEntry.d]
    : true

  return (
    <EntryRow id={isNewYear ? `year-${entry.y}` : undefined}>
      <Year isNew={isNewYear}>{entry.y}</Year>
      <MonthAndDate isNew={isNewMonthAndDate}>
        {formattedDate(entry)}
      </MonthAndDate>
      <Title>{formattedTitle(entry.title)}</Title>
    </EntryRow>
  )
}

const EntryRow = styled.tr``

const EntryCell = styled.td`
  /* border: solid 1px #def; */
`

const Year = styled(EntryCell)`
  visibility: ${p => (p.isNew ? 'visible' : 'hidden')};

  color: ${color('black60')};
  font-family: ${themeProps.fontFamily.sans.regular};
  font-size: 4vw;
  font-weight: 400;
  vertical-align: top;

  ${p =>
    p.isNew &&
    css`
      position: sticky;
      top: 1vw;
      background: white;
    `}
`

const MonthAndDate = styled(EntryCell)`
  visibility: ${p => (p.isNew ? 'visible' : 'hidden')};

  border-right: solid 2px ${color('black10')};
  color: ${color('purple100')};
  font-family: ${themeProps.fontFamily.sans.regular};
  font-size: 2vw;
  font-weight: 400;
  padding-right: 2vw;
  text-align: right;
  white-space: nowrap;
`

const Title = styled(EntryCell)`
  color: ${color('black80')};
  font-family: ${themeProps.fontFamily.sans.regular};
  font-size: 2vw;
  font-weight: 400;
  line-height: 1.6;
`
