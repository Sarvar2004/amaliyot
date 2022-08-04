const input = document.querySelector(".contain");
const questions = document.querySelector("#questions")
const input1 = document.querySelector('.input')

const question = [
    {
        question: "Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "Afrikada nechta aholi bor",
        answer: "4000"
    },
    {
        question: "Afrikada nechta aholi bor",
        answer: "4000"
    }   
]

function inputHendle(){
    input.classList.add("none");
    questions.classList.remove("none")
}

function myFunc(input,submit){

}
myFunc(input1,submit)






input.addEventListener('keyup', (e)=>{
    if (e.keyCode == 13) {
        inputHendle()
    }
});
