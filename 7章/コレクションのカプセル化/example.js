/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 一人が複数の授業を受講する場合
// うまくカプセル化されている用に見えるが、coursesは直接変更が加えれる状態にある
class Person {
  constructor(name) {
    this._name = name
    this._courses = []
  }

  get name() { return this._name }
  get courses() { return this._courses }
  set courses(aList) { this._courses = aList }
}

class Course {
  constructor (name, isAdvanced) {
    this._name = name
    this._isAdvanded = isAdvanced
  }

  get name() { return this._name }
  get isAdvanced() { return this._isAdvanded }
}
// 授業のリストを取得
numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length
// 授業を追加
for (const name of readBasicCourseNames(name)) {
  aPerson.courses.push(new Course(name, false))
}
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// PersonクラスにaddCourseやremoveCourseメソッドを追加し、coursesを直接変更できないようにする
class Person {
  constructor(name) {
    this._name = name
    this._courses = []
  }

  get name() { return this._name }
  get courses() { return this._courses.slice() }

  addCourse(aCourse) { this._courses.push(aCourse) }
  removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError() }) {
    const index = this._courses.indexOf(aCourse)
    if (index === -1) fnIfAbsent()
    else this._courses.splice(index, 1)
  }
}
// 授業を追加処理
for (const name of readBasicCourseNames(name)) {
  aPerson.addCourse(new Course(name, false))
}
