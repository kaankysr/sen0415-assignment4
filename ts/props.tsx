// Arda Kaan Kayserlioğlu, 2100004912
// Props and children in TypeScript. Run with `npx tsx ts/props.tsx`.
import { useState, useReducer, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

type CardProps = { title: string; children?: ReactNode }

// Worked example: the type goes after the whole pattern, and children is in the type too.
function Card({ title, children }: CardProps) {
  return <section><h2>{title}</h2>{children}</section>
}
console.log(renderToStaticMarkup(<Card title="Hi">text</Card>))

// P1: typed props destructuring in parameter list
type DurakKartiProps = { ad: string; hat: string }
function DurakKarti({ ad, hat }: DurakKartiProps) {
  return <div>{hat} - {ad}</div>
}
console.log('P1:', renderToStaticMarkup(<DurakKarti ad="Bağcılar Meydan" hat="M1B" />))

// P2: optional props with default values
type FilmRozetProps = {
  ad: string
  durum?: 'watched' | 'watchlist'
  puan?: number
}
function FilmRozet({ ad, durum = 'watchlist', puan = 8.0 }: FilmRozetProps) {
  return <span>{ad} [{durum}] ({puan})</span>
}
console.log('P2:', renderToStaticMarkup(<FilmRozet ad="Lilja 4-ever" />))

// P3: rest props typed with ComponentPropsWithoutRef<'button'>
type OzelButonProps = { etiket: string } & ComponentPropsWithoutRef<'button'>
function OzelButon({ etiket, ...restProps }: OzelButonProps) {
  return <button {...restProps}>{etiket}</button>
}
console.log('P3:', renderToStaticMarkup(<OzelButon etiket="İzlendi" type="button" disabled />))

// P4: destructuring children alongside other props
type KutuProps = { baslik: string; children: ReactNode }
function Kutu({ baslik, children }: KutuProps) {
  return <article><h3>{baslik}</h3><div>{children}</div></article>
}
console.log('P4:', renderToStaticMarkup(<Kutu baslik="Seçki">Amélie ve Capernaum</Kutu>))

// P5: nested object & tuple prop destructuring
type AktarmaSatirProps = {
  istasyon: { ad: string; ilce: string }
  hatlar: [string, ...string[]]
}
function AktarmaSatir({ istasyon: { ad, ilce }, hatlar: [anaHat] }: AktarmaSatirProps) {
  return <p>{ad} ({ilce}) - Ana hat: {anaHat}</p>
}
console.log(
  'P5:',
  renderToStaticMarkup(
    <AktarmaSatir istasyon={{ ad: 'Kirazlı', ilce: 'Bağcılar' }} hatlar={['M1B', 'M3']} />
  )
)

// P6: typed callback prop (Week 5 FilterBar pattern)
type Filtre = 'all' | 'watched' | 'watchlist'
type FiltreBtnProps = { fltr: Filtre; onSec: (secilen: Filtre) => void }
function FiltreBtn({ fltr, onSec }: FiltreBtnProps) {
  return <button onClick={() => onSec(fltr)}>{fltr}</button>
}
console.log('P6:', renderToStaticMarkup(<FiltreBtn fltr="watched" onSec={() => {}} />))

// P7: typed array destructuring from hooks (useState & useReducer)
type FilmAction = { type: 'ekle'; ad: string } | { type: 'sil'; ad: string }

function filmReducer(state: string[], action: FilmAction): string[] {
  switch (action.type) {
    case 'ekle':
      return [...state, action.ad]
    case 'sil':
      return state.filter((f) => f !== action.ad)
  }
}

function IzlemeListesi() {
  const [fltr, setFltr] = useState<Filtre>('all')
  const [flmler, dispatch] = useReducer(filmReducer, ['Amélie', 'Cast Away'])
  return (
    <section
      data-filter={fltr}
      data-ready={typeof setFltr === 'function' && typeof dispatch === 'function'}
    >
      {flmler.join(', ')}
    </section>
  )
}
console.log('P7:', renderToStaticMarkup(<IzlemeListesi />))
