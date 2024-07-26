/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime;
  let secondaryTime = time - primaryTime
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
function distanceTravelled(scenario, time) {
  let primaryTime = Math.min(time, scenario.delay);
  let secondaryTime = time - primaryTime

  return getResult(secondaryTime, scenario, primaryTime)
}

function getResult(secondaryTime, scenario, primaryTime) {
  if (secondaryTime > 0) {
    return secondaryDistance(scenario, primaryTime, secondaryTime);
  }

  return  primaryDistance(scenario, primaryTime);
}

function primaryDistance(scenario, primaryTime) {
  let acc = scenario.primaryForce / scenario.mass;
  return 0.5 * acc * primaryTime * primaryTime;
}

function secondaryDistance(scenario, primaryTime, secondaryTime) {
  let primaryVelocity = scenario.primaryForce / scenario.mass * scenario.delay;
  let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
  return primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
}
