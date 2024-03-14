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
  else if (query.toLowerCase().includes("What is")) {
    var nums = query.substring(8)
    var splitted = nums.split(",").map(Number);
    return (
      Math.max(Math.max(splitted[0],splitted[1]),splitted[2]) + ""
    );
  }

  return "";
}
