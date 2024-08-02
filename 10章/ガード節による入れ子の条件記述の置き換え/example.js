/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
// サンプルコードとして従業員への支払額を計算するコードを扱う
// 離職者(isSeparated)、退職者(isRetired)、それ以外の従業員に対してそれぞれの支払額を計算する
function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: "SEP" };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: "RET" };
    }
    else {
      // 全額計算するロジック
      lorem.ipsum(dolor.sitAmet);
      consectertur(adipiscing).elit();
      sed.do.eiusmod = tempor.incididunt.ut.labore.et.dolore.magna.aliqua;
      ut.enim.ad.minim.veniam;
      result = someFinalComputation();
    }
  }

  return result;
}
/*
 |--------------------------------------------------------------------------
 | リファクタリング後
 |--------------------------------------------------------------------------
 */
// 例外的な動作をガード節を使って早期リターンするように変更
function payAmount(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };

  // 全額計算するロジック
  lorem.ipsum(dolor.sitAmet);
  consectertur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut.labore.et.dolore.magna.aliqua;
  ut.enim.ad.minim.veniam;

  return  someFinalComputation();
}
