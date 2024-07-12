/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 人と部署の関係をクラスで表現する
class Person {
  constructor(name) {
    this._name = name
  }

  get name() { return this._name }
  get department() { return this._department }
  set department(arg) { this._department = arg }
}

class Department {
  get chargeCode() { return this._chargeCode }
  set chargeCode(arg) { this._chargeCode = arg }
  get manager() { return this._manager }
  set manager(arg) { this._manager = arg }
}

// 呼び出し側
// 上司を調べるために、部署を経由して上司を取得する
manager = aPerson.department.manager
// これだと、Departmentクラスの振る舞いと、部署が上司を取得する責務を持っていることが呼び出し側から丸見え
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// Departmentクラスをクライアントから隠蔽することで、Departmentクラスの振る舞いを変更してもクライアントに影響が出ないようにする
class Person {
  get manager() { return this._department.manager }
}

// 呼び出し側
manager = aPerson.manager
