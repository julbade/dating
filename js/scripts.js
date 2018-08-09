$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var QuestionOne = $("input:radio[name=choice]:checked").val();
    if (QuestionOne === "yellow") {
      alert("you are snow white");
    }
    else if (QuestionOne === "blue") {
      alert("you are blue");
    }
    else if (QuestionOne === "red") {
      alert("you are red");
    }
  });
});

  //   if (QuestionOne = 1) {
  //     var QuestionOne = $("input:radio[name=flavor]:checked").val();
  //     alert("You are snow white");
  // } else (QuestionOne = 2) {
  //   var QuestionOne = $("input:radio[name=flavor]:checked").val();
  //   alert("You are blue");
  // }
  // });
