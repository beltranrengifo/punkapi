const capitalize = (value) => {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const truncate = (text, limit, clamp = '...') => {
  const node = document.createElement('div')
  node.innerHTML = text
  const content = node.textContent
  return content.length > limit ? content.slice(0, limit) + clamp : content
}

export {
  capitalize,
  truncate,
}
