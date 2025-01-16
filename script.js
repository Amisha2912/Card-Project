const fName=document.querySelector('#fName');
const lName=document.querySelector('#lName');
const ctry=document.querySelector('#ctry');
const ph=document.querySelector('#ph');
const state=document.querySelector('#state');
const city=document.querySelector('#city');
const vilage=document.querySelector('#vilage');
const bgColor=document.querySelector(".bg-color");

window.addEventListener("load",()=>{
    fName.value = localStorage.getItem("first_name") || "";
    lName.value = localStorage.getItem("last_name") || "";
    ctry.value = localStorage.getItem("country") || "";
    ph.value = localStorage.getItem("phone") || "";
    state.value = localStorage.getItem("state") || "";
    city.value = localStorage.getItem("city") || "";
    vilage.value = localStorage.getItem("village") || "";
})

document.body.style.backgroundColor = localStorage.getItem('bgColor') || "#FFFFFF";

bgColor.addEventListener("input", () => {
    const color = bgColor.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgColor', color); // Save the selected color to localStorage
  });

function saveAndDisplayInput(key, inputField, promptMessage) {
  let value = prompt(promptMessage);
  if (value) {
    localStorage.setItem(key, value); // Save to localStorage
    inputField.value = value;        // Update the corresponding input field
  }
}

// Use the function for each field
saveAndDisplayInput("first_name", fName, "Enter your first name:");
saveAndDisplayInput("last_name", lName, "Enter your last name:");
saveAndDisplayInput("country", ctry, "Enter your country:");
saveAndDisplayInput("phone", ph, "Enter your phone number:");
saveAndDisplayInput("state", state, "Enter your state:");
saveAndDisplayInput("city", city, "Enter your city:");
saveAndDisplayInput("village", vilage, "Enter your village:");


