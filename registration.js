 $(document).ready(function(){
  // Question 1: Each time the name field is modified, transform its content into uppercase.

    // detect the name filed is changed:
    $("#nom").focusout(function(){  // $("#nom").on("input".function(){  or $("#nom").on("change".function(){
    // extract the name (the value of the name filed):
      var newValue = $(this).val().toUpperCase(); //  .val() to get the value of the selected field
      $(this).val(newValue);  // .val(newValue) to change the value of the selected field
    });

    // Question 2:  Add a test to check, when the user leaves the password confirmation field, that both fields have the same value. If they don't, please add an alert saying that the two passwords do not match, and color the password confirmation field in red.

    // detect the "confirmation" filed is filled:
    $("#mdp2").focusout(function(){ 
      // store the values of 2 fileds of mdp
      var a = $("#mdp1").val();
      var b = $("#mdp2").val();
      // see if two values are the same 
    if(a == b){
       // if yes, do nothing
       $("#mdp1").css({"color": "black"});
} else {
  // if not, an altert is supposed to appear first 
  alert("The two passwords do not match !");
  // and then, the color is changed
  $(this).css({"color": "red"}); // 如果css里面只有一个量，则需要加{}. 此外，selector 是"#mdp2"，不是b
}
  });
  // Question 3: Add a test to check, when the user modifies the email field, if the email ends with @mvrht.net (addresses used by 10minutemail.com) or with @20mail.eu (addresses used by 20minutemail.com): please add an alert saying that the email is refused, and color the email field in red.
  // detect the end of the email 
  $("#adresse_email").on("change".function(){
var c = .substring()
if( == ){

} else {
  
  alert("Your email is refused.")
  $("#adresse_email").css({"color": "red"});
  }

  
  });