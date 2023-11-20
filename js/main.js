var elForm = document.querySelector(".form");
var elFormInput1 = document.querySelector(".input1");
var elFormInput2 = document.querySelector(".input2");
var elFormInput3 = document.querySelector(".input3");
var elText = document.querySelector(".text");
var elText1 = document.querySelector(".text1");
var elText2 = document.querySelector(".text2");

var input1 = elFormInput1.value.trim()
var input2 = elFormInput2.value.trim()
var input3 = elFormInput3.value.trim()


elForm.addEventListener("submit", (evt)=> {
    evt.preventDefault()
    elText.textContent = "Ismim" +   '  ' + input1;
    elText1.textContent = "Familyam" + '   ' + input2;
    elText2.textContent = "Atchestva" + '  ' + input3
}
)