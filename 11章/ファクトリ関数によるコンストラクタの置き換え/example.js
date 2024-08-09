/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
class Employee {
  constructor (name, typeCode) {
    this._name = name
    this._typeCode = typeCode
  }

  get name () {
    return this._name
  }

  get type () {
    return Employee.legalTypeCodes[this._typeCode]
  }

  static get legalTypeCodes () {
    return { 'E': 'Engineer', 'M': 'Manager', 'S': 'Salesman' }
  }
}

// 呼び出しコード
const candidate = new Employee(document.name, document.empType)

const leadEngineer = new Employee(document.leadEngineer, 'E')
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// ファクトリ関数を作成する
function createEmployee (name, typeCode) {
  return new Employee(name, typeCode)
}

function createEngineer (name) {
  return new Employee(name, 'E')
}

// 呼び出しコード
const candidate = createEmployee(document.name, document.empType)
const leadEngineer = createEngineer(document.leadEngineer)
