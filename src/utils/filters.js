const capitalize = (value) => {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const truncate = (text, limit, clamp = '...') => {
  if (text.length < limit) return text
  return text.substring(0, limit) + clamp
}

export {
  capitalize,
  truncate,
}
