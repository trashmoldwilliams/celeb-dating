$(function() {

  $('form#questions').submit(function(event) {
    var gender = $("select#q1").val();
    var taste = $("select#q2").val();
    if (gender === "male" && taste === "good") {
      $(".scarlett").show();
    }
    if (gender === "male" && taste === "none") {
      $(".kesha").show();
    }
    if (gender === "female" && taste === "good") {
      $(".leo").show();
    }
    if (gender === "female" && taste === "none") {
      $(".sandler").show();
    }
    event.preventDefault();
  });
});
