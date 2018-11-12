var button = document.getElementById("easter-egg");
var keys = [];


function handleInput(input) {
    console.log(input);
    keys.push(input);
    if(keys.length >= 5){
        if(keys[keys.length-1] === "d"){
            if(keys[keys.length-2] === "s"){
                if(keys[keys.length-3] === "a"){
                    if(keys[keys.length-4] === "w"){
                        if(keys[keys.length-5] === "spacebar"){
                            $("#easter-egg").classList.remove("hidden");
                        }
                    }
                }
            }
        }
    }
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