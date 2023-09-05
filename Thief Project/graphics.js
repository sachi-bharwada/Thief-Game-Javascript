// This is the canvas we created in the HTML
var theCanvas = document.getElementById('game window');

// This variable has the functions to draw on the canvas
var graphicsControl = theCanvas.getContext('2d');

// add the event listeners that let the user use the keyboard to control the game
theCanvas.addEventListener('keydown', keydownAction);
theCanvas.addEventListener('keyup', keyupAction);

// get the graphic window's dimensions
var canvasWidth = theCanvas.width;
var canvasHeight = theCanvas.height;

// create a variable for the canvas's image
const canvasImage = new Image(canvasWidth, canvasHeight);

// create variables for the user character's image
const playerImage = new Image();
var playerWidth;
var playerHeight;
// this controls the player location
var playerX, playerY;

// create variables for the potion image
const potionImage = new Image();
var potionWidth;
var potionHeight;
// this controls the potion's location
var potionX, potionY;
// this controls weight and price of the potion
var potionPrice = 9;
var potionWeight = 5;
// stores whether potion is picked up or not
var potionItem = 0;
var potionParagraph = document.getElementById('potion');
potionParagraph.innerText = 'Potion Weight (kg): ' + potionWeight + ' Potion Price ($): ' + potionPrice;

// create variables for the money bag image
const moneyBagImage = new Image();
var moneyBagWidth;
var moneyBagHeight;
// this controls the money bag location
var moneyBagX, moneyBagY;
// controls weight and price of the money bag
var moneyBagPrice = 14;
var moneyBagWeight = 15;
// stores whether money bag is picked up or not
var moneyBagItem = 0;
var moneybagParagraph = document.getElementById('moneybag');
moneybagParagraph.innerText = 'Money Bag Weight (kg): ' + moneyBagWeight + ' Money Bag Price ($): ' + moneyBagPrice;

// create variables for the wand image
const wandImage = new Image();
var wandWidth;
var wandHeight;
// this controls the wand's location
var wandX, wandY;
// controls weight and price of the wand
var wandPrice = 4;
var wandWeight = 2;
// stores whether wand is picked up or not
var wandItem = 0;
var wandParagraph = document.getElementById('wand');
wandParagraph.innerText = 'Wand Weight (kg): ' + wandWeight + ' Wand Price ($): ' + wandPrice;

// create variables for the book image
const bookImage = new Image();
var bookWidth;
var bookHeight;
// this controls the book's location
var bookX, bookY;
// controls weight and price of the book
var bookPrice = 12;
var bookWeight = 10;
// stores whether book is picked up or not
var bookItem = 0;
var bookParagraph = document.getElementById('book');
bookParagraph.innerText = 'Book Weight (kg): ' + bookWeight + ' Book Price ($): ' + bookPrice;

// create variables for the medal image
const medalImage = new Image();
var medalWidth;
var medalHeight;
// this controls the medal's location
var medalX, medalY;
// controls weight and price of the medal
var medalPrice = 10;
var medalWeight = 7;
// stores whether medal is picked up or not
var medalItem = 0;
var medalParagraph = document.getElementById('medal');
medalParagraph.innerText = 'Medal Weight (kg): ' + medalWeight + ' Medal Price ($): ' + medalPrice;

// create variables for the door image
const doorImage = new Image();
var doorWidth;
var doorHeight;
// controls the door's location
var doorX, doorY;

// create varaibles used for total weight and total value
var totalWeight = 0;
var totalValue = 0;
// this displays the total weight and total value on the screen 
var weightParagraph = document.getElementById('weight');
weightParagraph.innerText = 'Total Weight (kg): ' + totalWeight;
var valueParagraph = document.getElementById('value');
valueParagraph.innerText = 'Total Value ($): ' + totalValue;

// used for the countdown timer
var countDown = 100;
//this displays the timer and the time remaining on the screen
var timerParagraph = document.getElementById('timer');
timerParagraph.innerText = 'Time Remaining: ';

// these state variables store which direction the player 
// should be moving
var isMovingLeft = false;
var isMovingRight = false;
var isMovingUp = false;
var isMovingDown = false;

// this state variable stores whether an item is to be collected or not
var isCollectingItem = false; 

// these state variables store which item the player should be putting down
var isPuttingDownPotion = false;
var isPuttingDownWand = false;
var isPuttingDownBook = false;
var isPuttingDownMoneyBag = false;
var isPuttingDownMedal = false;


