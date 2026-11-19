// Arda Kaan Kayserlioğlu, 2100004912
// Forms 11 and 12 in TypeScript, and the typing rules for patterns in parameters.

type TaskInput = { title: string; status?: 'todo' | 'done' }

// Form 11 (worked example): the type goes after the whole pattern.
function createTask({ title, status = 'todo' }: TaskInput) {
  return { title, status }
}
console.log('form 11:', createTask({ title: 'Read' })) // form 11: { title: 'Read', status: 'todo' }

// Form 11b: array/tuple parameter with optional element and default
const flmOzet = ([fltr, sayi = 0]: [string, number?]): string => `Filtre: ${fltr} (${sayi} film)`
console.log('form 11b:', flmOzet(['watched', 4]), flmOzet(['watchlist']))

// Form 12: loops over Object.entries and a Map
type IzlemeDurumu = 'watched' | 'watchlist'
const filmDurumlari: Record<string, IzlemeDurumu> = {
  'Lilja 4-ever': 'watched',
  'Amélie': 'watched',
  'Capernaum': 'watchlist'
}

for (const [f, drm] of Object.entries(filmDurumlari)) {
  console.log('form 12 (object):', f, '->', drm)
}

const basrolStore = new Map<string, string>([
  ['Lilja 4-ever', 'Oksana Akinshina'],
  ['Amélie', 'Audrey Tautou']
])

for (const [film, oync] of basrolStore) {
  console.log('form 12 (map):', film, oync)
}