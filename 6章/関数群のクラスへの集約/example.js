/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 下記の毎月紅茶メータのデータに対して計算を行うコードが散漫している前提
reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

// 基本料金の計算
const aReading = acquireReading()
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity

// 生活必需品は無税
const aReading = acquireReading()
const base = baseRate(aReading.month, aReading.year) * aReading.quantity
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))

// 別の場所では、関数の抽出が行われている
const aReading = acquireReading()
const basicChargeAmount = calculateBaseCharge(aReading)

function calculateBaseCharge (aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// 関数とデータの結びつきを強くするために、レコードのカプセル化を行いクラスを作る
class Reading {
  constructor (data) {
    this._customer = data.customer
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
  }

  get customer () { return this._customer }

  get quantity () { return this._quantity }

  get month () { return this._month }

  get year () { return this._year }

  // 関数の移動を行い、クラス内に閉じ込めて、命名を変更
  get baseCharge () {
    return baseRate(this.month, this.year) * this.quantity
  }

  get taxableCharge () {
    return Math.max(0, this.baseCharge - taxThreshold(this.year))
  }
}

// 呼び出し側
const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const taxableCharge = aReading.taxableCharge
