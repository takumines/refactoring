/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 口座の種類ごとに手数料を計算するアルゴリズムを切り替える処理
class Account {
  get bankCharge () {
    let result = 4.5
    if (this.daysOverdrawn > 0) result += this.overdraftCharge
    return result
  }

  // 口座の種類によって手数料を計算する処理
  get overdraftCharge () {
    if (this.type.isPremium) {
      const baseCharge = 10
      if (this.daysOverdrawn <= 7) {
        return baseCharge
      } else {
        return baseCharge + (this.daysOverdrawn - 7) * 0.85
      }
    } else {
      return this.daysOverdrawn * 1.75
    }
  }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// overdraftChargeメソッドをAccountTypeクラスに移動し、Accountクラスから呼び出すようにする
class AccountType {
  overdraftCharge (daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10
      if (daysOverdrawn <= 7) {
        return baseCharge
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85
      }
    } else {
      return daysOverdrawn * 1.75
    }
  }
}

class Account {
  get bankCharge () {
    let result = 4.5
    if (this.daysOverdrawn > 0) result += this.type.overdraftCharge(this.daysOverdrawn)
    return result
  }
}
