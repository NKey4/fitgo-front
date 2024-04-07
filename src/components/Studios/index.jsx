import React from "react";
import { Link } from "react-router-dom";
import { fetchStudio } from "../../redux/slices/studio";
import { useDispatch, useSelector } from "react-redux";
import { Studio } from "./Studio";
import styles from "./Studios.module.scss";

export const Studios = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchStudio());
  }, []);
  const items = useSelector((state) => state.studio.items);
  const userData = useSelector((state) => state.auth.data);
  console.log(userData);
  return (
    <div className={styles.studiosWrapper}>
      <div className={styles.studiosHeader}>
        <nav>
          <ul>
            <Link to="/">
              <li style={{ color: "rgb(52, 71, 246)", fontWeight: 600 }}>
                Главная
              </li>
            </Link>

            <li style={{ color: "rgb(52, 71, 246)" }}>/</li>
            <li style={{ fontWeight: 400, fontSize: "14px", color: "#AEB0B8" }}>
              Залы и студии
            </li>
          </ul>
        </nav>
        <h1 style={{ fontSize: "40px", fontWeight: 700 }}>
          Залы и студии в Астане
        </h1>
        <div className={styles.studiosBar}>
          {items.map((item, index) => (
            <Studio
              id={item._id}
              key={index}
              companyName={item.companyName}
              description={item.description}
              address={item.address}
              imageUrl={item.imageUrl}
              isEditable={
                userData && item.user && userData._id === item.user._id
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
