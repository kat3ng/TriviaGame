// Create a function that creates the start button and initial screen
// $(document).ready(function () {


// Create trivia questions. 
var questions = [{
    qname: "protaganist",
    question: "What is the name of games main protaganist?",
    answer: ["Squall Leonheart", "Zidane Triball", "Cid Highwind", "Cloud Strife"],
    correct: "3",
    image: ""
},
{
    qname: "home-town",
    question: "What town did Cloud and Tifa grow up in?",
    answer: ["Midgar", "Nibelheim", "Costa del Sol", "Junon"],
    correct: "1",
    image: ""
},
{
    qname: "aerith",
    question: "Aerith came from an ancient people know as the ...",
    answer: ["Sylph", "Moogle", "Cetra", "Human"],
    correct: "2",
    image: ""
},

{
    qname: "cait-sith",
    question: "At the end of the FF7 remake, we find out that this shinra executive was controlling the moogle robot, Cait Sith",
    answer: ["Palmer", "Hojo", "Heidigger", "Reeve"],
    correct: "3",
    image: ""
},
{
    qname: "mako",
    question: "What powersource does the company Shinra prduce",
    answer: ["materia", "black materia", "mako", "jenova"],
    correct: "2",
    image: ""
},

] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame =
    $("#start-btn").on('click', function () {
        $(this).parent().hide();
        $('.container').show();
        countdown(30);
        showQuestion();
    });

// function for displaying questions
var showQuestion = function () {
    $(".questions :not('#submit-but')").empty();
    // loops through the 5 questions 
    for (var k = 0; k < 5; k++) {
        $('.questions').prepend('<div class="' + questions[k].answer + '"></div>');
        $(questions[k].divClass).append('<div class ="ques-title">' + questions[k].question + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[k].divClass).append('<input type="radio"  name="' + questions[k].qname + '" value="' + questions[k].answer[i] + '"/><label for="' + labels[i] + '">' + questions[k].answer[i] + '</label>');
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
            for (var i = 0; i < 10; i++) {

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
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#submit-but').on('click', function () {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#submit-but').on('click', function () {

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

