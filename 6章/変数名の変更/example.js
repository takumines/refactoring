/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
let tpHd = "untitled";
// 変数の参照
result += `<h1>${tpHd}</h1>`;
// 変数の更新
tpHd = obj["articleTitle"];

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// 変数のカプセル化をする
result += `<h1>${title()}</h1>`;
setTitle(obj["articleTitle"]);

function title() {
  return tpHd;
}
function setTitle(arg) {
  tpHd = arg;
}

// 変数名の変更
let _title = "untitled";
function title() {
  return _title;
}
function setTitle(arg) {
  _title = arg;
}
