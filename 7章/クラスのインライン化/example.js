/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */

// 出荷の追跡情報を保持するクラス
class TrackingInformation {
  get shippingCompany () {
    return this._shippingCompany
  }

  set shippingCompany (arg) {
    this._shippingCompany = arg
  }

  get trackingNumber () {
    return this._trackingNumber
  }

  set trackingNumber (arg) {
    this._trackingNumber = arg
  }

  display () {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }
}

// 出荷クラスで追跡情報を参照する
class Shipment {
  get trackingInfo () {
    return this._trackingInformation.display()
  }

  get trackingInformation () {
    return this._trackingInformation
  }

  set trackingInformation (aTrackingInformation) {
    this._trackingInformation = aTrackingInformation
  }
}

// TrackingInformationを使う側
aShipment = trackingInformation.shippingCompany = request.vendor
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// TrackingInformationクラスをShipmentクラスにインライン化する
// Shipmentクラスに移譲メソッドをおき、クライアントから呼べるようにする
class Shipment {
  set shippingCompany (arg) {
    this._trackingInformation._shippingCompany = arg
  }
}

// TrackingInformationを使う側
aShipment.shippingCompany = request.vendor

// クラスのインライン化を行う
class Shipment {
  get trackingInfo () {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }

  get shippingCompany () {
    return this._trackingInformation._shippingCompany
  }

  set shippingCompany (arg) {
    this._trackingInformation._shippingCompany = arg
  }

  get trackingNumber () {
    return this._trackingInformation._trackingNumber
  }

  set trackingNumber (arg) {
    this._trackingInformation._trackingNumber = arg
  }
}
