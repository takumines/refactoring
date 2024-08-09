/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
function getAvailableResource () {
  let result
  if (availableReousrces.length === 0) {
    result = setupGrowthChart(documentId)
    allocatedResources.push(result)
  } else {
    result = availableReousrces.pop()
    allocatedResources.push(result)
  }

  return result
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
function getAvailableResource () {
  let result
  if (availableReousrces.length === 0) {
    result = setupGrowthChart(documentId)
  } else {
    result = availableReousrces.pop()
  }
  allocatedResources.push(result)

  return result
}
