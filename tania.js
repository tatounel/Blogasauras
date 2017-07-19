function greeting(){
  var userName=$('#username').val();
  var header = $("h2");
  header.text("Hi " + userName +"!");
  alert("Hi "+ userName + " please leave a comment!");
  $('#commentForm').show();
  var comment=$('#comment').val();

}

function setup(){
  $('#ok_button').click(greeting);
  $('#submit_button').click()
}
//document refers to whole page. when document is ready means when it completely loads.
$(document).ready(setup);
