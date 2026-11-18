// Arda Kaan Kayserlioğlu, ÖĞRENCİ_NUMARAN
// Object destructuring (forms 5 to 10). Run with `node js/objects.mjs`.

// Form 5 (worked example): take properties out of an object by name.
const task = { id: 't1', title: 'Buy milk', status: 'todo' }
const { title, status } = task
console.log('form 5:', title, status) // form 5: Buy milk todo

// Form 6: rename while you take it, { title: heading }
const hat = { kod: 'M1B', sonDurak: 'Kirazlı', aktif: true }
const { kod: hatKodu, sonDurak: bitis } = hat
console.log('form 6:', hatKodu, bitis)

// Form 7: default values, { priority = 'normal' }
const durak = { ad: 'Bağcılar Meydan', asansor: undefined }
const { ad, asansor = true, tip = 'Yeraltı' } = durak
console.log('form 7:', ad, asansor, tip)

// Form 8: rest, { id, ...others }
const tren = { no: 'ABB', vagon: 4, hat: 'M1B', depo: 'Esenler' }
const { no, ...detay } = tren
console.log('form 8:', no, detay)

// Form 9: nested patterns, { owner: { name } } and arrays inside objects
const aktarma = {
  merkez: 'Kirazlı',
  isletme: { kurum: 'Metro İstanbul', ilce: 'Bağcılar' },
  hatlar: ['M1B', 'M3']
}
const {
  isletme: { kurum },
  hatlar: [ilkHat]
} = aktarma
console.log('form 9:', kurum, ilkHat)

// Form 10: computed key, { [key]: value }
const yolcuSayisi = {
  esenler: 18500,
  menderes: 12400,
  kirazli: 41200
}
const secilen = 'kirazli'
const { [secilen]: gunlukYolcu } = yolcuSayisi
console.log('form 10:', gunlukYolcu)