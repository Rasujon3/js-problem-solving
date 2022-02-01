for (let i = 1; i <= 50; i++) {
     if (i%3==0 && i%5==0) {
        console.log('foobar');
        continue;
    }
    else if (i%3==0) {
        console.log('foo');
        continue;
    }
    else if (i%5==0) {
        console.log('bar');
        continue;
    }
    console.log(i);
    
}