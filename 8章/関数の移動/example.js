/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 例としてGPSの追跡記録から合計距離を計算する関数を扱う
function trackSummary (points) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance(points)
  const pace = totalTime / 60 / totalDistance
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace
  }

  function calculateDistance (points) {
    let result = 0
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i])
    }
    return result
  }

  function distance (p1, p2) {
    const EARTH_RADIUS = 3959 // 地球の半径のマイル
    const dLat = radians(p2.lat) - radians(p1.lat)
    const dLon = radians(p2.lon) - radians(p1.lon)
    const a = Math.pow(Math.sin(dLat / 2), 2)
      + Math.cos(radians(p2.lat))
      * Math.cos(radians(p1.lat))
      * Math.pow(Math.sin(dLon / 2), 2)

    const c = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return EARTH_RADIUS * c
  }

  function radians (degrees) {
    return degrees * Math.PI / 180
  }

  function calculateTime () { /** */ }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// calculateDistance関数をトップレベルに移動して、trackSummary関数の他の部分に依存せず、合計距離を計算できるようにする
// 関数をトップレベルにコピーする
function totalDistance (points) {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i])
  }
  return result

}

// radians関数はdistance関数内でしか使われていない、distance関数はcalculateDistance関数内でしか使われていない
// 上記の関数をトップレベルに移動する
function totalDistance (points) {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i])
  }
  return result

  function distance (p1, p2) {
    const EARTH_RADIUS = 3959 // 地球の半径のマイル
    const dLat = radians(p2.lat) - radians(p1.lat)
    const dLon = radians(p2.lon) - radians(p1.lon)
    const a = Math.pow(Math.sin(dLat / 2), 2)
      + Math.cos(radians(p2.lat))
      * Math.cos(radians(p1.lat))
      * Math.pow(Math.sin(dLon / 2), 2)

    const c = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return EARTH_RADIUS * c
  }

  function radians (degrees) {
    return degrees * Math.PI / 180
  }
}

// calculateDistance関数を削除し、トップレベル関数を呼び出すようにする
function trackSummary (points) {
  const totalTime = calculateTime()
  const pace = totalTime / 60 / totalDistance(points)
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace
  }
}
