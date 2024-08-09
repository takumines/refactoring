/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
class Person {
  get name () {
    return this._name
  }

  set name (arg) {
    this._name = arg
  }

  get id () {
    return this._id
  }

  set id (arg) {
    this._id = arg
  }
}

// 呼び出しコード
const martin = new Person()
martin.name = 'martin'
martin.id = '1234'

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// IDを後から変更できないようにする
class Person {
  constructor (id) {
    this.id = id
  }

  get name () {
    return this._name
  }

  set name (arg) {
    this._name = arg
  }
}

// 呼び出しコード
const martin = new Person('1234')
martin.name = 'martin'
