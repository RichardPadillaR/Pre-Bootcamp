function alert1() {
    alert("Loading Weather Report...");
}

function remove_cookie(cookies) {
    console.log(cookies)
    var elem = document.getElementById(cookies);
    elem.parentNode.removeChild(elem);
}

function cToF(celsius) {
    var highTempArray = document.getElementsByClassName('high_temp');
    var lowTempArray = document.getElementsByClassName('low_temp');
    if ( celsius === '1' ) {
        for (var i = 0; i < highTempArray.length; i++) {
            var value = highTempArray[i].innerHTML.slice(0, -1)
            value = Math.round((9/5) * Number(value) + 32) + '°'
            highTempArray[i].innerHTML = value;
        }
        for (var i = 0; i < lowTempArray.length; i++) {
            var value = lowTempArray[i].innerHTML.slice(0, -1)
            value = Math.round((9/5) * Number(value) + 32) + '°'
            lowTempArray[i].innerHTML = value;
        }
    } else {
        for (var i = 0; i < highTempArray.length; i++) {
            var value = highTempArray[i].innerHTML.slice(0, -1)
            value = Math.round((5/9) * (Number(value) - 32)) + '°'
            highTempArray[i].innerHTML = value;
        }
        for (var i = 0; i < lowTempArray.length; i++) {
            var value = lowTempArray[i].innerHTML.slice(0, -1)
            value = Math.round((5/9) * (Number(value) - 32)) + '°'
            lowTempArray[i].innerHTML = value;
        }
    }
}
