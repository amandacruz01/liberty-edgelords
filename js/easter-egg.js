function handleInput(input) {
    console.log(input);

}

document.addEventListener('keyup',function(e) {
    var allowedKeys = {
        32:'spacebar',
        65:'a' ,
        68:'d' ,
        83:'s' ,
        87:'w' 
    };

    handleInput(allowedKeys[e.keyCode]);
});