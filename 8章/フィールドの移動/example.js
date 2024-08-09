/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 顧客と契約のコード
class Customer {
  constructor (name, discountRate) {
    this._name = name
    this._discountRate = discountRate
    this._contract = new CustomerContract(dateToday())
  }

  get discountRate () { return this._discountRate }

  becomePreferred () {
    this._discountRate += 0.03
  }

  applyDiscount (amount) {
    return amount.subtract(amount.multiply(this._discountRate))
  }
}

class CustomerContract {
  constructor (startDate) {
    this._startDate = startDate
  }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// discountRate(割引率)をCustomerContractクラスに移動する
class Customer {
  constructor (name, discountRate) {
    this._name = name
    this._contract = new CustomerContract(dateToday())
    this._setDiscountRate(discountRate)
  }

  get discountRate () { return this._contract.discountRate }

  _setDiscountRate (aNumber) { this._contract.discountRate = aNumber }

  becomePreferred () {
    this._setDiscountRate(this.discountRate + 0.03)
  }

  applyDiscount (amount) {
    return amount.subtract(amount.multiply(this.discountRate))
  }
}

class CustomerContract {
  constructor (startDate, discountRate) {
    this._startDate = startDate
    this._discountRate = discountRate
  }

  get discountRate () { return this._discountRate }

  set discountRate (arg) {this._discountRate = arg}
}
