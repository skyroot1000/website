var form = $('.contact-form');

form.submit(function(event){
    event.preventDefault(); // Stop change webpage
    submitForm();
});

function submitForm() {
  var base = "http://localhost:3000";
  var end_point = "/contact/send";
  var url = base + end_point;

  if (!validateInputs()) {
    return;
  }

  $.ajax({
     url: url,
     data: msg,
     type: 'POST',
     dataType: 'json',
     encode: true
  })
  .done(function(objectReturned) {
    console.log(objectReturned);
  })
  .fail(function(objectReturned) {

  })
  .always(function(objectReturned) {

  });

}

function validateInputs() {
  var input_not_blank = $('.input_not_blank');
  var input_email = $('.input_email');
  var userEmail = input_email.val();
  var valid = true;

  $('.wrong').hide(0); // Hide previous messages

  // Check the email
  valid &= validEmail(userEmail);

  if (!valid) {
    $('#wrongEmail').show();
  }

  // Check fields that can not be empty
  input_not_blank.each(function() {
    var aValue = $(this).val();
    valid &= notEmpty(aValue);
    if (! notEmpty(aValue)) {
      if (this.id == "the_name") {
        $('#wrongName').show();
      }
      if (this.id == "message") {
        $('#wrongMessage').show();
      }
    }
  });

  return valid;
}

function notEmpty(text) {
    return text.length > 0;
}

function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
