/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// applyAdjustmentメソッド内で、_productionプロパティに値を加算している
// _productionの値を変更する箇所が複数あるため、変更箇所が増えると修正箇所が増える
class ProductionPlan {
  get production() { return this._production; }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// 計算して取得できる場合は、_productionプロパティを更新するのではなく、計算用のメソッドを追加する
class ProductionPlan {
  get production() { return this._production; }
  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}