// this function will set the image data for all the images
function loadImage() {
    // stores the canvas's image data
    canvasImage.src = 'https://image.freepik.com/free-vector/space-game-background-with-landscape-planet_107791-1700.jpg';

    // stores the player's image data and where the player's position 
    // starts off in the game
    playerImage.src = 'https://gameartpartnersimagehost.s3.amazonaws.com/wp-content/uploads/2016/10/Featured_Image11.png';
    playerWidth = 70;
    playerHeight = 50;
    playerX = 10;
    playerY = 200;
    
    // stores the potion's image data and where the potion's position 
    // starts off in the game
    potionImage.src = 'https://cdn-icons-png.flaticon.com/512/1205/1205664.png';
    potionWidth = 40;
    potionHeight = 40;
    potionX = 590;
    potionY = 330;
    
    // stores the money bag's image data and where the money bag's position 
    // starts off in the game
    moneyBagImage.src = 'https://www.pngmart.com/files/3/Money-Bag-PNG-Clipart.png';
    moneyBagWidth = 23;
    moneyBagHeight = 30;
    moneyBagX = 300;
    moneyBagY = 90;
    
    // stores the wand's image data and where the wand's position 
    // starts off in the game
    wandImage.src = 'https://pngimg.com/uploads/wand/wand_PNG14.png';
    wandWidth = 40;
    wandHeight = 40;
    wandX = 400;
    wandY = 420;
    
    // stores the book's image data and where the book's position 
    // starts off in the game
    bookImage.src = 'https://pngimg.com/uploads/book/book_PNG51053.png';
    bookWidth = 35;
    bookHeight = 30;
    bookX = 630;
    bookY = 50;

    // stores the medal's image data and where the medal's position 
    // starts off in the game
    medalImage.src = 'https://img.freepik.com/free-icon/medal_318-574966.jpg?w=2000';
    medalWidth = 40;
    medalHeight = 37;
    medalX = 10;
    medalY = 455;
    
    // stores the door's image data and where the door's position 
    // is in the game
    doorImage.src = 'https://i.pinimg.com/originals/02/a6/7d/02a67d9b206f1336c3d62e22bab20094.png';
    doorWidth = 40;
    doorHeight = 45;
    doorX = 340;
    doorY = 0;
}


// this function will do the drawing on the canvas
function update() {
    // Check if the player is going to move and which direction it will move 
    // based on which key is pressed
    if ( isMovingRight == true){
        moveRight();
    }
    
    if ( isMovingLeft == true){
        moveLeft();
    }
    
    if (isMovingUp == true){
        moveUp();
    }
    
    if (isMovingDown == true){
        moveDown();
    }
    
    // erase the entire canvas
    graphicsControl.clearRect(0, 0, canvasWidth, canvasHeight);
    // draw the canvas image
    graphicsControl.drawImage(canvasImage, 0, 0, canvasWidth, canvasHeight);
    // draw the player's image
    graphicsControl.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);
    // draw the potion's image
    graphicsControl.drawImage(potionImage, potionX, potionY, potionWidth, potionHeight);
    // draw the money bag's image
    graphicsControl.drawImage(moneyBagImage, moneyBagX, moneyBagY, moneyBagWidth, moneyBagHeight);
    // draw the wand's image
    graphicsControl.drawImage(wandImage, wandX, wandY, wandWidth, wandHeight);
    // draw the book's image
    graphicsControl.drawImage(bookImage, bookX, bookY, bookWidth, bookHeight);
    // draw the medal's image
    graphicsControl.drawImage(medalImage, medalX, medalY, medalWidth, medalHeight);
    // draw the door's image
    graphicsControl.drawImage(doorImage, doorX, doorY, doorWidth, doorHeight);
}

