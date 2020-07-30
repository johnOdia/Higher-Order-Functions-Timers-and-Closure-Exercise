//COUNTDOWN
const countdown = number => {
     let interval = setInterval( () => {
        console.log(number)
        number--
        if (number === 0){
            console.log('DONE!')
            clearInterval(interval)
        }
    }, 1000)
    return interval
}
countdown(4)

