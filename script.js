console.log("Sanity check!");
// use javascript to either MAKE enemies, or create them with divs manually
// once accounted for, spread them randomly (random? or manually)
// Then run animate() to get them doing all sorts of stuff. CSS?

const $Bgy = $('.enemy'); // define jQuery enemy

$Bgy.animate({
    marginTop: "+=1000px",
}, 1000);

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
// one function to create enemy info (array). One function to show those enemies on screen. One function to move?





// END ENEMY DISPLAY AND MOVEMENT
