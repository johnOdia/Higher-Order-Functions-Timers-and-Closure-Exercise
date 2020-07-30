//RANDOM GAME
const randomGame = () => {
    let counter = 0
    let interval = setInterval(() => {
        let randomNumber = Math.random()
        counter++
        if (randomNumber > 0.75){
            clearInterval(interval)
            console.log(counter)
        }
    },1000)
}
console.log(randomGame())