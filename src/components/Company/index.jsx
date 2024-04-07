import styles from "./Company.module.scss";

export const Company = () => {
  return (
    <div className={styles.Company}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Партнерская программа </h1>
          <p>
            Каждый месяц FitGO используют 100 000 человек — это новые клиенты
            для вашего зала или студии
          </p>
          <button>Стань партнером </button>
        </div>
        <div className={styles.image}>
          <img
            src="	https://1fit.app/static/visual-2df67c4b2230228adad561b651b8068e.png"
            width={634}
            height={540}
            alt="sport"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
