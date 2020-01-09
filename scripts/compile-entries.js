const fs = require('fs').promises

const CMS_ENTRIES_PATH = './_entries'
const OUTFILE = './data/entriesList.json'

const concatenateEntriesFromCms = () => {
  fs.readdir(CMS_ENTRIES_PATH)
    .then(async files => {
      console.log(`Writing ${files.length} CMS entry files to ${OUTFILE}...`)
      const entries = await allEntriesContent(files)
      const data = entries.map(e => JSON.parse(e)).sort(compareEntries)
      const prettyData = JSON.stringify(data, null, 2)
      await fs.writeFile(OUTFILE, prettyData)
      console.log('Done.')
    })
    .catch(err => console.error(err))
}

const allEntriesContent = files =>
  Promise.all(
    files.map(f =>
      fs.readFile([CMS_ENTRIES_PATH, f].join('/'), {
        encoding: 'UTF-8'
      })
    )
  )

const compareEntries = (a, b) => {
  dateA = new Date(a.y, a.m - 1, a.d || null)
  dateB = new Date(b.y, b.m - 1, b.d || null)
  if (dateA < dateB) return -1
  if (dateA > dateB) return 1
  return 0
}

concatenateEntriesFromCms()
