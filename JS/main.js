const input = document.querySelector(".contain");
const questions = document.querySelector("#questions")
const savol = document.querySelector(".savol");
const question = [
    {
        question: "1_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "2_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "3_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "4_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "5_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "6_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "7_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "8_Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "9_Afrikada nechta aholi bor",
        answer: "4000"
    }    
]

function inputHendle(){
    input.classList.add("none");
    questions.classList.remove("none")
    savol.textContent = ""  
}




input.addEventListener('keyup', (e)=>{
    if (e.keyCode == 13) {
        inputHendle()
    }
});
