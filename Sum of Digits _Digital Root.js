function digitalRoot(n) {
    // ...
    let sum = 0;
    while(n > 0){
      sum+=n%10;
      n=parseInt(n/10)
    }
    if (sum > 9){
      return digitalRoot(sum)
    } else {
      return sum
    }
  }