'use strict';

const bill = calculateTotal(purchase);
console.log(bill);

validateExpenses(bill.expenses);

const rate = await getRate('CNY');
const uah = bill.total * rate;
console.log(uah);

// =   ==  !==  ===  >   <   >=  <=   ++  --  %   **
// &&  ||  !    +=   -=  *=  /=  **=  %=  (x ? y : z)
