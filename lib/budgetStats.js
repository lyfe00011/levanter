function am(q) {
  let w = 0;
  let x = 0;
  const z = {};
  const A = {};
  const B = [];
  for (const K of q) {
    const M = 'income' === K.type ? '+' : '-';
    if ('income' === K.type) {
      w += K.amount;
    } else {
      x += K.amount;
    }
    const N = K.category || 'other';
    z[N] ||= {
      income: 0,
      expense: 0,
    };
    z[N][K.type] += K.amount;
    const P = K.day + ' ' + K.month + ' ' + K.year;
    A[P] ||= {
      income: 0,
      expense: 0,
    };
    A[P][K.type] += K.amount;
    B.push([
      '' + K.id,
      K.day + ' ' + K.month + ' ' + K.year,
      K.category + ' ' + (K.remark ? '(' + K.remark + ')' : ''),
      '' + M + K.amount,
    ]);
  }
  const C = w - x;
  const D = Object.keys(A).length || 1;
  const E = Math.round(x / D);
  const F = Math.round(w / D);
  const G = w > 0 ? Math.round((C / w) * 100) : 0;
  const H = Object.entries(z)
    .filter(([, R]) => R.expense > 0)
    .sort((R, S) => S[1].expense - R[1].expense)
    .slice(0, 5)
    .map(([R, S]) => ({
      category: R,
      amount: S.expense,
      percentage: x > 0 ? Math.round((S.expense / x) * 100) : 0,
    }));
  const I = Object.entries(z)
    .filter(([, R]) => R.income > 0)
    .sort((R, S) => S[1].income - R[1].income)
    .slice(0, 5)
    .map(([R, S]) => ({
      category: R,
      amount: S.income,
      percentage: w > 0 ? Math.round((S.income / w) * 100) : 0,
    }));
  const J = {
    totalIncome: w,
    totalExpense: x,
    netEarn: C,
    savingsRate: G,
    dailyAvgExpense: E,
    dailyAvgIncome: F,
    dayCount: D,
    topExpenseCategories: H,
    topIncomeCategories: I,
    rows: B,
  };
  return J;
}
const an = {
  computeBudgetStats: am,
};
module.exports = an;
