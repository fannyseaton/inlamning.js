//Global variables
var vinst = 0;
var inkomst = 0;
var utgift = 0;

function newElement(description, cost, sign) {
  var li = document.createElement("li");
  var t = document.createTextNode(description + " : " + cost);
  li.appendChild(t);
  if (description === '' || cost === '') {
    alert("You must write something!");
  } else {
    if (sign === "+") {
      li.classList.add("list-group-item", "list-group-item-success");
      document.getElementById("incomelist").appendChild(li);
    }else {
      li.classList.add("list-group-item", "list-group-item-danger");
      document.getElementById("outcomelist").appendChild(li);
    }
  }
}

//The function that runs once the buttone is pressed
function getValues(){
    //Local variables declarations
    let plusminus = document.getElementById("plusminus");
    let sign = plusminus.options[plusminus.selectedIndex].text;

    let description = document.getElementById("description").value; 
    let cost = Number(document.getElementById("value").value);

    /*
      We check whether the sign is plus or minus
      In case its a plus, we update the global variable for
      the profit and we call the newElement function to create
      a list item for the specific income.

      The same logic applies in case that the sign is minus
      but instead of the income we update the expense global
      variable and we create a list item for the specific expense
    */
    if(sign === "-"){
      vinst -= cost;
      utgift -= cost;
      document.getElementById("outcome").innerHTML = utgift;
      document.getElementById("vinst").innerHTML = vinst;
      newElement(description, cost, sign);

    }else if( sign === "+"){
      vinst += cost;
      inkomst += cost;
      document.getElementById("income").innerHTML = inkomst;
      document.getElementById("vinst").innerHTML = vinst;
      newElement(description, cost, sign);
    }else{
      alert("Please select the minus sign for expenses or the plus for income.")
    }
    
}

