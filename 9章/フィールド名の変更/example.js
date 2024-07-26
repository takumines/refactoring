/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 定数宣言
const organization = { name: "Acme Gooseberries", country: "GB" };

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// nameフィールドをtitleに変更
// まずはレコードのカプセル化を行う
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() { return this._title; }
  set name(aString) { this._title = aString; }
  get country() { return this._country; }
  set country(aCountryCode) {this._country = aCountryCode}
}
// フィールド名をtitleに変更
class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }
  get title() { return this._title; }
  set title(aString) { this._title = aString; }
  get country() { return this._country; }
  set country(aCountryCode) {this._country = aCountryCode}
}
