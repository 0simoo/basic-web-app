export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is donghyus"
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "Simon Shin"
    );
  }
  else if (query.toLowerCase().includes("numbers is the largest:")) {
    var nums = query.substring(46)
    var numsNoQ = nums.slice(0, -1); 
    var splitted = numsNoQ.split(",").map(Number);
    return (
      Math.max(Math.max(splitted[0],splitted[1]),splitted[2]).toString()
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    var nums = query.substring(8)
    var numsNoQ = nums.slice(0, -1); 
    var splitted = numsNoQ.split(" plus ").map(Number);
    var sum = 0
    for(const n of splitted){
      sum += n
    }
    return (
      sum.toString()
    );
  }
  else if (query.toLowerCase().includes("minus")) {
    var nums = query.substring(8)
    var numsNoQ = nums.slice(0, -1); 
    var splitted = numsNoQ.split(" minus ").map(Number);
    return (
      (splitted[0]-splitted[1]).toString()
    );
  }
  else if (query.toLowerCase().includes("multiplied by")) {
    var nums = query.substring(8)
    var numsNoQ = nums.slice(0, -1); 
    var splitted = numsNoQ.split(" multiplied by ").map(Number);
    return (
      (splitted[0]*splitted[1]).toString()
    );
  }
  else if (query.toLowerCase().includes("square and cube")) {
    var nums = query.substring(60).slice(0,-1)
    var splitted = nums.split(",").map(Number);
    var res = ""
    for(const n of splitted){
      if(Number.isInteger(Math.sqrt(n)) && Number.isInteger(Math.cbrt(n))){
        res += n.toString() + ", "
      }
    }
    return (
      res.slice(0,-2)
    );
  }
  else if (query.toLowerCase().includes("power of")) {
    var nums = query.substring(8).slice(0,-1)
    var splitted = nums.split("to the power of").map(Number);
    return Math.pow(splitted[0],splitted[1]).toString()
  }


  return "";
}
