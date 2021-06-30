console.log("Sanity check!");
collisionDetection()
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
            console.log( $("#player_ship").offset() );             
        }
        if (direction == 38) {
            $("#player_ship").animate({top: "-=5"}, 0);
            console.log( $("#player_ship").offset() );
        }
        if (direction == 39) {
            $("#player_ship").animate({left: "+=5"}, 0);
            console.log( $("#player_ship").offset() ); 
        }
        if (direction == 40) {
            $("#player_ship").animate({top: "+=5"}, 0);
            console.log( $("#player_ship").offset() );
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

function startGame() {  // calls game loop, also initalizes game start
    // show READY alert H1 blinking, then START! Then run gameLoop?
    for (i = 0; i < 100; i++) {
        collisionDetection();
        gameLoop(Math.floor(Math.random() * 10)); // calls a random ship
    }
}
    
function gameLoop(i) { // core gameplay - avoid the random enemies!
    setTimeout(function() {
        $( `#enemy_${i}` ).animate({top: 1250}, Math.floor(Math.random() * 5000)); // random enemies! I'm getting CLOSE.
        $( `#enemy_${i}` ).fadeOut(1);
        $( `#enemy_${i}` ).animate({top: -1250}, 1000);
        $( `#enemy_${i}` ).fadeIn(1);
        if (--i) gameLoop(i);   //  decrement i and call myLoop again if i > 0
        }, 3000)
}(10);     

// END ENEMY DISPLAY AND MOVEMENT



// COLLISION DETECTION
// Can't get this code to work at all. 
function collisionDetection() { // can I track x/y of a whole class in one variable? If not, make more!
    let playerLocationX = $("#player_ship").offset().left;
    let playerLocationY = $("#player_ship").offset().top;
    let playerHeight = $("#player_ship").height(100);
    let playerWidth = $("#player_ship").width(100);
    let bogeyX = $("#enemy_5").offset().left;
    let bogeyY = $("#enemy_5").offset().top;
    let bogeyHeight = $(".bogey").height(100);
    let bogeyWidth = $(".bogey").width(100);
    if (playerLocationY < bogeyY + bogeyHeight && playerLocationX + playerWidth > bogeyX && playerLocationY < bogeyY + bogeyHeight && playerHeight + playerLocationY > bogeyY) { // test if bogey ever is on same Y axis with player, should fire quick
        console.log("You just crashed!"); 
    }
}





// END COLLISION DETECTION





/* NEW PLAN
Make 'dumb' HTML and just make those ships move downscreen.
Solve the smallest possible problem at a time. Never get complex.

0. make more than one bogey appear DONE!
1. make a bogey move DONE!
2. make 2 bogeys move DONE!
3. make bogeys move in different loops DONE!
4. make bogeys repeat (off screen, loop up to top) DONE!
5 physics - collisions and death state ***HARDEST ONE***
6. fine tuning
7. interface
8. score keeping
9. animations!

*/

startGame();









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

