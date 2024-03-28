import { useState } from "react";
import { ALLRoutes } from "./routes/ALLRoutes";
import { Header } from "./components";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ALLRoutes />
      {/* <Footer/> */}
    </Provider>
  );
}

export default App;
