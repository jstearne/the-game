console.log("Sanity check!");
/*
Galaga/R-Type shooter (hold off on actual shooting for now)
Dodge enemies as they approach, survive long enough to win!

>>>> https://jstearne.github.io/the-game/ <<<<

*/
// PLAYER MOVEMENT (complete!)
function movePlayerShip() {
    for (let direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue; // if a direction key is pressed, run code. Else, null
        if (direction == 37) { // '37-40' = direction keys!
            $("#player_ship").animate({left: "-=5"}, 0);
        //    console.log( $("#player_ship").offset() );             
        }
        if (direction == 38) {
            $("#player_ship").animate({top: "-=5"}, 0);
        //    console.log( $("#player_ship").offset() );
        }
        if (direction == 39) {
            $("#player_ship").animate({left: "+=5"}, 0);
        //    console.log( $("#player_ship").offset() ); 
        }
        if (direction == 40) {
            $("#player_ship").animate({top: "+=5"}, 0);
        //    console.log( $("#player_ship").offset() );
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
const $Box = $('.container'); // class grid (layout for enemy)
const $Div = $('.bogey'); // all enemies (class)

function startGame() {  // calls game loop, also initalizes game star
    $(`h1`).fadeOut(5000);
    for (i = 0; i < 100; i++) {
        gameLoop(Math.floor(Math.random() * 10)); // calls a random ship

    }
    // collisionDetection();
}
    
function gameLoop(i) { // core gameplay - avoid the random enemies!
    setTimeout(function() {
        $( `#enemy_${i}` ).fadeIn(1);
        $( `#enemy_${i}` ).animate({top: 1400}, Math.floor(Math.random() * 5000)); // random enemies!
        $( `#enemy_${i}` ).fadeOut(200);
        $( `#enemy_${i}` ).animate({top: -1400}, 1000);
        $( `#enemy_${i}` ).fadeIn(1);
        if (--i) gameLoop(i);   //  decrement i and call myLoop again if i > 0
        }, 5000) // 5 seconds till start
}(10);     

// END ENEMY DISPLAY AND MOVEMENT



// TIMER/SCORE FUNCTION

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 250);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) { // timer = duration;
            alert("You Win! But can you make it even further...?");
            startGame();
            timer = 200;
        }
    }, 1000);
}
window.onload = function () {
    let seconds = 155,
        display = document.querySelector('#time');
    startTimer(seconds, display);
};
// END TIMER/SCORE FUNCTION





// COLLISION DETECTION
/*
function collisionDetection() { // can I track x/y of a whole class in one variable? If not, make more!
    console.log("Hello! Inside collision!");
    let playerLocationX = $("#player_ship").offset().left; // this tracks player location
    let playerLocationY = $("#player_ship").offset().top; 
    let playerHeight = $("#player_ship").height(100);
    let playerWidth = $("#player_ship").width(100);
    let bogeyX = $("#enemy_5").offset().left;
    let bogeyY = $("#enemy_5").offset().top;
    let bogeyHeight = $("#enemy_5").height(200);
    let bogeyWidth = $("#enemy_5").width(200);
    if (playerLocationY > bogeyY + bogeyHeight || 
        playerLocationX + playerWidth < bogeyX || 
        playerLocationY > bogeyY + bogeyHeight || 
        playerHeight + playerLocationY < bogeyY || 
        playerLocationX > bogeyWidth + bogeyX ) { // test if bogey ever is on same Y axis with player, should fire quick
        console.log("You just crashed!"); 
    } else {
        console.log("ELSE!");
    }
}

*/

// END COLLISION DETECTION





/* NEW PLAN
Make 'dumb' HTML and just make those ships move downscreen.
Solve the smallest possible problem at a time. Never get complex.

0. make more than one bogey appear DONE!
1. make a bogey move DONE!
2. make 2 bogeys move DONE!
3. make bogeys move in different loops DONE!
4. make bogeys repeat (off screen, loop up to top) DONE!
5 physics - collisions and death state ***HARDEST ONE COME BACK TO ME***

Knock these out!!
6. fine tuning
7. interface
8. score keeping
9. animations!

*/

startGame();









    /* ***** SAVE FOR ANOTHER TIME*****
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

