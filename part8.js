// FIND INDEX
const findIndex = (array,callback) => {
    let number
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])){
            number = array[i]
            break
        }
    }
    return array.indexOf(number)
}
console.log(findIndex([8,11,4,27],val => {
    return val >= 20
  }))