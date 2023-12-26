function counter(count) {

    let x = setTimeout(() => {
  
      console.log(++count);
  
      counter(count);
  
    }, 1000);
  
  }