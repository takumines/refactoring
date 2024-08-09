/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 好ましからざる人物のリストをスキャンする関数を例に、
// 一人でも見つけたらその人を退会させて、その人物名を返す関数
function alertForMiscreant (users) {
  for (const u of users) {
    if (u === 'Don') {
      deactivateUser(u)
      return 'Don'
    }
    if (u === 'John') {
      deactivateUser(u)
      return 'John'
    }
  }
  return ''
}

function deactivateUser () {
  // 何かしらの退会処理
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// 人を探す関数から副作用を取り除く
function findMiscreant (people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don'
    }
    if (p === 'John') {
      return 'John'
    }
  }
  return ''
}

function deactivateForMiscreant (people) {
  if (findMiscreant(people) !== '') deactivateUser()
}
