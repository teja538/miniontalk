//reference to the query selector is stored in variable at 38:min watch video
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

btnTranslate.addEventListener("click",function clickEventHandler()
{
    console.log("you clicked the button "+txtInput.value)
})
