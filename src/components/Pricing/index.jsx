import styles from "./Pricing.module.scss";
import { Subscription } from "./Subscription";

export const Pricing = () => {
  const cards = [
    {
      day: "365",
      freeze: "60",
      price: "219 990",
    },
    {
      day: "90",
      freeze: "30",
      price: "109 990",
    },
    {
      day: "180",
      freeze: "45",
      price: "154 990",
    },
    {
      day: "730",
      freeze: "90",
      price: "349 990",
    },
  ];
  return (
    <div className={styles.pricing}>
      <h1 style={{ color: "white" }}>Выбери свой абонемент</h1>
      {cards.map((card, value) => (
        <Subscription
          key={value}
          day={card.day}
          freeze={card.freeze}
          price={card.price}
        ></Subscription>
      ))}
    </div>
  );
};
