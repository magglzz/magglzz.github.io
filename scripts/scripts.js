//accordian program
function showAnswerRole() {
  $('#answer-role').slideToggle();
}

function showAnswerGoal() {
  $('#answer-goals').slideToggle();
}

$('.answer').hide();

$('#myrole').click(showAnswerRole);
$('#goals').click(showAnswerGoal);

//top nav 
function showMenu() {
  console.log('showmenu');
  $('.navigation').slideToggle();
}

// $('.navigation').hide();

$('#menu-btn').click(showMenu);
