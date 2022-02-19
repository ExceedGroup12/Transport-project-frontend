export function getObjForm(target) {
  const data = new FormData(target)
  const dataObj = {}
  //key = name , value = input
  data.forEach((value, key) => {
    dataObj[key] = value
  })
  return dataObj
}