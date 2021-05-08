function cerrarMenu(){
    document.getElementById("side_menu").classList.remove("show");
    document.getElementById("darkWindow").classList.remove("shadow");
    
}

function abrirMenu(){
    document.getElementById("side_menu").classList.add("show");
    document.getElementById("darkWindow").classList.add("shadow");
    document.getElementById("darkWindow").addEventListener('click', this.cerrarMenu);
    
    
}

function side(open){
    if(open){
        abrirMenu();
    }else{
        cerrarMenu();
        
        }
        
}