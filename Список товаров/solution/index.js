/**
 * Сюда необходимо вставить разметку, которая будет находиться внутри тега <body>
 * ВАЖНО! тег <body> вставлять не надо, только то, что будет внутри (включая стили)
 */
const htmlFragment = `
  <style>
    .goods {
      width: 607px;
      height: 291px;
      padding: 16px;
      display: flex;
      gap: 16px;
      flex-direction: column;
      box-sizing: border-box;
    }

    .goods__header {
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      margin: 0;
    }

    .goods__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex-grow: 1;
    }

    .cards__card {
      background-color: rgba(248, 248, 248, 1);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-radius: 24px;
    }

    .card__cover {
      all: unset;
      display: block;
      width: 100%;
      height: auto;
      flex-grow: 1;
      border-radius: 16px;
      background-color: rgba(196, 196, 196, 1);
      position: relative;
    }

    .card__cover[alt]:before {
      display: none;
      content: "";
    }

    .card__cover[alt]:after {
      display: block;
      background-color: inherit;
      content: "";
    }

    .card__button {
      flex-basis: 35px;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      line-height: 15px;
      display: grid;
      place-content: center;
      font-family: inherit;
      color: rgba(0, 0, 0, 1);
      background-color: rgba(255, 255, 255, 1);
    }
  </style>
  <section class="goods">
    <h2 class="goods__header">Список товаров</h2>
    <div class="goods__cards">
      <article class="cards__card">
        <img class="card__cover" alt="card cover">
        <button class="card__button">Купить</button>
      </article>
      <article class="cards__card">
        <img class="card__cover" alt="card cover">
        <button class="card__button">Купить</button>
      </article>
      <article class="cards__card">
        <img class="card__cover" alt="card cover">
        <button class="card__button">Купить</button>
      </article>
    </div>
  </section>
`;

module.exports = function () {
    return htmlFragment;
};
