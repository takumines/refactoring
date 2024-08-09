/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 鳥のコレクションからどれくらいは早く飛べるか？どんな羽毛を持っているかを判定するプログラム
// 鳥の種類によって振る舞いが異なる関数plumageとairSpeedVelocityがある
function plumages (birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]))
}

function speeds (birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}

function plumage (bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 'average'
    case 'AfricanSwallow':
      return (bird.numberOfCoconuts > 2) ? 'tried' : 'average'
    case 'NorwegianBlueParrot':
      return (bird.voltage > 100) ? 'scorched' : 'beautiful'
    default:
      return 'unknown'
  }
}

function airSpeedVelocity (bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 35
    case 'AfricanSwallow':
      return 40 - 2 * bird.numberOfCoconuts
    case 'NorwegianBlueParrot':
      return (bird.isNailed) ? 0 : 10 + bird.voltage / 10
    default:
      return null
  }
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// 鳥の種類によって振る舞いが異なる関数を、クラスを作成し型固有の動作に分離してポリモーフィズムを実現する

// まずは関数plumageとairSpeedVelocityに対して関数群のクラスへの集約を行う
function plumage (bird) {
  return new Bird(bird).plumage
}

function airSpeedVelocity (bird) {
  return new Bird(bird).airSpeedVelocity
}

class Bird {
  constructor (birdObject) {
    Object.assign(this, birdObject)
  }

  get airSpeedVelocity () {
    switch (this.type) {
      case 'EuropeanSwallow':
        return 35
      case 'AfricanSwallow':
        return 40 - 2 * this.numberOfCoconuts
      case 'NorwegianBlueParrot':
        return (this.isNailed) ? 0 : 10 + this.voltage / 10
      default:
        return null
    }
  }
}

// 次にそれぞれの種類の取りに対するサブクラスを追加し、
// 適切なサブクラスをインスタンス化するファクトリ関数も作成する

function plumages (birds) {
  return new Map(birds.map(b => createBird(b))
    .map(bird => [bird.name, bird.plumage]))
}

function speeds (birds) {
  return new Map(birds.map(b => createBird(b))
    .map(bird => [bird.name, bird.airSpeedVelocity]))
}

function createBird (birdObject) {
  switch (birdObject.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(birdObject)
    case 'AfricanSwallow':
      return new AfricanSwallow(birdObject)
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(birdObject)
    default:
      return new Bird(birdObject)
  }
}

class Bird {
  constructor (birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage () {
    return 'unknown'
  }

  get airSpeedVelocity () {
    return null
  }
}

class EuropeanSwallow extends Bird {
  get plumage () {
    return 'average'
  }

  get airSpeedVelocity () {
    return 35
  }
}

class AfricanSwallow extends Bird {
  get plumage () {
    return (this.numberOfCoconuts > 2) ? 'tried' : 'average'
  }

  get airSpeedVelocity () {
    return 40 - 2 * this.numberOfCoconuts
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage () {
    return (this.voltage > 100) ? 'scorched' : 'beautiful'
  }

  get airSpeedVelocity () {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10
  }
}
