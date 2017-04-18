function toggleClass(newClass, elemetToToggleClass){
    elemetToToggleClass.classList.toggle(newClass);
}

window.addEventListener("load", function(){
    var i;
    var originText = document.getElementById("origin-text");
    console.log(originText.childNodes);
    var extinctionText = document.getElementById("extinction-text");
    
    document.getElementById("btn-origin").addEventListener("click", function(){
        toggleClass("element-none", originText);
    })
    
    document.getElementById("btn-extinction").addEventListener("click",function(){
        toggleClass("element-none", extinctionText);
    });
    
    var close = document.querySelectorAll(".close");
    var photo = document.querySelectorAll(".photo");
    
    for(i=0; i<close.length; i++){
        close[i].addEventListener("click", function(){
            toggleClass("element-none", event.target.parentElement);
        });
    }
    
    document.getElementById("btn-restore-photos").addEventListener("click", function(){
        for(i=0; i<photo.length; i++){
            photo[i].classList.remove("element-none");
        }        
    });
    
    /*for(i=0; i<photo.length; i++){
        console.log(event);
        photo[i].addEventListener("mouseover", function(){
            console.log(event.target.nextElementSibling);
            event.target.nextElementSibling.style.display = "none";
        });
    }*/
});
