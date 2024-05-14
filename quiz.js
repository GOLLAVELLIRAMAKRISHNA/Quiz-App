let btn = document.getElementById("btn1");
var answer, second, questions, questionNo, question, showQuestion, currentQuestionIndex = 0, currentQuestion, i = 0, nextQuestion, nextBtn, score = 0, marks = 0;

const questionArray = [
    {
        Question: " A clock is so placed that at 12 noon its minute hand points towards north-east in which direction does its hour hand point at 1:30 pm?",
        Answers: [
            { text: "South", correct: false },
            { text: "North", correct: false },
            { text: "East", correct: true },
            { text: "West", correct: false }
        ]
    },
    {
        Question: " If a person is walking towards north, what direction should he follow so that he is walking towards west?",
        Answers: [
            { text: "right,right,left", correct: false },
            { text: "left,left,right", correct: true },
            { text: "left,right,left", correct: false },
            { text: "left,left,left", correct: false }
        ]
    },
    {
        Question: " If A is to the south of B and C is to the east of B,in what direction is A with respect to C?",
        Answers: [
            { text: "North-east", correct: false },
            { text: "North-west", correct: false },
            { text: "South-east", correct: false },
            { text: "South-west", correct: true }
        ]
    },
    {
        Question: " A is shorter then C and C is as tall as B and D is taller then B. Who is the tallest?",
        Answers: [
            { text: "A", correct: false },
            { text: "C", correct: false },
            { text: "D", correct: true },
            { text: "B", correct: false }
        ]
    },
    {
        Question: " Malar is twenty fourth from the right end of the row of 53 girls. What is the position of malar from the left end?",
        Answers: [
            { text: "29", correct: false },
            { text: "30", correct: true },
            { text: "28", correct: false },
            { text: "32", correct: false }
        ]
    },
    {
        Question: " Saran is eighteenth from the right end in a row of 15 boys. What is his position from the left end?",
        Answers: [
            { text: "35", correct: false },
            { text: "32", correct: false },
            { text: "33", correct: true },
            { text: "34", correct: false }
        ]
    },
    {
        Question: " Naresh is 22 from the left end in a row of 47 boys. What is his position from the right end?",
        Answers: [
            { text: "23", correct: false },
            { text: "28", correct: false },
            { text: "29", correct: false },
            { text: "None of these", correct: true }
        ]
    },
    {
        Question: " In a class of 20 students, shreya is 5 from the top and annie is 7 ranks bellow shreya.find annie's rank from bottom?",
        Answers: [
            { text: "9", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        Question: " If 18[9]3 and 36[30]5, then what is the value of A in 19[A]18? ",
        Answers: [
            { text: "57", correct: true },
            { text: "33", correct: false },
            { text: "75", correct: false },
            { text: "96", correct: false }
        ]
    },
    {
        Question: " If 9@3=12; 15@4=22; 16@14=4; then what is the value of 6@2=?",
        Answers: [
            { text: "26", correct: false },
            { text: "1", correct: false },
            { text: "8", correct: true },
            { text: "30", correct: false }
        ]
    },
    {
        Question: " If 29$14=6, 37$25=3 then what is the value of 84$62=?",
        Answers: [
            { text: "4", correct: true },
            { text: "18", correct: false },
            { text: "13", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        Question: " If 5#9@7=52 and 3@9#2=-89 then 7#6@9=?",
        Answers: [
            { text: "23", correct: false },
            { text: "43", correct: false },
            { text: "56", correct: false },
            { text: "67", correct: true }
        ]
    },
    {
        Question: " If 14%32=46, 52%20=72 then what is the value of 35%14=?",
        Answers: [
            { text: "39", correct: false },
            { text: "49", correct: true },
            { text: "29", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        Question: " Sumit is 8th rank ahead of ravi in a class of 45.If ravi rank from bottom is 19th then find the rank of sumit from beginning?",
        Answers: [
            { text: "19", correct: true },
            { text: "17", correct: false },
            { text: "18", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        Question: " Akash is 5 ranks above sumit in a class of 30.If sumit rank is 15th from the lost.What is Akash rank from the start? ",
        Answers: [
            { text: "8", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true }
        ]
    },
    {
        Question: " Find the greatest number less than 10,000 Which is divisible by 48,60 and 64?",
        Answers: [
            { text: "4800", correct: false },
            { text: "9600", correct: true },
            { text: "9800", correct: false },
            { text: "1080", correct: false }
        ]
    },
    {
        Question: " If we write the numbers from 50 to 151 what is the difference between the sum of all the odd and even numbers?",
        Answers: [
            { text: "51", correct: true },
            { text: "100", correct: false },
            { text: "101", correct: false },
            { text: "151", correct: false }
        ]
    },
    {
        Question: " What is the least number which must be subtracted from 9600 so that the resulting number divisible by 78?",
        Answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        Question: " The number of integers which are to perfect squares between 2 16 and 2 17 is :",
        Answers: [
            { text: "32", correct: true },
            { text: "33", correct: false },
            { text: "34", correct: false },
            { text: "28", correct: false }
        ]
    },
    {
        Question: " The LCM of the two numbers is 2079 and their HCF is 27. if one of the numbers is 189.Find the other?",
        Answers: [
            { text: "189", correct: false },
            { text: "297", correct: true },
            { text: "323", correct: false },
            { text: "187", correct: false }
        ]
    },
    {
        Question: " The HCF of two numbers is 15 their LCM is 225. If one of the numbers is 75, then the order is :",
        Answers: [
            { text: "105", correct: false },
            { text: "90", correct: false },
            { text: "60", correct: false },
            { text: "45", correct: true }
        ]
    },
    {
        Question: " HCF and LCM of two numbers are 13 and 1989 respectively. If one of the number is 117, determine the other:",
        Answers: [
            { text: "121", correct: false },
            { text: "131", correct: false },
            { text: "221", correct: true },
            { text: "231", correct: false }
        ]
    },
    {
        Question: " The sum of a pair of positive intergers is 336 and their HCF is 21. The number of such positive pairs is:",
        Answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        Question: " A,B and C hired a taxi for rs.5,200 and used, it for 24,36 and 44 hours respectively. How much B has to pay?",
        Answers: [
            { text: "rs.1200", correct: false },
            { text: "rs.2200", correct: false },
            { text: "rs.1800", correct: true },
            { text: "rs.2000", correct: false }
        ]
    },
    {
        Question: " The ratio of two numbers is m:n. If first number is 'X'. What is the second number?",
        Answers: [
            { text: "mx/m", correct: false },
            { text: "x", correct: false },
            { text: "nx/m", correct: true },
            { text: "n+m", correct: false }
        ]
    },
    {
        Question: " If the ratio of the boys to girls in a class is B, and the ratio of girls to boys is G, then B+G is :",
        Answers: [
            { text: ">=1", correct: false },
            { text: "=1", correct: false },
            { text: ">1", correct: true },
            { text: "<1", correct: false }
        ]
    },
    {
        Question: " What number has to be added to each term of 3:5 to make the ratio 5:6?",
        Answers: [
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "12", correct: false },
            { text: "13", correct: false }
        ]
    },
    {
        Question: " If a,b,c and d are real numbers such that a:b = b:c =c:d and a:d = 8:125,then the value of a:c is ?",
        Answers: [
            { text: "25:4", correct: false },
            { text: "125:8", correct: false },
            { text: "4:25", correct: true },
            { text: "8:25", correct: false }
        ]
    },
    {
        Question: " The average of 25 results is 18 that of first twelve is 14 and of last 12 is 17. What is the thirteenth result?",
        Answers: [
            { text: "60", correct: false },
            { text: "65", correct: false },
            { text: "78", correct: true },
            { text: "82", correct: false }
        ]
    },
    {
        Question: " If a,b,c and d ,e are five consecutive odd numbers, then average in terms of 'a' will be",
        Answers: [
            { text: "a+2", correct: false },
            { text: "a+3", correct: false },
            { text: "a", correct: false },
            { text: "a+4", correct: true }
        ]
    }
]

try {
    btn.addEventListener("click", function () {
        remove = document.getElementById("main-content").innerHTML = `
    <div class="content" id="content">
    <div class="timing-content" id="timing-content">
        <img src="timer-img.png" alt="timer image"><div class="seconds" id="seconds">30s</div>
    </div>
    <div class="question-box">
        <p id="question"></p>
        <div class="options-box" id="options-box">
        </div>
    </div>
    <div class="btn1" id="btn">
        <input type="submit" value="Next" id="nextBtn"/>
    </div>
    </div>
    `;
        nextBtn = document.getElementById("nextBtn");
        question = document.getElementById("question");
        showQuestion = questions();
        second = document.getElementById("seconds");
        timerDisplay = setInterval(countdown, 900);
        selected = () => {
            var findselected = document.querySelector("input[name='option']:checked");
            for (i = 0; i < 4; i++) {
                if (currentQuestion.Answers[i].correct) {
                    if (findselected === null) {
                        break;
                    }
                    else if (findselected.value == currentQuestion.Answers[i].text) {
                        console.log(findselected.value === currentQuestion.Answers[i].text)
                        score = score + 1;
                        console.log(score)
                    }
                    else {
                        console.log(findselected.value === currentQuestion.Answers[i].text)
                        score = score - 0.5;
                        console.log(score)
                    }
                }
            }
        }
        nextBtn.addEventListener("click", function () {
            radiobtns = document.querySelectorAll("input[name='option']");

            if (questionArray.length != questionNo) {
                selected();
                count = 31;
                changeQuestion = questions();
            }
            else {
                count = 1;
                clearInterval(countdown);
                selected();
                remove = document.getElementById("content").innerHTML = `
            <div class="quiz-complete" id="quiz-complete">
            <div id="comlpete-title" class="comlpete-title">
                <h4>Quiz has completed!</h4>
            </div>
            <fieldset class="result-div" id="result-div">
                <legend>Result</legend>
                <label>Total Questions are : 30</label>
                <label> Your score is : <span id="result">${score}</span></label>
            </fieldset>
        </div>`;
            }
        });

    });
    questions = () => {
        answer = document.getElementById("options-box");
        currentQuestion = questionArray[currentQuestionIndex];
        answer.innerHTML =
            `<label for="option1" class="options"><input type="radio" value="${currentQuestion.Answers[0].text}" id="option1" name="option">${currentQuestion.Answers[0].text}</label>` +
            `<label for="option2"class="options"><input type="radio" value="${currentQuestion.Answers[1].text}" id="option2" name="option">${currentQuestion.Answers[1].text}</label>` +
            `<label for="option3"class="options"><input type="radio" value="${currentQuestion.Answers[2].text}" id="option3" name="option">${currentQuestion.Answers[2].text}</label>` +
            `<label for="option4"class="options"><input type="radio" value="${currentQuestion.Answers[3].text}" id="option4" name="option">${currentQuestion.Answers[3].text}</label>`;
        questionNo = currentQuestionIndex + 1;
        question.innerHTML = questionNo + ". " + currentQuestion.Question;
        currentQuestionIndex++;
    }

    count = 30;
    let countdown = () => {
        if (count == 1) {
            if (questionArray.length != questionNo) {
                selected();
                count = 31;
                nextQuestion = questions();
            }
            if (questionArray.length == questionNo) {
                selected();
                clearInterval(countdown);
                remove = document.getElementById("content").innerHTML = `
            <div class="quiz-complete" id="quiz-complete">
            <div id="comlpete-title" class="comlpete-title">
                <h4>Quiz has completed!</h4>
            </div>
            <fieldset class="result-div" id="result-div">
                <legend>Result</legend>
                <label>Total questions are : 30</label>
                <label> Your score is : <span id="result">${score}</span></label>
            </fieldset>
        </div>`;
            }
            count = 31;
        } else {
            count--;
            second.innerHTML = `${count}s`;
        }
    }
}
catch (e) {
    console.log(e);
}