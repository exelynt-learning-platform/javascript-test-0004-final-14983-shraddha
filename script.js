let n = 4;
let result = "";

for (let i = -n + 1; i < n; i++) {
  let row = "";

  for (let j = -n + 1; j < n; j++) {
    row += Math.max(Math.abs(i), Math.abs(j)) + 1 + " ";
  }

  result += row + "\n";
}

document.getElementById("output").textContent = result;
