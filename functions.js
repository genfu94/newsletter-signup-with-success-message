function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.getElementsByName("signup_form")[0].submit();
    return true;
  } else {
    const errorMsg = document.getElementsByClassName("invalid-email-msg")[0]; 
    errorMsg.hidden=false;
    document.signup_form.email.classList.add('invalid-email-input');
    return false;
  }
}
