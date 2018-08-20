// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let counter = 0, let length = musicians.length; counter < length; counter++) {
    array.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }
  return array
}
