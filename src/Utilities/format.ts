export function formatCurrency (number: number) {
  return (
    new Intl.NumberFormat('au-AU', { style: 'currency', currency: 'AUD' }).format(number)
  )
}

export function formatNutrient (nutrient: number) {
  return (
    new Intl.NumberFormat('en-EN', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(nutrient)
  )
}
