/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 注文を表現するOrderクラス
// このインスタンスは外部から渡されるJSONオブジェクトから作成できる
// 特定の顧客IDを参照する注文が5件ある場合、5個のOrderインスタンスが作成される
// 5個の顧客データを同じデータで更新したい場合、5個のOrderインスタンスを更新する必要がある
class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }
  get customer() { return this._customer; }
}

class Customer {
  constructor(data) {
    this._id = data.id;
  }
  get id() { return this._id; }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// リポジトリを作成して、リファクタリングする
let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new CustomerData(id));
  }
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }
  get customer() { return this._customer; }
}
