function cargar_menu(){
  if (document.querySelector("#btn_menu").value=="0"){
    document.querySelector("nav").setAttribute("class", "ver_menu");
    document.querySelector("#btn_menu").value="1";
    document.querySelector(".btn_img").setAttribute("src","img/action/xmark-solid.svg");
  }else{
    document.querySelector("nav").removeAttribute("class");
    document.querySelector("#btn_menu").value="0";
    document.querySelector(".btn_img").setAttribute("src","img/action/bars-solid.svg");
  }
} 

