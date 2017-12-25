function validateForm(event) {

    
    var formValid = true;
    var nameValue = document.forms["mainForm"]["name"].value;
    var heightValue = document.forms["mainForm"]["height"].value;
    var weightValue = document.forms["mainForm"]["weight"].value;
    if (nameValue.length > 20 || nameValue.length == "" ) {
        document.getElementById("invalidName").setAttribute("style","display: inline;");
        formValid = false;
    } else{
      document.getElementById("invalidName").setAttribute("style","display: none;");
    }
    if (heightValue == "" || isNaN(heightValue)) {
        document.getElementById("invalidHeight").setAttribute("style","display: inline;");
        formValid = false;

    }else{
      document.getElementById("invalidHeight").setAttribute("style","display: none;");
    }
    if (weightValue == "" || isNaN(weightValue)) {
        document.getElementById("invalidWeight").setAttribute("style","display: inline;");
        formValid = false;

    }else{
      document.getElementById("invalidWeight").setAttribute("style","display: none;");
    }
    if (formValid){
      document.getElementById('BMIpage').src = "calc.html";
    }
    return formValid;
}

function resetForm() {
  document.forms["mainForm"]["name"].value = "";
  document.forms["mainForm"]["height"].value = "";
  document.forms["mainForm"]["weight"].value = "";


}
