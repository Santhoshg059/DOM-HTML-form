let form = document.createElement("form");
form.setAttribute("id","form")
document.body.append(form);
let div = document.createElement("div");
div.setAttribute("class", "form-group");
form.appendChild(div);

function label(forname, text) {
    let label = document.createElement("label");
    label.setAttribute("for", forname);
    label.setAttribute("class","lbl")
    label.innerText = text;
    return label;
}

function input(type, name, id,pholder) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("id", id);
    input.setAttribute("class","inputbx")
    input.setAttribute("placeholder",pholder)
    return input;
}
function textarea(type, name, id,pholder){
    let txt = document.createElement("textarea");
    txt.setAttribute("type", type);
    txt.setAttribute("name", name);
    txt.setAttribute("id", id);
    txt.setAttribute("class","inputbx")
    txt.setAttribute("placeholder",pholder)
    return txt;
}

let firstNamelabel = label("first-name", "First Name");
let input1 = input("text", "inputbox1", "first-name","Enter first name");
input1.setAttribute("required", true);
let lastNamelabel = label("last-name", "Last Name");
let input2 = input("text", "inputbox2", "last-name","Enter last name");
input2.setAttribute("required", true);
let addressLabel = label("address", "Address");
let textArea = textarea("text", "inputbox3", "address");
let pincodeLabel = label("pincode", "Pincode");
let input4 = input("text", "inputbox4", "pincode","pincode");
input4.setAttribute("required", true);

let genderLabel = label("gender", "Gender");
let maleInput = input("radio", "gender", "male");
maleInput.setAttribute("value", "Male");
let maleLabel = label("male", "Male");
maleLabel.setAttribute("for", "male");


let femaleInput = input("radio", "gender", "female");
femaleInput.setAttribute("value", "Female");

let femaleLabel = label("female", "Female");
femaleLabel.setAttribute("for", "female");
//form.appendChild(document.createElement("br"));
//form.appendChild(document.createElement("br"));
// form.appendChild(document.createElement("br"));
// form.appendChild(document.createElement("br"));
// form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
div.appendChild(firstNamelabel);
div.appendChild(document.createElement("br"));
div.appendChild(input1);
div.appendChild(document.createElement("br")); 
div.appendChild(document.createElement("br"));
div.appendChild(lastNamelabel);
div.appendChild(document.createElement("br"));
div.appendChild(input2);
div.appendChild(document.createElement("br")); 
div.appendChild(document.createElement("br")); 
div.appendChild(addressLabel);
div.appendChild(document.createElement("br"));
div.appendChild(textArea);
div.appendChild(document.createElement("br")); 
div.appendChild(document.createElement("br"));
div.appendChild(pincodeLabel);

div.appendChild(document.createElement("br"));
div.appendChild(input4);
div.appendChild(document.createElement("br")); 
div.appendChild(genderLabel);
div.appendChild(document.createElement("br"));
div.appendChild(maleInput);
div.appendChild(maleLabel);
div.appendChild(femaleInput);
div.appendChild(femaleLabel);
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));
let country = label("country", "Country");
let cntinput = input("text", "inputbox5", "country","country");
let state = label("state", "State");
let stinput = input("text", "inputbox6", "state","state");

// Create the label for food choices
let foodLabel = document.createElement("label");
foodLabel.setAttribute("for", "food");
foodLabel.setAttribute("class", "food");
foodLabel.innerText = "Choice of Food (Select at least 2 out of 5):";
div.appendChild(foodLabel);
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));

// Define food options
let foodOptions = ["Pizza", "Burger", "Salad", "Pasta", "Sushi"];

// Create checkboxes for each food option
foodOptions.forEach((food) => {
    let foodCheckbox = document.createElement("input");
    foodCheckbox.setAttribute("type", "checkbox");
    foodCheckbox.setAttribute("name", "food");
    foodCheckbox.setAttribute("value", food);
    foodCheckbox.setAttribute("class", "foods");

    let foodLabel = document.createElement("label");
    foodCheckbox.setAttribute("class","fod")
    foodLabel.appendChild(foodCheckbox);
    foodLabel.appendChild(document.createTextNode(food));

    div.appendChild(foodLabel);
    div.appendChild(document.createElement("br"))
    div.appendChild(document.createElement("br"));;
});


div.appendChild(document.createElement("br"));
div.appendChild(country);
div.appendChild(document.createElement("br"));
div.appendChild(cntinput)
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));
div.appendChild(state);
div.appendChild(document.createElement("br"));
div.appendChild(stinput);
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));

let submit=document.createElement("input")
submit.setAttribute("type","submit")
submit.setAttribute("value","Submit")
submit.classList.add("btn", "btn-primary");
submit.setAttribute("id","submit")
div.appendChild(submit);
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));
div.appendChild(document.createElement("br"));



document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let selectedFood = document.querySelectorAll('input[type="checkbox"][name="food"]:checked');
    if (selectedFood.length < 2) {
        alert("Please select at least 2 food options!");
        return;
    }
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    let foods = [];
    foodCheckboxes.forEach(function(checkbox) {
        foods.push(checkbox.value);
    });
    let st = document.getElementById('state').value;
    let cnt = document.getElementById('country').value;


    let table = document.getElementById('tableBody');
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = foods.join(', '); // Display selected foods as a comma-separated string
    cell7.innerHTML = st;
    cell8.innerHTML = cnt;

    // Reset form fields after adding to table
    document.getElementById('form').reset();
})