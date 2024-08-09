/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// PersonクラスがDepartmentクラスへのリンクを保持している
// この構成だと同様の委譲の隠蔽メソッドが増えた場合に、Personクラスには単純な移譲があふれかえることになる
class Person {
  get manager () { return this._department.manager }
}

class Department {
  get manager () { return this._manager }
}

// 呼び出し側
manager = aPerson.manager
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// 委譲の仲介人の除去をする
class Person {
  get department () { return this._department }
}

// 呼び出し側
manager = aPerson.department.manager
