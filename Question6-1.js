
function palindrome(line) { 
   let status=true;
   let words=line.split(" ");
   for(i=0;i<words.length;i++)
   {
    let splitedWord=words[i].split('');
    let reversedArr=splitedWord.reverse();
    let palindromeWord=reversedArr.join("");

    if(words[i]!=palindromeWord)
    {
        status=false; 
    }  
    words[i]=palindromeWord
   }
  status?console.log("words is palindrome"): console.log("word is not palindrome")
   return words.toString().replace(","," ");
}
 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('enter your words: ', input => {
     console.log(palindrome(input))
    readline.close();
  });