 prev2 = 0;
 prev1 = 1;

    console.log(prev2);
    console.log(prev1);

    for( i = 0; i < 18; i++) {
        newFibo = prev1 + prev2;
        console.log(newFibo);
        prev2 = prev1;
        prev1 = newFibo;
    }