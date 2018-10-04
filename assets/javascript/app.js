// Create a function that creates the start button and initial screen
// $(document).ready(function () {


// Create trivia questions. 
var questions = [{
    ques: "What is the name of games main protaganist?",
    ans: ["Squall Leonheart", "Zidane Triball", "Cid Highwind", "Cloud Strife"],
    name: "protaganist",
    correct: "Cloud Strife",
    divClass: ".protaganist"
},
{
    ques: "What town did Cloud and Tifa grow up in?",
    ans: ["Midgar", "Nibelheim", "Costa del Sol", "Junon"],
    name: "home-town",
    correct: "Nibelheim",
    divClass: ".home-town"
},
{

    ques: "Aerith came from an ancient people know as the ...",
    ans: ["Sylph", "Moogle", "Cetra", "Human"],
    name: "aerith",
    correct: "Cetra",
    divClass: ".aerith"
},

{
    ques: "At the end of the FF7 remake, we find out that this shinra executive was controlling the moogle robot, Cait Sith",
    ans: ["Palmer", "Hojo", "Heidigger", "Reeve"],
    name: "cait-sith",
    correct: "Reeve",
    divClass: ".cait-sith"
},
{
    ques: "What powersource does the company Shinra prduce",
    ans: ["materia", "black materia", "mako", "Jenova"],
    name: "mako",
    correct: "mako",
    divClass: ".mako"
},

] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame =
    $("#start-btn").on('click', function () {
        $(this).parent().hide();
        $('.container').show();
        countdown(60);
        showQuestion();
    });

// function for displaying questions
var showQuestion = function () {
    $(".questions :not('#submit-btn')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 5; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(2000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#submit-btn').on('click', function () {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#submit-btn').on('click', function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 5; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
