const words = ["сонце", "дерево", "хмара", "птах", "дощ", "квітка", "вітер", "море", "гора", "зірка", "місяць", "річка", "пісок", "трава", "бджола", "риба", "сніг", "сніжинка", "ліс", "скала"];

export function getRandomWord() {
    let rndIndex = Math.floor(Math.random() * (words.length-1)); 
    return words[rndIndex];
}
  