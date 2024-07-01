/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
let defaultOwner = { firstName: "Martin", lastName: "Fowler" };
// 参照元
spaceship.owner = defaultOwner;
// 更新処理
defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };

/*
  |--------------------------------------------------------------------------
  | リファクタリング後
  |--------------------------------------------------------------------------
 */
// STEP-1 読み書きをするための関数を作成し、カプセル化する
function getDefaultOwner() {
  return defaultOwner;
}
function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 参照元
spaceship.owner = getDefaultOwner();
// 更新処理
setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

// STEP-2 変数の可視性を制限する
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}
