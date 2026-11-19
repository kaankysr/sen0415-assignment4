// Arda Kaan Kayserlioğlu, 2100004912
// The same four array forms as js/arrays.mjs, now typed. Run with `npx tsx ts/arrays.ts`.

// Form 1 (worked example): the return type of the function is a tuple.
function minMax(numbers: number[]): [number, number] {
  return [Math.min(...numbers), Math.max(...numbers)]
}
const [lowest, highest] = minMax([4, 9, 2])
console.log('form 1:', lowest, highest) // form 1: 2 9

// Form 2: skip an item and collect the rest
const duraklar: string[] = ['Esenler', 'Menderes', 'Üçyüzlü', 'Bağcılar Meydan', 'Kirazlı']
const [, ikinciDurak, ...kalanDuraklar] = duraklar
console.log('form 2:', ikinciDurak, kalanDuraklar)

// Form 3: swap two variables without a temporary
let gidis: string = 'M2 Yenikapı'
let donus: string = 'M1B Kirazlı'
;[gidis, donus] = [donus, gidis]
console.log('form 3:', gidis, donus)

// Form 4: default values (also handles noUncheckedIndexedAccess: number | undefined)
const sefer: (number | undefined)[] = [34, undefined]
const [sure = 20, aralik = 5, ucret = 27] = sefer
console.log('form 4:', sure, aralik, ucret)
