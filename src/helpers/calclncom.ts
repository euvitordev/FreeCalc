import { formDataType } from "@/types/types"

export const formatCurrency = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
})

export function calcIncome({
  monthlyExpenses,
  monthlyNetSalary,
  vacationWeeksPerYear,
  workDaysPerWeek,
  workHoursPerDay,
}: formDataType) {
  const weeksPerYear = 52 - Number(vacationWeeksPerYear)
  const workDaysPerYear = weeksPerYear * Number(workDaysPerWeek)

  // Supondo uma redução de 10% para feriados e afins
  const productiveHoursPerYear = workDaysPerYear * Number(workHoursPerDay) * 0.9
  const aanualNetSalary = Number(monthlyNetSalary) * 12
  const annualExpenses = Number(monthlyExpenses) * 12

  // Imposto fixo aproximado
  const annualTaxes = 70 * 12

  const annualGrossIncome = aanualNetSalary + annualExpenses + annualTaxes
  const hourlyRate = annualGrossIncome / productiveHoursPerYear
  const monthlyGrossIncome = annualGrossIncome / 12

  return {
    hourlyRate,
    monthlyGrossIncome,
  }
}
