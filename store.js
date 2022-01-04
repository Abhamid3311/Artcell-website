var removeCartItemButtons = document.getElementsByClassName("btn-danger")
console.log(removeCartItemButtons)

for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', (e) => {
        var buttonClicked = e.target
        buttonClicked.parentElement.parentElement.remove();

    })
}