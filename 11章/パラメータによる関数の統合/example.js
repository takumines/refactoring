/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
function tenPercentRaise (aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1)
}

function fivePercentRaise (aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05)
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
function raise (aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor)
}
