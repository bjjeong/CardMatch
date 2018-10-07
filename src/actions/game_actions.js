export const RECEIVE_CARD = 'RECEIVE_CARD';

export const flipCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const generateCards = () => {
    let cards = [];

    for (let i = 0; i < 12; i++) {
      let card = {
        id: i,
        value: Math.floor(i/2),
        up: false,
        matched: false
      };
      cards.push(card);
    }
    return shuffle(cards);
};

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};