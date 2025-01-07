import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import PageHandler from "./pages/PageHandler.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="216161716429-m2tg89l36tm3n1f2b1rbb00rsgva0rnk.apps.googleusercontent.com">
        <AuthProvider>
          <PageHandler />
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
