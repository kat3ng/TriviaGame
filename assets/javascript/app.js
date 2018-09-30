// Create a function that creates the start button and initial screen
$(document).ready(function () {


    // Create trivia questions. 
    var questions = [{
        question: "How many 'inner' senshi exist within the Sailor Moon series?",
        answer: ["5", "4", "8", "3"],
        qname: "inner-senshi",
        correct: "5",
        //! Mercury, Mars, Venus and Jupiter, alongside Sailor Moon make up the inner senshi in the Sailor Moon series."
        divClass: ".innersenshi"
    },
    {
        question: "Princess Serenity, daughter of Queen Serenity, was the princess of what kingdom?",
        answer: ["The Moon Kingdom", "Kingdom Heart", "Silver Millenium", "Europa"],
        qname: "moon-kingdom",
        correct: "The Moon Kingdom",
        divClass: ".moonkingdom"
    },
        question: "Prince Endymion and Princess Serenity of the future have a time-traveling daughter who goes back in time to seek help from Serena and her friends in the present, what is her name?",
        answer: ["Hillary", "Chibi Chibi", "Serene", "Chibi Usa"],
        qname: "moon-kingdom",
        correct: "The Moon Kingdom",
        divClass: ".moonkingdom"
    },

    ] // end questions object
};
