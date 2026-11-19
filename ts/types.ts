// Arda Kaan Kayserlioğlu, 2100004912
// What only TypeScript adds (topics T1 to T5). See the handout.

// T1 (worked example): `{ a: string }` inside a pattern is a RENAME, not a type.
const point = { x: 1, y: 2 }
const { x: horizontal } = point // x is renamed to horizontal; there is no variable x
console.log('T1:', horizontal) // T1: 1

// T2: tuple vs array destructuring (fixed length & known types per position)
type SeferBilgi = [hat: string, dakika: number, aktif: boolean]
const sfr: SeferBilgi = ['M1B', 22, true]
const [hat, dk, acik] = sfr
console.log('T2:', hat, dk + 5, acik)

// T3: discriminated union narrowing via destructured tag (Week 5 Action pattern)
type FilmAction =
  | { type: 'ekle'; ad: string; yil: number }
  | { type: 'puanla'; ad: string; puan: number }

function flmIslm(act: FilmAction): string {
  switch (act.type) {
    case 'ekle': {
      const { ad, yil } = act
      return `Eklendi: ${ad} (${yil})`
    }
    case 'puanla': {
      const { ad, puan } = act
      return `Puanlandı: ${ad} -> ${puan}/10`
    }
  }
}
console.log('T3:', flmIslm({ type: 'puanla', ad: 'Lilja 4-ever', puan: 8.5 }))

// T4: noUncheckedIndexedAccess makes array elements `T | undefined`
const drklar: string[] = ['Esenler', 'Menderes', 'Kirazlı']
const [ilk, , , dorduncu] = drklar
console.log('T4:', ilk?.toUpperCase(), dorduncu ?? 'Durak yok')

// T5: `as const` readonly tuple & literal narrowing
const fav = ['Amélie', 'Cast Away', 'Capernaum'] as const
const [f1, f2] = fav
console.log('T5:', f1, '|', f2)