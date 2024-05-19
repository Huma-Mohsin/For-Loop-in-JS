// Nested loop example: Multiplication table
for (let i = 1; i <= 10; i++) {  // Outer loop for rows
    let row = "";  // Initialize an empty string for the current row
    for (let j = 1; j <= 10; j++) {  // Inner loop for columns
        row += (i * j) + "\t";  // Concatenate the product of i and j with a tab separator
    }
    console.log(row);  // Print the completed row
}
