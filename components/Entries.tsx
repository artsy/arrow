import styled from 'styled-components'
import { Entry, TimelineEntry } from './Entry'

interface Props {
  entries: TimelineEntry[]
}

export const Entries: React.FC<Props> = ({ entries }) => {
  return (
    <EntriesTable>
      <tbody>
        {entries.map(e => {
          return <Entry key={`${e.y}-${e.m}-${e.title}`} entry={e}></Entry>
        })}
      </tbody>
    </EntriesTable>
  )
}

const EntriesTable = styled.table``
