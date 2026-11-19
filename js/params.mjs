// Arda Kaan Kayserlioğlu, 2100004912
// Destructuring in parameters and loops (forms 11 and 12). Run with `node js/params.mjs`.

// Form 11 (worked example): an options object in the parameter list, with defaults.
function createTask({ title, status = 'todo' } = {}) {
  return { title, status }
}
console.log('form 11:', createTask({ title: 'Read' })) // form 11: { title: 'Read', status: 'todo' }

// Form 11b: the same idea with an array parameter, ([x, y]) => ...
const flmOzet = ([fltr, sayi = 0]) => `Filtre: ${fltr} (${sayi} film)`
console.log('form 11b:', flmOzet(['watched', 4]), flmOzet(['watchlist']))

// Form 12: loops over entries, for (const [key, value] of Object.entries(obj)) and a Map
const filmDurumlari = {
  'Lilja 4-ever': 'watched',
  'Amélie': 'watched',
  'Capernaum': 'watchlist'
}

for (const [f, drm] of Object.entries(filmDurumlari)) {
  console.log('form 12 (object):', f, '->', drm)
}

const basrolStore = new Map([
  ['Lilja 4-ever', 'Oksana Akinshina'],
  ['Amélie', 'Audrey Tautou']
])

for (const [film, oync] of basrolStore) {
  console.log('form 12 (map):', film, oync)
}