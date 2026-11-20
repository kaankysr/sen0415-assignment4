# Destructuring Field Guide

Name: Arda Kaan Kayserlioğlu  
Student number: 2100004912

Bonuses claimed: **Bonus 4: Git repository with meaningful commits across multiple days** (Repo: `https://github.com/kaankysr/sen0415-assignment4` — commits spread across November 18, 19, and 20, 2026 covering JS, TS, React props, and documentation).

## Run

```bash
npm install
npm run all      # runs the JS and TS examples
npm run check    # type-checks in strict mode

How an entry looksForm 1: array destructuring, const [x, y] = f()Syntax: const [lowest, highest] = minMax([4, 9, 2])Example (from js/arrays.mjs):JavaScriptconst [lowest, highest] = minMax([4, 9, 2])
console.log('form 1:', lowest, highest)
Output: form 1: 2 9Use it when: a function returns several values in order.Watch out: the order matters, and a missing item gives undefined.Field guideForm 1: tuple / pair return destructuring, const [a, b] = fn()Syntax: const [lowest, highest] = minMax([4, 9, 2])Example (from ts/arrays.ts):TypeScriptfunction minMax(numbers: number[]): [number, number] {
  return [Math.min(...numbers), Math.max(...numbers)]
}
const [lowest, highest] = minMax([4, 9, 2])
console.log('form 1:', lowest, highest)
Output: form 1: 2 9Use it when: a helper returns a small fixed-order pair (like min/max or [state, dispatch]).Watch out: in TypeScript, annotate the return type as a tuple ([number, number]) rather than number[] so each position keeps its exact type.Form 2: skipping elements and rest pattern, const [, second, ...rest] = arrSyntax: const [, ikinciDurak, ...kalanDuraklar] = duraklarExample (from ts/arrays.ts):TypeScriptconst duraklar: string[] = ['Esenler', 'Menderes', 'Üçyüzlü', 'Bağcılar Meydan', 'Kirazlı']
const [, ikinciDurak, ...kalanDuraklar] = duraklar
console.log('form 2:', ikinciDurak, kalanDuraklar)
Output: form 2: Menderes [ 'Üçyüzlü', 'Bağcılar Meydan', 'Kirazlı' ]Use it when: you want to ignore the head of a list and capture the next item plus the remaining tail.Watch out: ...rest must always be the very last element in the array pattern, and it creates a new shallow array.Form 3: swapping variables without a temporary variable, [a, b] = [b, a]Syntax: ;[gidis, donus] = [donus, gidis]Example (from ts/arrays.ts):TypeScriptlet gidis: string = 'M2 Yenikapı'
let donus: string = 'M1B Kirazlı'
;[gidis, donus] = [donus, gidis]
console.log('form 3:', gidis, donus)
Output: form 3: M1B Kirazlı M2 YenikapıUse it when: swapping two existing let variables in place without declaring a temp variable.Watch out: if the previous line does not end with a semicolon, starting a line with [ causes JavaScript to parse it as property indexing on the previous expression—always put a leading semicolon (;[a, b] = [b, a]) when omitting semicolons.Form 4: array destructuring with default values, const [a = 1, b = 2] = arrSyntax: const [sure = 20, aralik = 5, ucret = 27] = seferExample (from ts/arrays.ts):TypeScriptconst sefer: (number | undefined)[] = [34, undefined]
const [sure = 20, aralik = 5, ucret = 27] = sefer
console.log('form 4:', sure, aralik, ucret)
Output: form 4: 34 5 27Use it when: unpacking arrays that may be shorter than expected or contain undefined slots.Watch out: defaults only trigger when the slot is undefined (or out of bounds), never when it is null or 0.Form 5: basic object property extraction, const { a, b } = objSyntax: const { title, status } = taskExample (from ts/objects.ts):TypeScriptconst task: Task = { id: 't1', title: 'Buy milk', status: 'todo' }
const { title, status } = task
console.log('form 5:', title, status)
Output: form 5: Buy milk todoUse it when: pulling specific named fields out of a state object or API record.Watch out: property names must match the object keys; accessing a misspelled key gives undefined in JS and a compile error in TS.Form 6: renaming properties while destructuring, const { key: alias } = objSyntax: const { kod: hatKodu, sonDurak: bitis }: Hat = hatExample (from ts/objects.ts):TypeScripttype Hat = { kod: string; sonDurak: string; aktif: boolean }
const hat: Hat = { kod: 'M1B', sonDurak: 'Kirazlı', aktif: true }
const { kod: hatKodu, sonDurak: bitis }: Hat = hat
console.log('form 6:', hatKodu, bitis)
Output: form 6: M1B KirazlıUse it when: two objects have the same key name (like id or name) or you want a clearer local variable name.Watch out: the original key is on the left and the new variable name is on the right ({ kod: hatKodu }). The original key kod is not declared as a variable.Form 7: object defaults (with optional renaming), const { a = def } = objSyntax: const { ad, asansor = true, tip = 'Yeraltı' } = durakExample (from ts/objects.ts):TypeScripttype Durak = { ad: string; asansor?: boolean; tip?: string }
const durak: Durak = { ad: 'Bağcılar Meydan' }
const { ad, asansor = true, tip = 'Yeraltı' } = durak
console.log('form 7:', ad, asansor, tip)
Output: form 7: Bağcılar Meydan true YeraltıUse it when: handling configuration objects or optional properties that might be omitted.Watch out: if renaming and defaulting at the same time, write { oldKey: newVar = defaultVal }.Form 8: object rest properties, const { a, ...rest } = objSyntax: const { no, ...detay } = trenExample (from ts/objects.ts):TypeScriptconst tren: Tren = { no: 'ABB-104', vagon: 4, hat: 'M1B', depo: 'Esenler' }
const { no, ...detay } = tren
console.log('form 8:', no, detay)
Output: form 8: ABB-104 { vagon: 4, hat: 'M1B', depo: 'Esenler' }Use it when: omitting one or two fields from an object immutably (for example, stripping id or forwarding remaining props).Watch out: ...detay only copies own enumerable properties and performs a shallow copy.Form 9: nested object and array destructuring, const { a: { b }, c: [d] } = objSyntax: const { isletme: { kurum }, hatlar: [ilkHat] } = aktarmaExample (from ts/objects.ts):TypeScriptconst aktarma: Aktarma = {
  merkez: 'Kirazlı',
  isletme: { kurum: 'Metro İstanbul', ilce: 'Bağcılar' },
  hatlar: ['M1B', 'M3']
}
const {
  isletme: { kurum },
  hatlar: [ilkHat]
} = aktarma
console.log('form 9:', kurum, ilkHat)
Output: form 9: Metro İstanbul M1BUse it when: extracting a specific leaf value from a deeply structured response without creating intermediate variables.Watch out: isletme and hatlar themselves are not bound as variables here—only kurum and ilkHat are created. Avoid going deeper than two levels for readability.Form 10: computed property keys, const { [key]: val } = objSyntax: const { [secilen]: gunlukYolcu } = yolcuSayisiExample (from ts/objects.ts):TypeScripttype DurakAdi = 'esenler' | 'menderes' | 'kirazli'
const yolcuSayisi: Record<DurakAdi, number> = {
  esenler: 18500,
  menderes: 12400,
  kirazli: 41200
}
const secilen: DurakAdi = 'kirazli'
const { [secilen]: gunlukYolcu } = yolcuSayisi
console.log('form 10:', gunlukYolcu)
Output: form 10: 41200Use it when: the property name to extract is stored in a variable or parameter at runtime.Watch out: you must always provide a target variable alias after : ([secilen]: gunlukYolcu), because [secilen] alone is not a valid identifier.Form 11: parameter destructuring (options object & tuple parameter), fn({ a, b = 1 })Syntax: const flmOzet = ([fltr, sayi = 0]: [string, number?]): string => ...Example (from js/params.mjs and ts/params.ts):JavaScriptconst flmOzet = ([fltr, sayi = 0]) => `Filtre: ${fltr} (${sayi} film)`
console.log('form 11b:', flmOzet(['watched', 4]), flmOzet(['watchlist']))
Output: form 11b: Filtre: watched (4 film) Filtre: watchlist (0 film)Use it when: designing functions with named options or unpacking tuple arguments directly in the signature.Watch out: for object parameters in JS, add = {} at the end (function fn({ a } = {})) so calling fn() with zero arguments does not throw a TypeError.Form 12: destructuring in for...of loops (Object.entries and Map)Syntax: for (const [film, oync] of basrolStore)Example (from js/params.mjs):JavaScriptconst basrolStore = new Map([
  ['Lilja 4-ever', 'Oksana Akinshina'],
  ['Amélie', 'Audrey Tautou']
])

for (const [film, oync] of basrolStore) {
  console.log('form 12 (map):', film, oync)
}
Output:Plaintextform 12 (map): Lilja 4-ever Oksana Akinshina
form 12 (map): Amélie Audrey Tautou
Use it when: iterating over Object.entries(obj), Map instances, or .entries() pairs cleanly without [0] and [1] indexing.Watch out: plain objects are not directly iterable—wrap them in Object.entries(obj), whereas Map is iterable out of the box.PitfallsPitfall 1: destructuring undefined or null throws a TypeErrorAttempting const { a } = undefined or const { a } = null crashes immediately at runtime because JavaScript cannot convert undefined or null to an object. Always guard nullable values (const { a } = obj ?? {}) before destructuring.Pitfall 2: defaults only apply to undefined, never to nullIn js/pitfalls.mjs:JavaScriptconst film = { ad: 'Amélie', puan: null, yil: undefined }
const { puan = 8.0, yil = 2001 } = film
// puan is null, yil is 2001
Because puan is explicitly null, the default 8.0 is ignored and puan stays null. Only undefined (or a missing key) triggers a destructuring default.Pitfall 3: assigning without const/let requires wrapping parenthesesWriting { seciliFilm, durum } = obj as a standalone statement causes a SyntaxError because JavaScript parses a leading { as a block statement rather than an object pattern. Wrapping the whole assignment in parentheses fixes it:JavaScript;({ seciliFilm, durum } = { seciliFilm: 'Lilja 4-ever', durum: 'watched' })
Pitfall 4: destructuring makes a shallow copy (nested references are shared)In js/pitfalls.mjs, extracting const { detay } = orjinal and mutating detay.sure = 130 also mutates orjinal.detay.sure because detay points to the exact same inner object reference. In React/Redux/Reducer state updates, mutating nested references prevents re-renders and breaks immutability.Pitfall 5: order matters in arrays, key names matter in objectsIn ['Amrum', 'Amélie'], [birinci, ikinci] binds strictly by index 0 and 1. In { birinci: 'Amrum', ikinci: 'Amélie' }, writing { ikinci: ikincisi, birinci: birincisi } in reverse order still binds each value accurately by property name.TypeScript-Only Topics (T1–T5)T1 (Rename vs Type): Inside { x: horizontal }, the colon renames x to horizontal; it is not a type annotation. Types go after the entire pattern: const { kod: hatKodu }: Hat = hat.T2 (Tuple vs Array): type SeferBilgi = [hat: string, dakika: number, aktif: boolean] fixes the length and position types, so destructuring [hat, dk, acik] gives dk: number directly instead of a wide string | number | boolean union.T3 (Discriminated Union Narrowing): Checking switch (action.type) narrows FilmAction so destructuring const { ad, puan } = action inside case 'puanla' is completely type-safe.T4 (noUncheckedIndexedAccess): With strict indexing enabled, array destructuring [ilk, , , dorduncu] types elements as string | undefined, forcing safe access (ilk?.toUpperCase(), dorduncu ?? 'Durak yok').T5 (as const Readonly Tuples): Adding as const to ['Amélie', 'Cast Away', 'Capernaum'] as const narrows destructured items to exact string literal types ('Amélie', 'Cast Away') instead of string.Props and children (P1–P7)Implemented in both js/props.jsx and ts/props.tsx using renderToStaticMarkup:P1 (Parameter destructuring): function DurakKarti({ ad, hat }: DurakKartiProps) unpacks props right in the component signature.P2 (Default prop values): function FilmRozet({ ad, durum = 'watchlist', puan = 8.0 }: FilmRozetProps) supplies fallback values for omitted optional props.P3 (Rest props forwarding): function OzelButon({ etiket, ...restProps }: OzelButonProps) collects native button attributes via ComponentPropsWithoutRef<'button'> and spreads {...restProps} onto <button>.P4 (children prop): function Kutu({ baslik, children }: KutuProps) extracts children: ReactNode alongside custom props.P5 (Nested object & tuple props): function AktarmaSatir({ istasyon: { ad, ilce }, hatlar: [anaHat] }: AktarmaSatirProps) destructures nested station details and the primary transit line in one signature.P6 (Callback props): function FiltreBtn({ fltr, onSec }: FiltreBtnProps) destructures the filter value and callback handler used in status filter bars.P7 (Hook return destructuring): Inside IzlemeListesi, const [fltr, setFltr] = useState<Filtre>('all') and const [flmler, dispatch] = useReducer(filmReducer, ...) unpack tuple return values from React hooks.JavaScript vs TypeScriptFeature / BehaviorJavaScript (.mjs / .jsx)TypeScript (.ts / .tsx)1. Colon : inside { a: b }Always renames property a to local variable b.Also renames a to b; type annotations must go outside the pattern (: Type).2. Missing object propertySilently evaluates to undefined at runtime.Compile-time error (Property '...' does not exist on type '...').3. Array out-of-bounds elementEvaluates to undefined without warning.With noUncheckedIndexedAccess, typed as T | undefined, requiring a default or optional chaining.4. Tuple vs Array returnBoth are plain arrays at runtime; position types are unchecked.Tuple [number, number] gives exact per-index types (number), whereas number[] gives number | undefined.5. as const array destructuringNot valid syntax in plain JS.Produces readonly literal types (e.g. 'Amélie' instead of string).6. Discriminated union destructuringRuntime error if accessing a field that only exists on another action variant.Narrowed automatically after checking action.type in a switch or if.7. Computed key { [k]: val }Any expression works; missing keys yield undefined.Key k must be a known literal or keyof typeof obj (e.g. DurakAdi) to pass strict checks.8. React component props & rest({ etiket, ...restProps }) accepts any props without validation.Typed with { etiket: string } & ComponentPropsWithoutRef<'button'> so invalid HTML attributes fail tsc.My own logColon confusion in TypeScript (T1 / Form 6): When I first converted js/objects.mjs to ts/objects.ts, I instinctively wrote const { kod: string, sonDurak: string } = hat. TypeScript immediately complained about duplicate identifier string because : inside an object destructuring pattern renames the key rather than declaring a type. Moving : Hat to the right side of the pattern fixed it and made the distinction clear.Missing leading semicolon before [gidis, donus] = [donus, gidis] (Form 3): Because I write code without trailing semicolons, putting [gidis, donus] = ... directly under let donus = 'M1B Kirazlı' caused a runtime ReferenceError / TypeError as JS tried to index 'M1B Kirazlı'[gidis, donus]. Adding a leading ; before [ solved it.Forgetting parentheses in bare assignment (Pitfall 3): In js/pitfalls.mjs, I initially wrote { seciliFilm, durum } = { ... } without const or let, which threw a SyntaxError: Unexpected token '='. Wrapping the entire statement in ({ ... } = { ... }) taught me how JS distinguishes code blocks from destructuring targets.noUncheckedIndexedAccess on nested array props (Form 9 / P5): When I typed hatlar as string[] in AktarmaSatirProps and destructured hatlar: [anaHat], npm run check flagged anaHat as string | undefined. Changing the tuple type to [string, ...string[]] guaranteed at least one element and satisfied tsc --noEmit cleanly.Expecting null to trigger a default value (Pitfall 2): While testing js/pitfalls.mjs with { ad: 'Amélie', puan: null, yil: undefined }, I expected puan = 8.0 to fall back to 8.0. Seeing null printed in the terminal confirmed that destructuring defaults strictly check === undefined, unlike ??.

