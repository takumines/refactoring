/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
class Order {
  constructor(data) {
    this._priority = data.priority;
    // 他にもたくさんのフィールドがある
  }
}

// 呼び出し側
const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// 変数のカプセル化を行う
class Order {
  constructor(data) {
    this._priority = data.priority;
    // 他にもたくさんのフィールドがある
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = aString
  }
}
// Priorityの値オブジェクトを作成
class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    this._value = value;
  }

  toString() {
    return this._value;
  }
}
// Orderクラスの修正
class Order {
  constructor(data) {
    this._priority = new Priority(data.priority);
    // 他にもたくさんのフィールドがある
  }
  get priority() {
    return this._priority.toString();
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }
}
