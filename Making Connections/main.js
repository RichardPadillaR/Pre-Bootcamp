function remove(user){
    var connection = document.getElementById(user);
    connection.parentNode.removeChild(connection);
}

function name_change(){
    var name = document.getElementById('name');
    name.innerHTML = 'Bob Burgers'
}