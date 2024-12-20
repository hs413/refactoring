import { statement, htmlStatement } from './statement.js';

const invoice = [
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
]

const plays = {
  "hamlet": { "name":"Hamlet", "type": "tragedy" },
  "as-like": { "name":"As You Like It", "type": "comedy" },
  "othello": { "name":"Othello", "type": "tragedy" }
}

console.log(statement(invoice[0], plays));
// console.log(htmlStatement(invoice[0], plays));
