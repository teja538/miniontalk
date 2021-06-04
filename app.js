//reference to the query selector is stored in variable at 38:min watch video
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output")

btnTranslate.addEventListener("click",function clickEventHandler()
{
    txtOutput.innerText = "translated text is : " + txtInput.value  
})

