//Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
    if(num <= 1){
        return "is not prime number";
    }
    if(num <= 3){
        return "is prime number";
    }

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return "is not prime number";
        };
        
    }
    return "is prime number";
}

console.log(isPrime(7));



