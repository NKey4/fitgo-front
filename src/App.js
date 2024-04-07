import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import "./App.scss";
import {
  Header,
  Main,
  Studios,
  Pricing,
  Login,
  Registration,
  Footer,
  Drawer,
  AddActivity,
  Company,
} from "./components/index";

import "macro-css";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const UserData = useSelector((state) => state.auth.data);
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const [drawerOpened, setDrawerOpened] = React.useState(false);

  return (
    <div className="App">
      <Header onClickCart={() => setDrawerOpened}></Header>

      {drawerOpened && isAuth && (
        <Drawer
          onClose={() => setDrawerOpened()}
          onExit={() => setDrawerOpened()}
          data={UserData}
        ></Drawer>
      )}

      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add-activity" element={<AddActivity />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
