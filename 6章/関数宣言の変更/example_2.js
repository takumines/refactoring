/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
class Book {
  addReservation (customer) {
    this._reservations.push(customer)
  }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング
 |--------------------------------------------------------------------------
 */

// STEP-1 関数の抽出
class Book {
  addReservation (customer) {
    this.zz_addReservation(customer, false)
  }

  zz_addReservation (customer, isPriority) {
    this._reservations.push(customer)
  }
}

// STEP-2 パラメータの追加
class Book {
  addReservation (customer) {
    this.zz_addReservation(customer, false)
  }

  zz_addReservation (customer, isPriority) {
    this._reservations.push(customer)
  }
}

// STEP-3 アサーションの導入
class Book {
  addReservation (customer) {
    this.zz_addReservation(customer, false)
  }

  zz_addReservation (customer, isPriority) {
    assert(isPriority === true || isPriority === false)
    this._reservations.push(customer)
  }
}
