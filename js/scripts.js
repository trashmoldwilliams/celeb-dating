$(function() {

  $('form#questions').submit(function(event) {
    var gender = $("select#q1").val();
    var taste = $("select#q2").val();
    var age = $("input#age").val();
    var fame = $('input[name="fame"]:checked', '#questions').val();;
    var hair = $("select#q5").val();
    //simular style can be done here as well.
    $('.betty, .leo, .sandler, .scarlett ').hide();
    $('.kesha').hide();
    $('.cranston').hide();
    $('.lucy').hide();
    $('.gwenyth').hide();
    $('.portman').hide();
    $('.jayma').hide();
    $('.sparks').hide();
    $('.katy').hide();
    $('.kristen').hide();
    $('.lohan').hide();
    $('.kim').hide();
    $('.paris').hide();
    $('.joseph').hide();
    $('.daniel').hide();
    $('.conan').hide();
    $('.stallone').hide();
    $('.park').hide();
    $('.spade').hide();
    $('.tyler').hide();
    $('.carrot').hide();
    $('.robert').hide();
    $('.nope').hide();
    if (age > 50) {
      if (gender === 'male') {
        $('.betty').show();
      } else {
        $('.cranston').show();
      }
    } else if (gender === 'male') {
      if (taste === 'good') {
        if (hair === 'red' && fame === 'lots') {
          $('.gwenyth').show();
        } else if (hair === 'black' && fame === 'mod') {
          $('.lucy').show();
        } else if (hair === 'blonde' && fame !== 'not') {
          $('.scarlett').show();
        } else if (hair === 'brown' && fame !== 'not') {
          $('.portman').show();
        } else if (hair === 'red' && fame !== 'lots') {
          $('.jayma').show();
        } else if (fame === 'not') {
          $('.sparks').show();
        } else {
          $('.nope').show();
        }
      } else if (taste === "none") {
        if (hair === 'blonde' && fame === 'lots') {
          $('.kesha').show();
        } else if (hair === "brown" && fame === 'lots') {
          $('.katy').show();
        } else if (hair === "brown" && fame !== 'lots') {
          $('.kristen').show();
        } else if (hair === 'red' && fame === 'mod') {
          $('.lohan').show();
        } else if (hair === 'black' && fame === "lots") {
          $('.kim').show();
        } else if (hair === 'blonde' || fame === 'mod') {
          $('.paris').show();
        }else {
          $('.nope').show();
        }
      }
    } else if (gender === 'female') {
      if (taste === 'good') {
        if (hair === 'blonde' && fame === 'lots') {
          $('.leo').show();
        } else if (hair === 'black' && fame === 'mod') {
          $('.joseph').show();
        } else if (hair === 'brown' && fame !== 'not') {
          $('.daniel').show();
        } else if (hair === 'red' && fame !== 'not') {
          $('.conan').show();
        } else if (hair === 'black' && fame === 'lots') {
          $('.stallone').show();
        } else if (fame === 'not') {
          $('.park').show();
        } else {
          $('.nope').show();
        }
      } else if (taste === 'none') {
        if (hair === 'black' && fame === 'lots') {
          $('.sandler').show()
        } else if (hair === 'blonde' && fame === 'not') {
          $('.spade').show();
        } else if (hair === 'black' && fame !== 'lots') {
          $('.tyler').show();
        } else if (hair === 'red' && fame !== 'lots') {
          $('.carrot').show();
        } else if (hair === 'brown' && fame !== 'not') {
          $('.carrot').show();
        } else {
          $('.nope').show();
        }
      }
    }
    event.preventDefault();
  });
});
