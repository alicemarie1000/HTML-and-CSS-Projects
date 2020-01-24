function handleClick() {
    // Get all the inputs.
    var inputs = form1.elements;
    var radios = [];

    //Loop and find only the Radios
    for (var i = 0; i < inputs.length; ++i) {
        if (inputs[i].type == 'radio') {
            radios.push(inputs[i]);
        }
    }

    //var found = 1;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert(radios[i].value);
            //found = 0;
            //break;
        }
    }
    //if (found == 1) {
    //alert("Please Select Radio");
    //}
    //event.preventDefault(); // disable normal form submit behavior
    return false; // prevent further bubbling of event
}


