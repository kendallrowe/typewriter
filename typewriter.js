 
const sentence = "hello there from lighthouse labs";
const typeWriter = function(string) {
 let i = 0; // setting interval outside of recursive function such that it will update each time function calls itself;
 setTimeout(function print() {
  process.stdout.write(string[i]);
  if (i < string.length - 1) { // sets condition to be smaller than string length - 1 becuase i++ increments first before calling function again recursively
   setTimeout(print, 50);
  } else {
   process.stdout.write("\n"); 
  }
  i++;
 }, 50);
}
typeWriter(sentence);