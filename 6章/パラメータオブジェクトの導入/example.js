/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
const station = {
  name: 'Zushi',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' }
  ]
}

function readingsOutsideRange (station, min, max) {
  return station.readings.filter(r => r.temp < min || r.temp > max)
}

// 呼び出し側のコード
alerts = readingsOutsideRange(
  station,
  operationgPlan.temperatureFloor,
  operationgPlan.temperatureCeiling
)

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// 値オブジェクトを作成し、振る舞いをもたせる
class NumberRange {
  constructor (min, max) {
    this._data = { min: min, max: max }
  }

  get min () {
    return this._data.min
  }

  get max () {
    return this._data.max
  }

  contains (arg) {
    return arg >= this.min && arg <= this.max
  }
}

const range = new NumberRange(
  operationgPlan.temperatureFloor,
  operationgPlan.temperatureCeiling
)

// 呼び出し側のコードの引数に値オブジェクトのインスタンを渡し、振る舞いを呼び出す
function readingsOutsideRange (station, range) {
  return station.readings.filter(r => !range.contains(r.temp))
}
