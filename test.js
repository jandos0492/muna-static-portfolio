function groupByCommas(n) {
  let string = String(n);
  let arr = Array.from(string);
  if (string.length > 3) {
    let countString = "";
    for (let i = arr[arr.length - 1]; i >= 0; i--) {
      countString += arr[i];
      if (countString.length % 3 === 0) {
        
      }
    }
  }
}

groupByCommas(1000);
