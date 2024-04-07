import styles from "./Pricing.module.scss";

export const Subscription = ({ day, freeze, price }) => {
  return (
    <div className={styles.subscription}>
      <div></div>
      <h3>{day} дней</h3>
      <p>{freeze} дней заморозки</p>
      <p>{price} ₸</p>
      <button></button>
    </div>
  );
};
