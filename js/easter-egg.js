var button = document.getElementById("easter-egg");
var keys = [];


function handleInput(input) {
    // console.log(input);
    keys.push(input);
    if(keys.length >= 4){
        if(keys[keys.length-1] === "e"){
            if(keys[keys.length-2] === "r"){
                if(keys[keys.length-3] === "i"){
                    if(keys[keys.length-4] === "f"){
                        $(".easter-egg")[0].classList.remove("hidden");
                    }
                }
            }
        }
    }
}

$(".easter-egg")[0].addEventListener("click", function(){
    $(".easter-egg")[1].classList.remove("hidden");
});


document.addEventListener('keyup',function(e) {
    var allowedKeys = {
        70:'f' ,
        73:'i' ,
        82:'r' ,
        69:'e' 
    };

    handleInput(allowedKeys[e.keyCode]);
});