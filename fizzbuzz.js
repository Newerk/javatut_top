let num = prompt("Insert a number", input());

let fizzbuzz = (num) => {
    for (let i = 0; i < num; i++) {
        if (i % 3 && i % 5) {
            console.log('FizzBuzz');
        }else if (i % 3) {
            console.log('Fizz');
        } else if (1 % 5) {
            console.log('Buzz')
        }else{
            console.log(i);  
        }
        
    }
}

fizzbuzz();