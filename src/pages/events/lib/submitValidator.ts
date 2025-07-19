export function submitValidator(count: number) {
  if (typeof count === 'number' && !isNaN(count)) {
    return true
  }
  throw Error(`
        Count should be a number.
        Got: ${count}'
    `)
  // failing loudly is good
}
