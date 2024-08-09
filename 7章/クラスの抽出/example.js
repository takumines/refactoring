/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
class Person {
  get name () { return this._name }

  set name (aString) { this._name = aString }

  get telephoneNumber () { return `(${this.officeAreaCode}) ${this.officeNumber}` }

  get officeAreaCode () { return this._officeAreaCode }

  set officeAreaCode (arg) { this._officeAreaCode = arg }

  get officeNumber () { return this._officeNumber }

  set officeNumber (arg) { this._officeNumber = arg }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// 電話番号の振る舞いを別クラスに切り出す
class TelephoneNumber {
  get areaCode () { return this._areaCode }

  set areaCode (arg) { this._areaCode = arg }

  get number () { return this._number }

  set number (arg) { this._number = arg }

  get toString () { return `(${this.areaCode}) ${this.number}` }
}

class Person {
  constructor () {
    this._telephoneNumber = new TelephoneNumber()
  }

  get name () { return this._name }

  set name (aString) { this._name = aString }

  get telephoneNumber () { return this._telephoneNumber.toString }

  get officeAreaCode () { return this._telephoneNumber.areaCode }

  set officeAreaCode (arg) { this._telephoneNumber.areaCode = arg }

  get officeNumber () { return this._telephoneNumber.number }

  set officeNumber (arg) { this._telephoneNumber.number = arg }
}
