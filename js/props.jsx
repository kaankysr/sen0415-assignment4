// Arda Kaan Kayserlioğlu, 2100004912
// Props and children in plain JavaScript (JSX). Run with `npx tsx js/props.jsx`.
import { useState, useReducer } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Worked example: props is ONE object; the parameter pattern takes it apart.
// These two components are the same thing written two ways.
function CardA(props) {
  return <section><h2>{props.title}</h2>{props.children}</section>
}
function CardB({ title, children }) {
  return <section><h2>{title}</h2>{children}</section>
}
console.log('A:', renderToStaticMarkup(<CardA title="Hi">text</CardA>))
console.log('B:', renderToStaticMarkup(<CardB title="Hi">text</CardB>))

// P1: basic props destructuring in parameter list
function DurakKarti({ ad, hat }) {
  return <div>{hat} - {ad}</div>
}
console.log('P1:', renderToStaticMarkup(<DurakKarti ad="Bağcılar Meydan" hat="M1B" />))

// P2: default prop values
function FilmRozet({ ad, durum = 'watchlist', puan = 8.0 }) {
  return <span>{ad} [{durum}] ({puan})</span>
}
console.log('P2:', renderToStaticMarkup(<FilmRozet ad="Lilja 4-ever" />))

// P3: rest props forwarded to underlying HTML element
function OzelButon({ etiket, ...restProps }) {
  return <button {...restProps}>{etiket}</button>
}
console.log('P3:', renderToStaticMarkup(<OzelButon etiket="İzlendi" type="button" disabled />))

// P4: destructuring children alongside other props
function Kutu({ baslik, children }) {
  return <article><h3>{baslik}</h3><div>{children}</div></article>
}
console.log('P4:', renderToStaticMarkup(<Kutu baslik="Seçki">Amélie ve Capernaum</Kutu>))

// P5: nested object & array prop destructuring
function AktarmaSatir({ istasyon: { ad, ilce }, hatlar: [anaHat] }) {
  return <p>{ad} ({ilce}) - Ana hat: {anaHat}</p>
}
console.log(
  'P5:',
  renderToStaticMarkup(
    <AktarmaSatir istasyon={{ ad: 'Kirazlı', ilce: 'Bağcılar' }} hatlar={['M1B', 'M3']} />
  )
)

// P6: destructuring callback props (Week 5 FilterBar pattern)
function FiltreBtn({ fltr, onSec }) {
  return <button onClick={() => onSec(fltr)}>{fltr}</button>
}
console.log('P6:', renderToStaticMarkup(<FiltreBtn fltr="watched" onSec={() => {}} />))

// P7: array destructuring from hooks inside component (useState & useReducer)
function filmReducer(state, action) {
  return action.type === 'ekle' ? [...state, action.ad] : state
}

function IzlemeListesi() {
  const [fltr, setFltr] = useState('all')
  const [flmler, dispatch] = useReducer(filmReducer, ['Amélie', 'Cast Away'])
  return (
    <section data-filter={fltr} data-has-dispatch={typeof dispatch === 'function'}>
      {flmler.join(', ')}
    </section>
  )
}
console.log('P7:', renderToStaticMarkup(<IzlemeListesi />))