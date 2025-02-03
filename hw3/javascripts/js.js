document.addEventListener('DOMContentLoaded', function () {


let box = document.querySelectorAll(".styledbutton");

box.forEach(function(styledbutton){
styledbutton.addEventListener("click", function(){
        
if(styledbutton.style.backgroundColor === "pink"){
styledbutton.style.backgroundColor = "lightyellow";
styledbutton.style.margin = '5vw';
console.log("change color");
}

else{
    styledbutton.style.backgroundColor = "pink";
    styledbutton.style.margin = '3vw';
}
});
});

}); 