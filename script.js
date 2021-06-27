console.log("Sanity check!");
// use javascript to either MAKE enemies, or create them with divs manually
// once accounted for, spread them randomly (random? or manually)
// Then run animate() to get them doing all sorts of stuff. CSS?





/*
const $Bgy = $('.enemy'); // define jQuery enemy

$Bgy.animate({
    marginTop: "+=1000px",
}, 1000);


*/


// $Bgy.slideDown(4000); NOT working
/*
Galaga/R-Type shooter (hold off on actual shooting for now)

***What variables and functions do I need?***

Player Movement Function = movePlayerShip()


*/
// PLAYER MOVEMENT (complete!)
function movePlayerShip() {
    for (let direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue; // if a direction key is pressed, run code. Else, null
        if (direction == 37) { // '37-40' = direction keys!
            $("#player_ship").animate({left: "-=5"}, 0);               
        }
        if (direction == 38) {
            $("#player_ship").animate({top: "-=5"}, 0);  
        }
        if (direction == 39) {
            $("#player_ship").animate({left: "+=5"}, 0);  
        }
        if (direction == 40) {
            $("#player_ship").animate({top: "+=5"}, 0);  
        }
    }
}
setInterval(movePlayerShip, 20); // Interval number = speed (lower is faster)
let keys = {} // store directional movements
$(document).keydown(function(e) { // keydown() - when a certain key is pressed and held down...
    keys[e.keyCode] = true; // keyCode is depreceated but still works. Try to update if possible (low priority)
});

$(document).keyup(function(e) {
    delete keys[e.keyCode]; // depreceated
});
// END PLAYER MOVEMENT (complete!)




// ENEMY DISPLAY AND MOVEMENT

const $Box = $('#box'); // this is the <box> parent, which holds class=enemy <divs>
const $Div = $('.enemy'); // this is actually grabbing an existing div tag
let enemyArray = [];

// ****TODAY**** Try to get multiple enemies to appear separately. They overlap or only one

function startGame() {
    for (i = 0; i < 10; i++){
        enemyArray.push(i); // each loop, create object in array
        console.log(enemyArray); // check that array is growing
    }
    enemyArray.forEach((element, index) => {

        let $bogey = $(`<div id='divBaddie_${index}'>`);
        let $img = $(`<img id='divBaddie_${index}'>`);
        $img.attr('src', 'https://www.seekpng.com/png/full/399-3995261_futuristic-spaceship-png-download-alien-space-ship-sprites.png')
        $img.addClass("enemy"); // also add border

        $bogey.append($img); // adds <img> to <div>
        $Box.append($bogey); // adds <div> to <box>
        $Div.css({"left": Math.random() * window.outerWidth}); // this actually works, but still just one
        $Div.animate({top: 1250}, 1000),  
        console.log($bogey, $img);
    })  
}; // object.attr('src', '...')...object.addClass("classname")

startGame();
// create a div tag and an img tag within it, and append it to the <box>

// END ENEMY DISPLAY AND MOVEMENT

/* CURRENT PROBLEMS
1. Create multiple enemies dynamically (will need too many for manual input and I don't want to overlaod memory - 3-4 at a time)
2. Randomize their horizontal position on screen
3. Collision detection (crash, end game)

USE ANIMATION FOR COLLISIONS AND APPEARING. NOT FOR STD ENEMY MOVEMENT 





















REJECTED ATTEMPT: creating class Bogey - just does NOT do anything

var Bogey = function(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.update = function() {
        fill(255,0,0)
        ellipse(this.x, this.y, this.size, this.speed);
    };
};


var bogey = new Bogey(100, 170, 41, 5); // this is an instance of class Bogey
// draw function is BUILT IN. That's what I was missing!

draw = function() {
    bogey.update();
}





*/
