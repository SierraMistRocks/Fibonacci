console.log(0);
console.log(1);

count = 2;

function fibonacci(num1, num2){
    while (count <= 19){
        newNum = num1 + num2;
        console.log(newNum);
        num2 = num1;
        num1 = newNum;
        count += 1;
        fibonacci(num1, num2);
    }
}

fibonacci(1,0);