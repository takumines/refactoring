/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// 公共事業会社が多くのSite(場所)にサービスを提供している
class Site {
  constructor(customer) {
    this._customer = customer;
  }
  get customer() {
    return this._customer;
  }
}

// Consumer(顧客)クラスには様々なプロパティがあるがそのうちの３つを検討する
class Consumer {
  get name() { ... }
  get billingPlan() { ... }
  set billingPlan(arg) { ... }
  get paymentHistory() { ... }
}
// ほとんどのSite(場所)はConsumer(顧客)を持っているが、いないことがある(転出や転入したてでまだ登録されていないなど)
// その場合はunknownとして扱う
// 未知の顧客にはデフォルト値を設定している

// 呼び出しコード1
const aCustomer = site.customer;
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

// 呼び出しコード2
const plan = (aCustomer === "unknown") ? registry.billingPlans.basic : aCustomer.billingPlan;

// 呼び出しコード3
if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

// 呼び出しコード4
const weeksDelinquent = (aCustomer === "unknown") ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// 未知の顧客判定処理をConsumerクラスに追加する
class Consumer {
  get name() { ... }
  get billingPlan() { ... }
  set billingPlan(arg) { ... }
  get paymentHistory() { ... }
  get isUnknown() { return false; }
}

// 未知の顧客を表すクラスを作成する
class UnknownCustomer {
  get isUnknown() { return true; }

  get name() { return "occupant"; }
  get billingPlan() { return registry.billingPlans.basic; }
  set billingPlan(arg) { }

  // 未知の顧客の支払い履歴を表すクラスを作成する
  get paymentHistory() { return new NullPaymentHistory(); }
}

// 未知の顧客の支払い履歴を表すクラスを作成する
class NullPaymentHistory {
  get weeksDelinquentInLastYear() { return 0; }
}

// 未知の顧客を表すクラスを返す関数を作成する
function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
    throw new Error(`不正なカスタマー${arg}`);
  }
  return arg.isUnknown;
}

class Site {
  constructor(customer) {
    this._customer = customer;
  }
  get customer() {
    return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
  }
}


// 呼び出しコード1
const aCustomer = site.customer;
const customerName = aCustomer.name;

// 呼び出しコード2
const plan = aCustomer.billingPlan;

// 呼び出しコード3
aCustomer.billingPlan = newPlan;

// 呼び出しコード4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
