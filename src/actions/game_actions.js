export const RECEIVE_CARD = 'RECEIVE_CARD';

export const flipCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const generateCards = () => {
    let cards = [];

    fetch('https://picsum.photos/list')
      .then(images => {
        images.json().then(res => {
          let imageArr = shuffle(res);

          for (let i = 0; i < 12; i++) {

            let card = {
              id: i,
              value: Math.floor(i / 2),
              photoURL: `https://picsum.photos/400/500?image=${imageArr[Math.floor(i/2)].id}`,
              up: false,
              matched: false
            };
            cards.push(card);
          }
          cards = shuffle(cards);
        });
    });

    return cards;
};

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

