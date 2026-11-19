// Arda Kaan Kayserlioğlu, 2100004912
// Things that surprise people. Run with `node js/pitfalls.mjs`.

// Pitfall 1 (worked example): destructuring undefined or null throws a TypeError.
try {
  const { a } = undefined
  console.log(a)
} catch (error) {
  console.log('pitfall 1:', error.constructor.name) // pitfall 1: TypeError
}

// Pitfall 2: a default only applies to undefined, not to null
const film = { ad: 'Amélie', puan: null, yil: undefined }
const { puan = 8.0, yil = 2001 } = film
console.log('pitfall 2:', puan, yil)

// Pitfall 3: assigning without const/let needs parentheses, ({ a } = obj)
let seciliFilm = 'Cast Away'
let durum = 'watchlist'
;({ seciliFilm, durum } = { seciliFilm: 'Lilja 4-ever', durum: 'watched' })
console.log('pitfall 3:', seciliFilm, durum)

// Pitfall 4: it copies references, not deep copies (nested objects are shared)
const orjinal = {
  ad: 'Capernaum',
  detay: { ulke: 'Lübnan', sure: 126 }
}
const { detay } = orjinal
detay.sure = 130
console.log('pitfall 4:', orjinal.detay.sure)

// Pitfall 5: in objects the order does not matter, in arrays it does
const liste = ['Amrum', 'Amélie']
const [birinci, ikinci] = liste
const obj = { birinci: 'Amrum', ikinci: 'Amélie' }
const { ikinci: ikincisi, birinci: birincisi } = obj
console.log('pitfall 5:', birinci, ikinci, '|', birincisi, ikincisi)
