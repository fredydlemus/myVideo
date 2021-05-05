function side(open){
    if(open){
        document.getElementById("side_menu").classList.add("show");
        document.querySelector("body").classList.add("shadow")
    }else{
        document.getElementById("side_menu").classList.remove("show");
        document.querySelector("body").classList.remove("shadow");
        
    }
}