/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 給与総額(totalSalary)と最年少(youngest)を求める
function getYoungestAndTotalSalary (people) {
  let youngest = people[0] ? people[0].age : Infinity
  let totalSalary = 0
  for (const p of people) {
    if (p.age < youngest) youngest = p.age
    totalSalary += p.salary
  }

  return `youngest: ${youngest}, totalSalary: ${totalSalary}`
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
*/
function getYoungestAndTotalSalary (people) {
  const youngest = getYoungest(people)
  const totalSalary = getTotalSalary(people)

  return `youngest: ${youngest}, totalSalary: ${totalSalary}`

  function getYoungest (people) {
    return people.reduce((youngest, p) => Math.min(youngest, p.age), Infinity)
  }

  function getTotalSalary (people) {
    return people.reduce((totalSalary, p) => totalSalary + p.salary, 0)
  }
}
