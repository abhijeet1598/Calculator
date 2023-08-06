const input = document.getElementById("input");
const output = document.getElementById("output");

const btnClick = document.querySelectorAll(".keys");

console.log(btnClick);

btnClick.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.textContent === "AC") {
      input.value = "";
      output.value = "";
    } else if (event.target.textContent === "=") {
      try {
        if (output.value === "") {
          output.value = eval(input.value);
          input.value = "";
        } else {
          input.value = output.value;
          output.value = "";
        }
      } catch {
        output.value = new Error("Invalid Operation");
      }
    } else if (event.target.textContent === "DEL") {
      input.value = input.value.slice(0, -1);
    } else if (event.target.textContent === "()") {
      if (input.value.indexOf("(") == -1 && input.value.indexOf(")") == -1) {
        input.value += "(";
      } else if (
        input.value.indexOf("(") != -1 &&
        input.value.indexOf(")") == -1
      ) {
        input.value += ")";
      } else if (input.value.lastIndexOf("(") < input.value.lastIndexOf(")")) {
        input.value += "(";
      } else if (input.value.lastIndexOf(")") < input.value.lastIndexOf("(")) {
        input.value += ")";
      } else {
        input.value += event.target.textContent;
      }
    } else {
      output.value = "";
      input.value += event.target.textContent;
    }
  });
});

//Dark mode

const darkMode = document.getElementById("btn-check-2");

const darkModeLabel = document.getElementById("btn-check-2-label");

const keyPad = document.getElementById("keypad");

const displayInput = document.getElementById("input");
const displayOutput = document.getElementById("output");

const bodyElem = document.getElementById("body");

const calcElem = document.getElementById("calc");

const equalToButton = document.getElementById("equalTo");

const headingElem = document.getElementById("heading");

darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    darkModeLabel.textContent = "Light Mode";
    darkModeLabel.className = "btn btn-light";
    keyPad.style.background = "#343a40";
    btnClick.forEach((val) => {
      val.style.background = "#495057";
      val.style.color = "#fff";
      val.addEventListener("mouseover", (eover) => {
        eover.target.style.background = "#212529";
      });
      val.addEventListener("mouseout", (eout) => {
        eout.target.style.background = "#495057";
      });
    });
    displayInput.style.background = "#212529";
    displayOutput.style.background = "#212529";
    displayInput.style.color = "#fff";
    displayOutput.style.color = "#fff";
    bodyElem.className = "bg-dark bg-gradient";
    calcElem.className = "calc border border-dark";
    equalToButton.style.backgroundColor = "#339af0";
    headingElem.style.color = "#fff";
  } else {
    darkModeLabel.textContent = "Dark Mode";
    keyPad.style.background = "#f1f3f5";
    darkModeLabel.className = "btn btn-dark";
    btnClick.forEach((val) => {
      val.style.background = "#dee2e6";
      val.style.color = "#000";
      val.addEventListener("mouseover", (eover) => {
        eover.target.style.background = "#ced4da";
      });
      val.addEventListener("mouseout", (eout) => {
        eout.target.style.background = "#dee2e6";
      });
    });
    displayInput.style.background = "#fff";
    displayOutput.style.background = "#fff";
    displayInput.style.color = "#555";
    displayOutput.style.color = "#555";
    bodyElem.className = "bg-info-subtle bg-gradient";
    calcElem.className = "calc border border-secondary-subtle";
    equalToButton.style.backgroundColor = "#339af0";
    headingElem.style.color = "#495057";
  }
});
