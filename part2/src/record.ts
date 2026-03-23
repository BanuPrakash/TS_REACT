
type IncomeType = 'salary' | 'bonus' | 'hra'

type Income = Record<IncomeType, number>

const income: Income = {
    salary: 1114,
    bonus: 114,
    hra : 145
}

for(const key in income) {
    console.log(income[key as keyof Income]);
}