console.log("Sanity check!");
// once accounted for, spread them randomly (random? or manually)
// Then run animate() to get them doing all sorts of stuff. CSS?

/*
Galaga/R-Type shooter (hold off on actual shooting for now)

>>>> https://jstearne.github.io/the-game/ <<<<

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


// **** TO DO: make more than two ships appear at once! ****

const $Box = $('#box'); // this is the <box> parent, which holds class=enemy <divs>
const $Div = $('.enemy'); // this is actually grabbing an existing div tag
let enemyArray = [];

// ****TODAY**** alternative since this isn't working: populate 100+ <div> in HTML, set them all off screen (up), and have them come one by one on a timer (loop?)
// AKA for all <class badguy div>, animate one CSS, wait random(seconds), send another, loop

function startGame() {
    for (i = 0; i < 10; i++){
        enemyArray.push(i); // each loop, create object in array
        console.log(enemyArray); // check that array is growing
    }
    enemyArray.forEach((element, index) => { // add enemies to array, for each, do this:
        let $bogey = $(`<div id='divBaddie_${index}'>`); // define $bogey = all enemy <divs> (ID to be dynamically added as enemy_x)
        let $img = $(`<img id='divBaddie_${index}'>`); // $img = all <image> tags that make up these enemies
        $img.attr('src', 'https://www.seekpng.com/png/full/399-3995261_futuristic-spaceship-png-download-alien-space-ship-sprites.png')
        $img.addClass("enemy");
        $img.attr('border', 0);
        
        $bogey.append($img); // adds <img> to <div>
        $Box.append($bogey); // adds <div> to <box>
        
        $Div.css({"left": Math.floor(Math.random()*100)}); // this actually works, but still just one
        $Div.animate({top: 1250}, 1000),  
        console.log($bogey, $img);
    })  // Math.floor(Math.random()*1000), Math.floor(1) * Math.random() * window.outerWidth
}; // object.attr('src', '...')...object.addClass("classname")

startGame();
// create a div tag and an img tag within it, and append it to the <box>

// END ENEMY DISPLAY AND MOVEMENT

/* CURRENT PROBLEMS
1. Create multiple enemies dynamically (will need too many for manual input and I don't want to overlaod memory - 3-4 at a time)
2. Randomize their horizontal position on screen
3. Collision detection (crash, end game)

USE ANIMATION FOR COLLISIONS AND APPEARING. NOT FOR STD ENEMY MOVEMENT 



*/
