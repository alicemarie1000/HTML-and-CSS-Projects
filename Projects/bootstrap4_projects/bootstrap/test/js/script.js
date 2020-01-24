function handleClick()  {
   var inputs = form1.elements;
   var radios = [];

   for (var i = 0; i < inputs.length; ++i) {
       if (inputs[i].type == 'radio') {
          radios.push(inputs[i]);
      }
   }

   for (var i = 0; i < radios.length; i++)  {
       if (radios[i].checked) {
          alert(radios[i].value);
       }
   }
   return false; 
}





//$ function myFunction(){    
    var pizza = document.form[0];
    var txt = "";
    var i;
    for (i=0; i < coffee.length; i++){
       if (coffee[i].checked))[
          txt = txt + pizza[i].value + " "; 
       }
}//



