/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
function printOwing(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // 未払金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記述 (record due date)
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // 明細の印字 (print details)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

/*
 |--------------------------------------------------------------------------
 | リファクタリング前
 |--------------------------------------------------------------------------
 */
const printOwing = (invoice) => {
  printBanner();
  // 未払金の計算 (calculate outstanding)
  const outstanding = calculateOutstanding(invoice);

  // 締め日の記述 (record due date)
  recordDueDate(invoice);

  // 明細の印字 (print details)
  printDetails(invoice, outstanding);
}

const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const recordDueDate = (invoice) => {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

const calculateOutstanding = (invoice) => {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  return outstanding;
}
