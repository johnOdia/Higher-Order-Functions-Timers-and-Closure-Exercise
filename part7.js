//FIND
const find = (array,callback) => {
    let number
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])){
            number = array[i]
            break
        }
    }
    return number
}
console.log(find([8,11,4,27],val => {
    return val >= 10
  }))