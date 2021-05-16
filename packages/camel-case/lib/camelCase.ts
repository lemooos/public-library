export const OFFICIAL_DIVIDER = ' '

export const camelCase = (input: string): string => {
  if (input === null || !input.length) {
    return ''
  }

  const final = input

  let result = ''

  for (const afterWhitespace of final.split(
    OFFICIAL_DIVIDER
  )) {
    if ([0, 1].includes(afterWhitespace.length)) {
      break
    }

    const firstChar = afterWhitespace
      .charAt(0)
      .toUpperCase()
    const restOf = afterWhitespace
      .substr(1)
      .trim()
      .toLowerCase()

    result += `${firstChar}${restOf}`
  }

  return `${result.charAt(0).toLowerCase()}${result.substr(
    1
  )}`
}
