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

const $Box = $('.container'); // class grid (layout for enemy)
const $Div = $('.bogey'); // all enemies (class)
// let enemyArray = []; NO LONGER NEEDED
function startGame() { 
    // show READY alert H1 blinking, then START! Then run gameLoop?
    for (i = 0; i < 100; i++) {
        gameLoop(Math.floor(Math.random() * 10)); // calls a random ship
    }
}
    
    function gameLoop(i) {
        setTimeout(function() {
            $( `#enemy_${i}` ).animate({top: 1250}, Math.floor(Math.random() * 5000)); // random enemies! I'm getting CLOSE.
            $( `#enemy_${i}` ).fadeOut(10);
            $( `#enemy_${i}` ).animate({top: -1250}, 1000);
            $( `#enemy_${i}` ).fadeIn(10);
            if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
            }, 3000)
        }(10);     
    
    //    $( `#enemy_${i}` ).animate({top: 1250}, 1200);
    //    $( `#enemy_${i}` ).fadeOut(100);

    //    $( `#enemy_${i}` ).fadeIn(100);
    //    $( `#enemy_${i}` ).animate({top: 1250}, 1200);
        // go invisible, return to start

// *** trying to get one code to run, wait, then run next loop. But they all fire at once.
    //$( "#enemy_0" ).animate({top: 1250}, 1000);


    //$Div.css({"left": Math.floor(Math.random()*100)}); // this actually works, but still just one
    //$Div.animate({top: 1250}, 1000);

//     let i = Math.floor(Math.random() * 10); // call a div (enemy_1) and have it work over and over (just the one)

/* NEW PLAN
Make 'dumb' HTML and just make those ships move downscreen.
Solve the smallest possible problem at a time. Never get complex.

0. make more than one bogey appear DONE!
1. make a bogey move DONE!
2. make 2 bogeys move DONE!
3. make bogeys move in different loops  DONE!
4. make bogeys repeat (off screen, loop up to top) DONE!
5 physics - collisions and death state
6. fine tuning
7. interface
8. score keeping
9. animations!


*/


















    /*
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
        // $Div is the enemy class I have in HTML already. NOT the new divBaddies!
        $Div.css({"left": Math.floor(Math.random()*100)}); // this actually works, but still just one
        $Div.animate({top: 1250}, 1000),  
        console.log($bogey, $img);
    })  */
startGame();





// create a div tag and an img tag within it, and append it to the <box>

// END ENEMY DISPLAY AND MOVEMENT

/* CURRENT PROBLEMS
1. Create multiple enemies dynamically (will need too many for manual input and I don't want to overlaod memory - 3-4 at a time)
2. Randomize their horizontal position on screen
3. Collision detection (crash, end game)

USE ANIMATION FOR COLLISIONS AND APPEARING. NOT FOR STD ENEMY MOVEMENT 



*/
