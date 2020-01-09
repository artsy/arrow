import styled from 'styled-components'
import { Entry, TimelineEntry } from './Entry'

interface Props {
  entries: TimelineEntry[]
}

export const Entries: React.FC<Props> = ({ entries }) => {
  return (
    <EntriesTable>
      <tbody>
        {entries.map((e, i) => {
          return (
            <Entry
              key={`${e.y}-${e.m}-${e.title}`}
              entry={e}
              previousEntry={entries[i - 1]}
            ></Entry>
          )
        })}
      </tbody>
    </EntriesTable>
  )
}

const EntriesTable = styled.table`
  border: solid 0px #def;
  border-collapse: separate;
  border-spacing: 2vw 4vw;
  width: 80vw;
  margin: 0 auto;
`
