var choice = window.prompt("Heads or Tails (H/T)?");
var coinFlip = Math.floor(Math.random() * 10);
heads = Boolean(coinFlip <= 5);
tails = Boolean(coinFlip > 5);
isHeadChosen = Boolean(choice.toLowerCase() === "h");
isTailsChosen = Boolean(choice.toLowerCase() === "t");

if (heads){
    if (isHeadChosen) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
}

if (tails) {
    if (isTailsChosen) {
        window.alert("The flip was tails and you chose tails...you win!");
    } else {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
}
