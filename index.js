function writeCards(namesArray) {
    const thankYou = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYou.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
    return thankYou
}

function countDown() {
    for (let countDown = 10; countDown > -1; countDown--) {
        console.log(countDown);
    }
}