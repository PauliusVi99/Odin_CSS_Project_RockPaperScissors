function getComputerChoice() {
  const ChoiceNumber = Math.floor(Math.random() * 3);
  const choicesNames = ['Rock', 'Paper', 'Scissors'];
  return choicesNames[ChoiceNumber];
}
console.log(getComputerChoice());
