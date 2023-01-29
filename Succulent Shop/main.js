function cart(){
    alert("The Cart is Empty!");
}

function change_pic(){
    document.getElementById("succ_img").src = "imgs/succulents-2.jpg";
}

function revert_pic(){
    document.getElementById("succ_img").src = "imgs/succulents-1.jpg";
}

function remove_cookie(cookies) {
    var elem = document.getElementById(cookies);
    elem.parentNode.removeChild(elem);
}