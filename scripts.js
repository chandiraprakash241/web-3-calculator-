const input = document.getElementById("input");
const buttons = document.querySelectorAll(".btn");

// ✅ Function to check if the character is an operator
function isOperator(char) {  
    return ["+", "-", "×", "÷"].includes(char);
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.innerText;
        let lastChar = input.value.slice(-1);

        if (isOperator(value) && isOperator(lastChar)) return;
        if (value === "." && lastChar === ".") return;

        input.value += value;
    });
});

// AC
const ac = document.getElementById("ac");
ac.addEventListener("click", function() {
    input.value = "";
});

// Equals
const equals = document.getElementById("equals");
equals.addEventListener("click", function() {
    try {
        input.value = eval(input.value.replace(/×/g, "*").replace(/÷/g, "/"));
    } catch {
        input.value = "Error";
    }
});

// Delete
const del = document.getElementById("delete");
del.addEventListener("click", function() {
    input.value = input.value.slice(0, -1);
});

// Percent
const percent = document.getElementById("percent");
percent.addEventListener("click", function() {
    input.value = parseFloat(input.value) / 100;
});
