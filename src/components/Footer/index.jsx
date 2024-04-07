import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footerContactsCity">
          <div className="footerContacts">
            <p>Контакты</p>
            <p style={{ color: "rgb(52, 71, 246)" }}>+7 (777) 777 77 77</p>
          </div>
          <div className="footerCity">
            <p>Города</p>
            <ul>
              <li>Астана</li>
              <li>Алматы</li>
              <li>Шымкент</li>
              <li>Караганда</li>
            </ul>
          </div>
        </div>
        <div className="footerCompany">
          <p>Компания "fitGO"</p>
          <ul>
            <li>Залы и студии</li>
            <li>Блог</li>
          </ul>
        </div>
        <div className="footerCooperation">
          <p>Сотрудничество</p>
          <ul>
            <li>Корпоративным клиентам</li>
            <li>Стать нашим партнером</li>
          </ul>
        </div>
        <div className="footerOther">
          <p>Разное</p>
          <ul>
            <li>Публичная оферта</li>
            <li>Правила пользования</li>
            <li>Договор присоединения</li>
            <li>Политика хранения</li>
            <li>Политика уничтожения</li>
            <li>Политика по сбору и обработке персональных данных</li>
          </ul>
        </div>
        <div className="footerDownload">
          <img src="pm.png" alt="Play Market" width={188} height={60} />
          <img src="as.png" alt="App Store" width={184} height={55} />
        </div>
      </div>
    </footer>
  );
};
