/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// テスト
import { defaultOwner } from './example'

const owner1 = defaultOwner()
assert.equals("Fowler", owner1.lastName, "when set")
const owner2 = defaultOwner()
owner2.lastName = "Parsons"
assert.equals("Parsons", owner2.lastName, "when get") // 値を変更できてしまうとテストが通る

/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// レコードのカプセル化を行い、データ構造を変更できないようにする
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
export function defaultOwner() {
  return new Person(defaultOwnerData);
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

class Person {
  constructor (data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() { return this._lastName }
  get firstName() { return this.firstName }
}

// テスト
const owner2 = defaultOwner()
owner2.lastName = "Parsons" // 更新できないようにしている
assert.equals("Parsons", owner2.lastName, "when get") 
