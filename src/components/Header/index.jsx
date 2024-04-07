import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

import Button from "@mui/material/Button";

import styles from "./Header.module.scss";

export const Header = ({ onClickCart }) => {
  const isAuth = useSelector(selectIsAuth);
  const UserData = useSelector((state) => state.auth.data);
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <ul className={styles.header_ul}>
          <Link to="/">
            <img src="logo.png" alt="fitGO" width={59} height={31}></img>
          </Link>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="/studios">
            <li>Залы и студии</li>
          </Link>
          <Link to="/pricing">
            <li>Цены</li>
          </Link>
          <Link to="/company">
            <li>Компаниям</li>
          </Link>
        </ul>
      </div>
      <div className={styles.headerRight}>
        {isAuth ? (
          <>
            {UserData?.role == "company" && (
              <Link to="/add-activity">
                <h3 className={styles.createActivity}>Создать активность</h3>
              </Link>
            )}

            <img
              src="avatar.png"
              alt={"Вы"}
              width={59}
              height={50}
              onClick={isAuth ? onClickCart(true) : onClickCart(false)}
            ></img>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="contained" sx={{ backgroundColor: "#3447F6" }}>
                Войти
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="outlined"
                sx={{ borderColor: "#3447F6", color: "#3447F6" }}
              >
                Создать аккаунт
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
