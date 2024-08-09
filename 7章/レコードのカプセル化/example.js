/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
organization = { name: 'takumi kurogi', country: 'JP' }
// 上記のレコードがプログラムの至る所で使われている
result += `<h1>${organization.name}</h1>`
// 次のように更新される
organization.name = newName

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// レコードをクラスに変更する
class Organization {
  constructor (data) {
    this._name = data.name
    this._country = data.country
  }

  get name () { return this._name }

  set name (aString) { this._name = aString }

  get country () { return this._country }

  set country (aCountryCode) { this._country = aCountryCode }
}
