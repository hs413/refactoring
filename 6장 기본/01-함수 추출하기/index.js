function printOwing(invoice) {
  printBanner()
  const outstanding = calculateOutstanding()
  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount
  }
  return result
}

function printBanner() {
  console.log('***************')
  console.log('****** 고객 채무 *****')
  console.log('***************')
}

function printDetails(invoice) {
  console.log(`고객명: ${invoice.customer}`)
  console.log(`고객명: ${outstanding}`)
  console.log(`고객명: ${invoice.dueDate.toLocaleDateString()}`)
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

