/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
let basePrice = order.quantity * order.itemPrice
return (basePrice > 1000)

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
return anOrder.basePrice > 1000
