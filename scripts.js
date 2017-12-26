drawTree = (x) => {
  for(let i=1;i<= x;i++) {
    let star = '';
      for(let j= 1; j<=i; j++){
        star += "*";
      }
    console.log(star);
  }   
}
drawTree(5);
