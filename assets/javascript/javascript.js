$( document ).ready(function() {

    $(".yo").hide();
//-------------------------------------------
    var questions = [{
        question: "The speed of light is equal to what?",
        answerList: [" 3 x 10^8 m/s   ", " 9 x 10^8 m/s   ", " 3 x 10^9 m/s   ", " 8 x 10^9 m/s   "],
        answer: 0
    },{
        question: "What is the SI unit of magnetic flux density?",
        answerList: ["Ohm", "Magnatron", "Tesla", "Modal"],
        answer: 2
    },{
        question: "What is the freezing point of water in Kelvins?",
        answerList: ["212", "284", "312", "273"],
        answer: 3
    },{
        question: "Which instrument is used for detecting radioactivity?",
        answerList: ["Leptometer", "Effusiometer", "Pluviometer", "Geiger Counter"],
        answer: 3
    },{
        question: "1 Newton (N) is equal to what?",
        answerList: ["kg(m/s)", "kg(m/s^2)", "kg(m^2/s^2)", "kg(m^2/s)"],
        answer: 1
    }];

 //-------------------------------------------

    var number = 45;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;

//-------------------------------------------

    $("#start").on("click", function() {
    

//      function myFunction() {                                                  my attempt to auto-play
//           var x = document.getElementById("audio").autoplay;
//         
//         }
//         myFunction();

//-------------------------------------------
        $("#directions").hide();
        $(this).hide();
        $(".yo").show();
        $("#time").html("<h2>Time Remaining: 45 s</h2>" + "<br>");
    
        run();
       
    //-------------------------------------------
       
        $("#Q1").html("<h5>" + questions[0].question + "</h5>");
    $("#A1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    $("#Q2").html("<h5>" + questions[1].question + "</h5>");
    $("#A2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    $("#Q3").html("<h5>" + questions[2].question + "</h5>");
    $("#A3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    $("#Q4").html("<h5>" + questions[3].question + "</h5>");
    $("#A4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    $("#Q5").html("<h5>" + questions[4].question + "</h5>");
    $("#A5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );

    
//                          for (var i = 0; i < questions.length; i++){
//                            var newQuestionsss = $("<h3>" +  questions[i].question + "<br><br> " 
//                              + "<input type='radio' name='answer1' value='0' id = 'myRadio'>"  + "<label>" + questions[i].answerList[0] + "</label>"
//                              + "<input type='radio' name='answer1' value='1' id = 'myRadio'>" + "<label>" + questions[i].answerList[1] + "</label>"
//                              + "<input type='radio' name='answer1' value='2' id = 'myRadio'>" + "<label>" + questions[i].answerList[2] + "</label>"
//                              + "<input type='radio' name='answer1' value='3' id = 'myRadio'>" + "<label>" + questions[i].answerList[3] + "</label>" + "<br><br>" + "</h3>");
//                      
//                              questionsss.append(newQuestionsss);
//                              
//                              function change() {
//                              var change = document.getElementById("myRadio").name = "answer" + [1+i];
//                              
//                              console.log(change);
//                      
//                              }
//                              
//                              change();
//                          };
    
        //-------------------------------------------

        $("#submit").html("<button id='submit' class='btn'>Finished</button>");
    
        
        $("#submit").on("click", function() {
            
            keepingScore();
            displayResults();
        });
    });
    
//-------------------------------------------

    function run() {
    
        clearInterval(intervalId);
        intervalId = setInterval(tick, 1000);
    }
    
//-------------------------------------------

    function tick() {
    
        number--;
        $("#time").html("<h2>Time Remaining: " + number + " s</h2>" + "<br>");
    
        if (number === 0) {
    
            stop();
            keepingScore();
            displayResults();
    
        }
    }
    
//-------------------------------------------

    function stop() {
    
        clearInterval(intervalId);
    }

//-------------------------------------------
    
    function displayResults() {

        $("#time").hide();
        $(".getRidOf").hide(); 
        $("#submit").hide();
        
        $("#resultsMessage").html("<h3>You Are AGenius!!!!</h3>");
        $("#correct").html("Correct Answers: " + correctAnswers);
        $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
        $("#unanswered").html("Unanswered: " + unanswered);
        stop();
    }
    
//-------------------------------------------
    
    function keepingScore() {
        var userAnswer = [
        $("input[name='answer1']:checked").val(),
        $("input[name='answer2']:checked").val(),
        $("input[name='answer3']:checked").val(),
        $("input[name='answer4']:checked").val(),
        $("input[name='answer5']:checked").val(),
        ]
       
     //-------------------------------------------
    
        for (i=0;i<questions.length;i++){
    
        
        if (userAnswer[i] === undefined) {
    
            unanswered++;
        }
        else if (userAnswer[i] == questions[i].answer) {
    
            correctAnswers++;
        }
        else {
    
            incorrectAnswers++;
        }
        }
       
    }
});