import { useState } from "react";
import { ALLRoutes } from "./routes/ALLRoutes";
import { Header } from "./components";
import { AuthProvider, MessageProvider } from "./context";

function App() {
  return (
    <MessageProvider>
      <AuthProvider>
        <Header />
        <ALLRoutes />
        {/* <Footer/> */}
      </AuthProvider>
    </MessageProvider>
  );
}

export default App;
