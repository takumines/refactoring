/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
/**
 * 注文の価格を計算するコード
 * このコードは下記の2つのフェーズが含まれている
 * 1. 製品情報を使ってbasePrice(基本価格)とdiscount(割引)を計算する
 * 2. 配送情報を使ってshippingCost(送料)を計算する
 */
function priceOrder (product, quantity, shippingMethod) {
  let basePrice = product.basePrice * quantity
  let discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  let shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase
  let shippingCost = quantity * shippingPerCase
  let price = basePrice - discount + shippingCost
  return price
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */

// STEP-1 送料の計算を関数に抽出する
function priceOrder (product, quantity, shippingMethod) {
  let basePrice = product.basePrice * quantity
  let discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  let price = applyShipping(basePrice, shippingMethod, quantity, discount)
  return price
}

function applyShipping (basePrice, shippingMethod, quantity, discount) {
  let shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase
  let shippingCost = quantity * shippingPerCase
  return basePrice - discount + shippingCost
}

// STEP-2 フェーズ間で情報を受け渡すための中間データ構造を作成する
function priceOrder (product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(priceData, shippingMethod)
}

function calculatePricingData (product, quantity) {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  return { basePrice: basePrice, discount: discount }
}

function applyShipping (priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  priceData.shippingCost = shippingCost
  return priceData.basePrice - priceData.discount + priceData.shippingCost
}