function checkItem(){
    totalWeight = potionItem*potionWeight + wandItem*wandWeight + bookItem*bookWeight + moneyBagItem*moneyBagWeight + medalItem*medalWeight;
    // check for collisions
    // check if player is touching the top left corner of the potion
    if(playerX <= potionX && potionX <= playerX + playerWidth
    && playerY <= potionY && potionY <= playerY + playerHeight) {
        // the player is in contact with the item
        // allows the put down function to commence
        isPuttingDownPotion = true;
        //indicates that potion is picked up
        if (totalWeight <= 20){
            potionItem = potionItem + 1;
            // move the item off-screen
            potionX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }        
    // check if player is touching the top right corner of the potion
    else if(playerX <= potionX + potionWidth && potionX + potionWidth 
    <= playerX + playerWidth && playerY <= potionY && potionY
    <= playerY + playerHeight) {
        //the player is in contact with the item

        isPuttingDownPotion = true;
        if (totalWeight <= 20){
            potionItem = potionItem + 1;
            // move the item off-screen
            potionX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom left corner of the potion
    else if(playerX <= potionX && potionX <= playerX + playerWidth && 
    playerY <= potionY + potionHeight && potionY + potionHeight 
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownPotion = true;
        if (totalWeight <= 20){
            potionItem = potionItem + 1;
            // move the item off-screen
            potionX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom right corner of the potion
    else if(playerX <= potionX + potionWidth && potionX + potionWidth 
    <= playerX + playerWidth && playerY <= potionY + potionHeight 
    && potionY + potionHeight <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownPotion = true;
        if (totalWeight <= 20){
            potionItem = potionItem + 1;
            // move the item off-screen
            potionX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the top left corner of the wand 
    else if( playerX <= wandX && wandX <= playerX + playerWidth
    && playerY <= wandY && wandY <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownWand = true;
        if (totalWeight <= 20){
            wandItem = wandItem + 1;
            // move the item off-screen
            wandX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }     
    // check if player is touching the top right corner of the wand
    else if(playerX <= wandX + wandWidth && wandX + wandWidth 
    <= playerX + playerWidth && playerY <= wandY && wandY
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownWand = true;
        if (totalWeight <= 20){
            wandItem = wandItem + 1;
            // move the item off-screen
            wandX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom left corner of the wand
    else if(playerX <= wandX && wandX <= playerX + playerWidth && 
    playerY <= wandY + wandHeight && wandY + wandHeight 
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownWand = true;
        if (totalWeight <= 20){
            wandItem = wandItem + 1;
            // move the item off-screen
            wandX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom right corner of the wand
    else if(playerX <= wandX + wandWidth && wandX + wandWidth 
    <= playerX + playerWidth && playerY <= wandY + wandHeight 
    && wandY + wandHeight <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownWand = true;
        if (totalWeight <= 20){
            // move the item off-screen
            wandX = -1000;
            wandItem = wandItem + 1;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }  
    // check if player is touching the top left corner of the book
    else if( playerX <= bookX && bookX <= playerX + playerWidth
    && playerY <= bookY && bookY <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownBook = true;
        if (totalWeight <= 20){
            // move the item off-screen
            bookX = -1000;
            bookItem = bookItem + 1;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }        
    // check if player is touching the top right corner of the book
    else if(playerX <= bookX + bookWidth && bookX + bookWidth 
    <= playerX + playerWidth && playerY <= bookY && bookY
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownBook = true;
        if (totalWeight <= 20){
            // move the item off-screen
            bookX = -1000;
            bookItem = bookItem + 1;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom left corner of the book
    else if(playerX <= bookX && bookX <= playerX + playerWidth && 
    playerY <= bookY + bookHeight && bookY + bookHeight 
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownBook = true;
        if (totalWeight <= 20){
            // move the item off-screen
            bookX = -1000;
            bookItem = bookItem + 1;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom right corner of the book
    else if(playerX <= bookX + bookWidth && bookX + bookWidth 
    <= playerX + playerWidth && playerY <= bookY + bookHeight 
    && bookY + bookHeight <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownBook = true;
        if (totalWeight <= 20){
            bookItem = bookItem + 1;
            // move the item off-screen
            bookX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }        
    // check if player is touching the top left corner of the money bag   
    else if( playerX <= moneyBagX && moneyBagX <= playerX + playerWidth
    && playerY <= moneyBagY && moneyBagY <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMoneyBag = true;
        if (totalWeight <= 20){
            moneyBagItem = moneyBagItem + 1;
            // move the item off-screen
            moneyBagX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }        
    // check if player is touching the top right corner of the money bag   
    else if(playerX <= moneyBagX + moneyBagWidth && moneyBagX + moneyBagWidth 
    <= playerX + playerWidth && playerY <= moneyBagY && moneyBagY
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMoneyBag = true;
        if (totalWeight <= 20){
            moneyBagItem = moneyBagItem + 1;
            // move the item off-screen
            moneyBagX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom left corner of the money bag   
    else if(playerX <= moneyBagX && moneyBagX <= playerX + playerWidth && 
    playerY <= moneyBagY + moneyBagHeight && moneyBagY + moneyBagHeight 
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMoneyBag = true;
        if (totalWeight <= 20){
            moneyBagItem = moneyBagItem + 1;
            // move the item off-screen
            moneyBagX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom right corner of the money bag   
    else if(playerX <= moneyBagX + moneyBagWidth && moneyBagX + moneyBagWidth 
    <= playerX + playerWidth && playerY <= moneyBagY + moneyBagHeight 
    && moneyBagY + moneyBagHeight <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMoneyBag = true;
        if (totalWeight <= 20){
            moneyBagItem = moneyBagItem + 1;
            // move the item off-screen
            moneyBagX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the top left corner of the medal   
    else if( playerX <= medalX && medalX <= playerX + playerWidth
    && playerY <= medalY && medalY <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMedal = true;
        if (totalWeight <= 20){
            medalItem = medalItem + 1;
            // move the item off-screen
            medalX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    } 
    // check if player is touching the top right corner of the medal
    else if(playerX <= medalX + medalWidth && medalX + medalWidth 
    <= playerX + playerWidth && playerY <= medalY && medalY
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMedal = true;
        if (totalWeight <= 20){
            medalItem = medalItem + 1;
            // move the item off-screen
            medalX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom left corner of the medal
    else if(playerX <= medalX && medalX <= playerX + playerWidth && 
    playerY <= medalY + medalHeight && medalY + medalHeight 
    <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMedal = true;
        if (totalWeight <= 20){
            medalItem = medalItem + 1;
            // move the item off-screen
            medalX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    // check if player is touching the bottom right corner of the medal
    else if(playerX <= medalX + medalWidth && medalX + medalWidth 
    <= playerX + playerWidth && playerY <= medalY + medalHeight 
    && medalY + medalHeight <= playerY + playerHeight) {
        //the player is in contact with the item
        isPuttingDownMedal = true;
        if (totalWeight <= 20){
            medalItem = medalItem + 1;
            // move the item off-screen
            medalX = -1000;
        }

        else{
            alert('Item Too Heavy!')
        }
        calculateTotals();
    }
    else{
        alert('There is no item!')
    }
}

function checkDoor(){
    if( playerX <= doorX && doorX <= playerX + playerWidth
    && playerY <= doorY && doorY <= playerY + playerHeight) {
        // the player is in contact with the item
        // move the item off-screen
        endGame();
    }        
    // check if player is touching the top right corner of the potion
    else if(playerX <= doorX + doorWidth && doorX + doorWidth 
    <= playerX + playerWidth && playerY <= doorY && doorY
    <= playerY + playerHeight) {
        //the player is in contact with the item
        // move the item off-screen
        endGame();
    }
    // check if player is touching the bottom left corner of the potion
    else if(playerX <= doorX && doorX <= playerX + playerWidth && 
    playerY <= doorY + doorHeight && doorY + doorHeight 
    <= playerY + playerHeight) {
        //the player is in contact with the item
        // move the item off-screen
       endGame();
    }
    // check if player is touching the bottom right corner of the potion
    else if(playerX <= doorX + doorWidth && doorX + doorWidth 
    <= playerX + playerWidth && playerY <= doorY + doorHeight 
    && doorY + doorHeight <= playerY + playerHeight) {
        //the player is in contact with the item
        // move the item off-screen
        endGame();
    }
}

function collectItem(){
    if(totalWeight <= 20 && isCollectingItem == true){
        checkItem();
    }
    else{
        isCollectingItem = false;
        alert('There is no item to collect!')
    }
}

function calculateTotals(){
    totalWeight = potionItem*potionWeight + wandItem*wandWeight + bookItem*bookWeight + moneyBagItem*moneyBagWeight + medalItem*medalWeight;
    totalValue = potionItem*potionPrice + wandItem*wandPrice + bookItem*bookPrice + moneyBagItem*moneyBagPrice + medalItem*medalPrice;
    if (totalWeight <= 20){
        weightParagraph.innerText = 'Total Weight: ' + totalWeight;
        valueParagraph.innerText = 'Total Value: ' + totalValue;
    } else{
        alert('You cannot pick up this item. You have reached max weight!')
    }
}

// puts down the potion if already picked up
function putDownPotion(){
    // if the potion is picked up and the key #1 or put down potion is pressed 
    if(potionItem > 0 && isPuttingDownPotion == true){
        // move the potion to player x and y coordinates
        potionX = playerX;
        potionY = playerY;
        // subtract the potion weight and value from the totals
        totalWeight = totalWeight - potionWeight;
        isPuttingDownPotion = false;
        totalValue = totalValue - potionPrice;
        // indicates the potion is no longer picked up
        potionItem = potionItem - 1; 
        // allows for the calculate totals function to commence again
        calculateTotals();
    }
    //gives alert if no potion is picked up and #1 key or put down potion button is pressed
    else {
        alert('You do not have the potion!')
    }
}

// puts down the wand if already picked up
function putDownWand(){
    // if the wand is picked up and the key #2 or put down wand is pressed
    if(wandItem > 0 && isPuttingDownWand == true){
        // move the wand to player x and y coordinates
        wandX = playerX;
        wandY = playerY;
        // subtract the wand weight and value from the totals
        totalWeight = totalWeight - wandWeight;
        isPuttingDownWand = false;
        totalValue = totalValue - wandPrice; 
        // indicates the wand is no longer picked up
        wandItem = wandItem - 1; 
        // allows for the calculate totals function to commence again
        calculateTotals();
    }
    //gives alert if no wand is picked up and #2 key or put down wand is pressed
    else {
        alert('You do not have the wand!')
    }
}

// puts down the book if already picked up
function putDownBook(){
    // if the book is picked up and the key #3 or put down book is pressed
    if(bookItem > 0 && isPuttingDownBook == true){
        // move the book to player x and y coordinates
        bookX = playerX;
        bookY = playerY;
        // subtract the book weight and value from the totals
        totalWeight = totalWeight - bookWeight;
        isPuttingDownBook = false;
        totalValue = totalValue - bookPrice;  
        // indicates the book is no longer picked up
        bookItem = bookItem - 1; 
        // allows for the calculate totals function to commence again
        calculateTotals();
    }
    //gives alert if no book is picked up and #3 key or put down book is pressed 
    else {
        alert('You do not have the book!')
    }
}

// puts down the money bag if already picked up
function putDownMoneyBag(){
    // if the money bag is picked up and the key #4 or put down money bag is pressed
    if(moneyBagItem > 0 && isPuttingDownMoneyBag == true){
        // move the money bag to player x and y coordinates
        moneyBagX = playerX;
        moneyBagY = playerY;
        // subtract the money bag weight and value from the totals
        totalWeight = totalWeight - moneyBagWeight;
        isPuttingDownMoneyBag = false;
        totalValue = totalValue - moneyBagPrice;
        // indicates the money bag is no longer picked up
        moneyBagItem = moneyBagItem - 1; 
        // allows for the calculate totals function to commence again
        calculateTotals();
    }
    //gives alert if no money bag is picked up and #4 key or put down money bag is pressed
    else {
        alert('You do not have the money bag!')
    }
}

// puts down the medal if already picked up
function putDownMedal(){
    // if the medal is picked up and the key #5 or put down medal is pressed
    if(medalItem > 0 && isPuttingDownMedal == true){
        // move the medal to player x and y coordinates
        medalX = playerX;
        medalY = playerY;
        // subtract the medal weight and value from the totals
        totalWeight = totalWeight - medalWeight;
        isPuttingDownMedal = false;
        totalValue = totalValue - medalPrice; 
        // indicates the medal is no longer picked up
        medalItem = medalItem - 1; 
        // allows for the calculate totals function to commence again
        calculateTotals();
    }
    //gives alert if no medal is picked up and #5 key or put down medal is pressed
    else {
        alert('You do not have the medal!')
    }
}

// this function is used to end the game
function endGame(){
    // the player moves to x coordinate of -1000 and an alert occurs
    // to let the user know they have escaped the game
    playerX = -1000
    alert('You have successfully escaped!')
    clearInterval(timer);
}

// moves the player right in the canvas
function moveRight() {
    // increases the player's x value by 5 to move it right
    playerX = playerX + 5;

    // check for the boundary for the right side of the screen
    if (playerX + playerWidth > canvasWidth) {
        // if the player is past the right screen boundary, we will move the player BACKWARDS to sit on the
        // screen boundary
        playerX = canvasWidth - playerWidth;
    }
}

// moves the player left in the canvas
function moveLeft() {
    // decreases the player's x value by 5 to move it left
    playerX = playerX - 5;

    // stop the player from moving past the left boundary 
    // The left boundary of the screen has an x value of 0
    if (playerX < 0) {
        playerX = 0;
    }
}

// moves the player up in the canvas
function moveUp() {
    // decreases the player's x value by 5 to move it left
    playerY = playerY - 5;

    // stop the player from moving past the top boundary 
    // The top boundary of the screen has a y value of 0
    if (playerY < 0) {
        playerY = 0;
    }
}

// moves the player down in the canvas
function moveDown() {
    // increases the player's y value by 5 to move it down
    playerY = playerY + 5;

    // stop the player from moving past the top boundary 
    // The top boundary of the screen has a y value of 0
    if (playerY + playerHeight > canvasHeight) {
        playerY = canvasHeight - playerHeight;
    }
}

// this function runs whenever the user presses any key
// on the keyboard
function keydownAction(e){
    // check if the user presses the up arrow on the keyboard
    // this will move the character up
    if ( e.keyCode == 87 ){
        isMovingUp = true;
    }
    
    // check if the user presses the left arrow on the keyboard
    // this will move the character left
    if ( e.keyCode == 65 ){
        isMovingLeft = true;
    }
    
    // check if the user presses the down arrow on the keyboard
    // this will move the character down
    if ( e.keyCode == 83 ){
        isMovingDown = true;
    }
    
    // check if the user presses the right arrow on the keyboard
    // this will move the character right
    if ( e.keyCode == 68 ){
        isMovingRight = true;
    }
    // check if the user presses the space bar on the keyboard
    // this will allow for the character to collect an item if 
    // one is there
    if ( e.keyCode == 32){
        collectItem();
        isCollectingItem = true;
    }
    // check if the user presses the #1 key on the keyboard
    // to put down the potion if the user has already collected it
    if (e.keyCode == 49){
        putDownPotion();
    }
    // check if the user presses the #2 key on the keyboard
    // to put down the wand if the user has already collected it
    if (e.keyCode == 50){
        putDownWand();
    }
    // check if the user presses the #3 key on the keyboard
    // to put down the book if the user has already collected it
    if (e.keyCode == 51){
        putDownBook();
    }
    // check if the user presses the #4 key on the keyboard
    // to put down the money bag if the user has already collected it
    if (e.keyCode == 52){
        putDownMoneyBag();
    }
    // check if the user presses the #5 key on the keyboard
    // to put down the medal if the user has already collected it
    if (e.keyCode == 53){
        putDownMedal();
    }
    // check if the user presses the backspace key on the keyboard
    // to exit the game
    if(e.keyCode == 8){
        checkDoor();
    }
}


// this function runs whenever the user lets go of a key on the keyboard
function keyupAction(eventCode){
    // check if an arrow key was let go, and turn off the corresponding
    // movement direction
    // turn off up
    if ( eventCode.keyCode == 87){
        isMovingUp = false;
    }
    // turn off left
    if (eventCode.keyCode == 65){
        isMovingLeft = false;
    }
    // turn off right
    if (eventCode.keyCode == 68){
        isMovingRight = false;
    }
    // turn off down movement
    if (eventCode.keyCode == 83){
        isMovingDown = false;
    }
    // check if the space bar was let go, and turn off the action
    // to collect an item
    if (eventCode.keyCode == 32){
        isCollectingItem = false;
    }
}

// counts down once per second -- this function is called
// automatically by a setInterval function
function countdownTimer(){
    // only countdown when it's above 0    
    if (countDown >= 1)
    {
        // count down by 1
        countDown = countDown - 1;
        // print the current time in the paragraph 'game time'
        document.getElementById('game time').innerText = countDown;
    }
    // when the countdown reaches 0, clear the interval to stop the timer loop
    // the 'timer' variable is created below to store the timer loop from the setInterval function
    if (countDown == 0){
        clearInterval(timer);
        // move the player off canvas if time is up
        playerX = -1000
        alert('You have run out of time!')
    }
}


loadImage();

// creates the timer loop to create the countdown timer since it counts down once per second, use an interval of
// 1000 milliseconds
var timer = setInterval(countdownTimer, 1000);
// This timer loop will control the character's movement. 
// create a timer loop that repeats every 25 milliseconds (1000/25 = 40fps)
// it calls update to check movement and redraw graphics at 40fps
var frameRateTimer = setInterval(update, 25);
