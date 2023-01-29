function increaseNumber(elementId) {
    var element = document.querySelector (elementId)
    element.innerText = ++element.innerText;
}