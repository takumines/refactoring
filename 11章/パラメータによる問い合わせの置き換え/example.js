/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
class HeatingPlan {
  get targetTemperature () {
    if (thermostat.selectedTemperature > this._max) return this._max
    else if (thermostat.selectedTemperature < this._min) return this._min
    else return thermostat.selectedTemperature
  }
}

// 呼び出し元
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat()
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool()
else setOff()

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
class HeatingPlan {
  get targetTemperature (selectedTemperature) {
    if (selectedTemperature > this._max) return this._max
    else if (selectedTemperature < this._min) return this._min
    else return selectedTemperature
  }
}

// 呼び出し元
const targetTemperature = thePlan.targetTemperature(thermostat.selectedTemperature)
if (targetTemperature > thermostat.currentTemperature) setToHeat()
else if (targetTemperature < thermostat.currentTemperature) setToCool()
else setOff()
