export default async function generateCards() {
  try {
    const response = await fetch("/cards.json"); // Fetch the JSON file
    const allCards = await response.json(); // Convert response to JSON

    // Get unique words by filtering only the "word" type first
    const wordCards = allCards.filter(card => card.type === "word");

    // Shuffle the word cards and pick 8 unique words
    const selectedWords = wordCards.sort(() => Math.random() - 0.5).slice(0, 8);

    let cards = [];

    selectedWords.forEach((wordCard) => {
      // Find the matching sign card
      const signCard = allCards.find(card => card.name === wordCard.name && card.type === "sign");

      // Ensure we found a matching sign card
      if (signCard) {
        cards.push(
          { ...wordCard, id: `${wordCard.id}-word` }, // Word card
          { ...signCard, id: `${signCard.id}-sign` }  // Sign card
        );
      }
    });

    return cards.sort(() => Math.random() - 0.5); // Shuffle before returning
  } catch (error) {
    console.error("Error fetching card data:", error);
    return [];
  }
}


  