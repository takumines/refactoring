/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 例：部屋の温度管理システムで、一日における室温の範囲とあらかじめ指定HeatingPlanを比較する

// 呼び出し元
const low = aRoom.daysTempRange.low
const high = aRoom.daysTempRange.high
if (!aPlan.withinRange(low, high)) {
  alerts.push('室温が設定値を超えました')
}

class HeatingPlan {
  withinRange (bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high)
  }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 範囲情報をバラバラにして渡す代わりに、範囲オブジェクトを渡すようにする
class HeatingPlan {
  withinRange (aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.high <= this._temperatureRange.high)
  }
}

// 呼び出し元
if (!aPlan.withinRange(aRoom.daysTempRange)) {
  alerts.push('室温が設定値を超えました')
}
