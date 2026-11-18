// Arda Kaan Kayserlioğlu, 2100004912
// Array destructuring (forms 1 to 4). Plain JavaScript: run with `node js/arrays.mjs`.

// Form 1 (worked example): take values out of an array by position.
function minMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)]
}
const [lowest, highest] = minMax([4, 9, 2])
console.log('form 1:', lowest, highest) // form 1: 2 9

// Form 2: skip an item and collect the rest, [, second, ...others]
const duraklar = ['Esenler', 'Menderes', 'Üçyüzlü', 'Bağcılar Meydan', 'Kirazlı']
const [, ikinciDurak, ...kalanDuraklar] = duraklar
console.log('form 2:', ikinciDurak, kalanDuraklar)

// Form 3: swap two variables without a temporary, [a, b] = [b, a]
let gidis = 'M2 Yenikapı'
let donus = 'M1B Kirazlı'
;[gidis, donus] = [donus, gidis]
console.log('form 3:', gidis, donus)

// Form 4: default values, const [a = 1] = []
const sefer = [34, undefined]
const [sure = 20, aralik = 5, ucret = 27] = sefer
console.log('form 4:', sure, aralik, ucret)