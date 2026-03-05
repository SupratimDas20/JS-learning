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
hello