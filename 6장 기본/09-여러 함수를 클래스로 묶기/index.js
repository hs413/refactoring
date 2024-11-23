reading = { customer: 'ivan', quantity: 10, month: 5, year: 2024 }

function client1 () {
  const aReading = acquireReading();
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function client2 () {
  const aReading = acquireReading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
}

function client3 () {
  const aReading = acquireReading();
  const basecChargeAmoun  = calculateBaseCharge();

  function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity
  }
}





