function isDividedForAll(numberToBeDivided, number){
    let isDivided = true
    for(let i = 1; i <= number; i++){
        if(numberToBeDivided % i != 0){
            return false
        }
    }
    return true
}


function findSmallestMultipleFromOneTo(number){
    let numberToBeDivided = number;
    let isDivided = false
    while(!isDivided){
        numberToBeDivided++;
        isDivided = isDividedForAll(numberToBeDivided, number)
    }
    return numberToBeDivided;
}

console.log(findSmallestMultipleFromOneTo(20))