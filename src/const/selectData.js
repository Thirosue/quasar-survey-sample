const term = () => {
  const termList = []
  termList.push({ label: '今日から', value: '0' })
  for (let i = 1; i <= 30; i += 1) {
    termList.push({ label: `${i} 日前`, value: `${i}` })
  }
  termList.push({ label: '1か月以上前', value: '31' })
  return termList
}

export default {
  term
}
