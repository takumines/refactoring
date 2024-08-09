/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 電話番号を保持するPersonクラス
// TelephoneNumberが変更可能な状態になっている
class Person {
  constructor () {
    this._telephoneNumber = new TelephoneNumber()
  }

  get officeAreaCode () { return this._telephoneNumber.areaCode }

  set officeAreaCode (arg) { this._telephoneNumber.areaCode = arg }

  get officeNumber () { return this._telephoneNumber.number }

  set officeNumber (arg) { this._telephoneNumber.number = arg }
}

class TelephoneNumber {
  get areaCode () { return this._areaCode }

  set areaCode (arg) { this._areaCode = arg }

  get number () { return this._number }

  set number (arg) { this._number = arg }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// TelephoneNumberクラスを不変にする
class TelephoneNumber {
  constructor (areaCode, number) {
    this._areaCode = areaCode
    this._number = number
  }

  get areaCode () { return this._areaCode }

  get number () { return this._number }

  // 等価性の判定を追加
  equals (other) {
    if (!(other instanceof TelephoneNumber)) return false
    return this.areaCode === other.areaCode && this.number === other.number
  }
}

class Person {
  get officeAreaCode () {return this._telephoneNumber.areaCode}

  set officeAreaCode (arg) {this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber)}

  get officeNumber () {return this._telephoneNumber.number}

  set officeNumber (arg) { this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg) }
}
