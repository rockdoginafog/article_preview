const share = document.querySelector("#share")
const bubble = document.querySelector(".bubble")

function showBubble(){
    if(bubble.classList.contains("hidden")){
        bubble.classList.remove("hidden")
}
    else{
        bubble.classList.add("hidden")
    }

}

share.addEventListener("click", () => {
    showBubble()
})



