const playerHealth = 75;
const hasShield = true;
const hasSword = false;

if (playerHealth < 100) {
    console.log("Player is injured");
}
if (playerHealth <= 50 && hasShield) {
    console.log("Player is critically injured and has a shield");
}
if (playerHealth <= 30 && hasSword) {
    console.log("Player is severely injured and has a sword");
}

switch(choosenPath) {
    case "left":
        console.log("Player chose the left path");
        break;
    case "right":
        console.log("Player chose the right path");
        break;
    case "forward":
        console.log("Player chose the forward path");
        break;
    case "backward":
        console.log("Player chose the backward path");
        break;
    case "top":
        console.log("Player chose the top path");
        break;
    default:
        console.log("Player made no choice");
}