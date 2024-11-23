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
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading)
  const basicChargeAmount  = aReading.baseCharge;
}

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity
  }
}



