/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
const foundPerson = (people) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don'
    }
    if (people[i] === 'John') {
      return 'John'
    }
    if (people[i] === 'kent') {
      return 'kent'
    }

    return ''
  }
}
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
const foundPerson = (people) => {
  const candidates = ['Don', 'John', 'kent']
  return people.find(p => candidates.includes(p)) || ''
}
