var symbol = window.prompt("Enter a symbol");
var rows = window.prompt("Enter # of rows.");
var columns = window.prompt("Enter # of columns.");

for (i = 0; i < rows; i++) {
  for (j = 0; j < columns; j++) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}

// += means to append and return
// We are first declaring the variables we will use.
// We provide an index to give this loop a range for how many times it will iterate or loop.
// We give the innerHTML property of the inner for-loop (columns)
// whatever character was entered at the "symbol" prompt.
// The code will iterate/repeat the loop until the number of columns are fulfilled in the
// inner for-loop.
// The code will run the inner for-loop as an iteration of the outer for-loop.

// Run outer for-loop.
// Outer for-loop consists of an inner for-loop and a "<br>" break.

// For myRectangle, we are assigning the innerHTML with the symbol
// We are then appending a break after each iteration.
