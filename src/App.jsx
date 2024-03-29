import { useState } from "react";
import { ALLRoutes } from "./routes/ALLRoutes";
import { Header } from "./components";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <ALLRoutes />
      {/* <Footer/> */}
    </AuthProvider>
  );
}

export default App;
