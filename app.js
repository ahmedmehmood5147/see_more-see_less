var text1 = document.getElementById("text")
var btn = document.getElementById("button")
var text2 = text1.innerText
if(text2.length > 50){
    text1.innerText = text2.slice(0,50)
    
}
function showMoreLess() {
    if (text1.innerText.length> 50) {
        text1.innerText = text1.innerText.slice(0,50)
        btn.innerText = "seemore"
    }
    else{
        text1.innerText=text2
        btn.innerText = "seeless"
    }
    
}