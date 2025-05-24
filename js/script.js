//I made simple validation logic in html file but for case if browser doesnt work properly i did make onece more
/*function validateFrom() {
		
  //id validation
  var product_id = document.signup.product_id.value.trim();

  //only digit and 8 character
  if (!/^\d{8}$/.test(product_id)) {
	  document.signup.product_id.value = '';
      document.signup.product_id.focus();
      document.querySelector('#idErr').innerHTML = 'Digit only and 8 characters long (ex, 44455599).';
      return false;
  } else {
	  document.querySelector('#idErr').innerHTML = '';
  }
    
  //description validation
  var product_desc = document.signup.product_desc.value.trim();
  
  //Must contain at least 20 characters
  if (product_desc.length < 20) {
    // check length of textarea
    document.signup.product_desc.value = '';
    document.signup.product_desc.focus();
    document.querySelector('#descErr').innerHTML = 'Must contain at least 20 characters.';
    return false;
  } else {
	document.querySelector('#descErr').innerHTML = '';
  }
  
  //price validation
  var price = document.signup.price.value.trim();

  //Digit only, decimal not allowed. Less than 1000 and Greater than 0
  if (!/^\d+$/.test(price) || parseInt(price, 10) <= 0 || parseInt(price, 10) >= 1000) {
	  document.signup.price.value = '';
      document.signup.price.focus();
      document.querySelector('#priceErr').innerHTML = 'Digit only, decimal not allowed. Less than 1000 and Greater than 0.';
      return false;
  } else {
	document.querySelector('#priceErr').innerHTML = '';
  }
  
  //usrname validation
  var username = document.signup.username.value.trim();

  //must start with an alphabet, must have at least 4 characters
  if (!/^[a-zA-Z].{3,}$/.test(username)) {
	document.signup.username.value = '';
    document.signup.username.focus();
    document.getElementById('usrErr').innerHTML = 'must start with an alphabet, must have at least 4 characters.';
    return false;
   } else {
	document.getElementById('usrErr').innerHTML = '';
   }
   
// checkboox validation 
var checkboxes = document.getElementsByName('supplierStatus');
var checked = false;

for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        checked = true;
        break;
    }
}

// must select at least one of the check boxes
if (!checked) {
    document.getElementById('stErr').innerHTML = 'User Must select at least one of the check boxes.';
    return false;
} else {
    document.getElementById('stErr').innerHTML = '';
}
	
	//check email
    var email = document.signup.supplierEmail.value.trim();
	
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
    if(!emailRegex.test(email)){
		document.signup.supplierEmail.value = '';
		document.signup.supplierEmail.focus();
		document.querySelector('#emailErr').innerHTML = 'Input Valid Email.';
		return false;
	} else {
		document.querySelector('#emailErr').innerHTML = '';
    }
	
    alert('Your Input info has been Accepted.');
  
  return true;
}*/


//upgraded version
function validateFrom() {
  var product_id = document.signup.product_id.value.trim();
  var product_desc = document.signup.product_desc.value.trim();
  var price = document.signup.price.value.trim();
  var username = document.signup.username.value.trim();
  var checkboxes = document.getElementsByName('supplierStatus');
  var email = document.signup.supplierEmail.value.trim();

  var errorPanel = document.getElementById('errorSidePanel');
  errorPanel.innerHTML = '';


  function addErrorMessage(message) {
    var errorMessage = document.createElement('div');
    errorMessage.className = 'error';
    errorMessage.innerHTML = message;
    errorPanel.appendChild(errorMessage);
  }

  // Product ID validation
  if (!/^\d{8}$/.test(product_id)) {
    document.signup.product_id.value = '';
    document.signup.product_id.focus();
    addErrorMessage('Digit only and 8 characters long.');
  }

  // Product Description validation
  if (product_desc.length < 20) {
    document.signup.product_desc.value = '';
    document.signup.product_desc.focus();
    addErrorMessage('Must contain at least 20 characters.');
  }

  // Price validation
  if (!/^\d+$/.test(price) || parseInt(price, 10) <= 0 || parseInt(price, 10) >= 1000) {
    document.signup.price.value = '';
    document.signup.price.focus();
    addErrorMessage('Digit only, decimal not allowed. Less than 1000 and Greater than 0.');
  }

  // Username validation
  if (!/^[a-zA-Z].{3,}$/.test(username)) {
    document.signup.username.value = '';
    document.signup.username.focus();
    addErrorMessage('Must start with an alphabet, must have at least 4 characters.');
  }

  // Checkbox validation
  var checked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    addErrorMessage('User must select at least one of the check boxes.');
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.signup.supplierEmail.value = '';
    document.signup.supplierEmail.focus();
    addErrorMessage('Input valid email.');
  }

 
  if (errorPanel.childElementCount > 0) {
    
    return false;
  } else {
    alert('Your input info has been accepted.');
    return true;
  }
}

