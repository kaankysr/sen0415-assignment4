// Arda Kaan Kayserlioğlu, 2100004912
// The same six object forms as js/objects.mjs, now typed.

type Task = { id: string; title: string; status: 'todo' | 'in-progress' | 'done' }

// Form 5 (worked example)
const task: Task = { id: 't1', title: 'Buy milk', status: 'todo' }
const { title, status } = task
console.log('form 5:', title, status) // form 5: Buy milk todo

// Form 6: rename while you take it (TypeScript separates rename from type!)
type Hat = { kod: string; sonDurak: string; aktif: boolean }
const hat: Hat = { kod: 'M1B', sonDurak: 'Kirazlı', aktif: true }
const { kod: hatKodu, sonDurak: bitis }: Hat = hat
console.log('form 6:', hatKodu, bitis)

// Form 7: default values for optional properties
type Durak = { ad: string; asansor?: boolean; tip?: string }
const durak: Durak = { ad: 'Bağcılar Meydan' }
const { ad, asansor = true, tip = 'Yeraltı' } = durak
console.log('form 7:', ad, asansor, tip)

// Form 8: rest
type Tren = { no: string; vagon: number; hat: string; depo: string }
const tren: Tren = { no: 'ABB-104', vagon: 4, hat: 'M1B', depo: 'Esenler' }
const { no, ...detay } = tren
console.log('form 8:', no, detay)

// Form 9: nested patterns (objects and arrays inside objects)
type Aktarma = {
  merkez: string
  isletme: { kurum: string; ilce: string }
  hatlar: [string, ...string[]]
}
const aktarma: Aktarma = {
  merkez: 'Kirazlı',
  isletme: { kurum: 'Metro İstanbul', ilce: 'Bağcılar' },
  hatlar: ['M1B', 'M3']
}
const {
  isletme: { kurum },
  hatlar: [ilkHat]
} = aktarma
console.log('form 9:', kurum, ilkHat)

// Form 10: computed key with keyof
type DurakAdi = 'esenler' | 'menderes' | 'kirazli'
const yolcuSayisi: Record<DurakAdi, number> = {
  esenler: 18500,
  menderes: 12400,
  kirazli: 41200
}
const secilen: DurakAdi = 'kirazli'
const { [secilen]: gunlukYolcu } = yolcuSayisi
console.log('form 10:', gunlukYolcu)