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

