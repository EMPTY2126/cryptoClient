import React,{useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignUp from "./SignUp/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import Transaction from "./Dashboard/Transaction";
import { useAuth } from "../context/AuthContext.jsx";
import authenticator from "../utils/Authenticator.js";
import Deposit from "./Deposit/Deposit.jsx";
import PaymentStatus from './Paymentstatus/PaymentStatus.jsx'

function PageHandler() {
  const { isAuth, setIsAuth } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      const flag = authenticator();
      setIsAuth(true);
    };

    checkAuth();
  }, []);

  return (
    <Routes>
      <Route  path="/login" element={isAuth ? <Dashboard /> : <LoginPage /> } />
      <Route  path="/signup" element={isAuth ? <Dashboard /> : <SignUp /> } />
      <Route  path="/" element={isAuth ? <Dashboard /> : <LoginPage/> } />
      <Route  path="/dashboard" element={isAuth ? <Dashboard /> : <LoginPage /> } />
      <Route path="/deposit" element={isAuth ? <Deposit /> : <LoginPage />} />
      <Route path="/paymentstatus/:merchenttransactionId" element={isAuth ? <PaymentStatus /> : <LoginPage />} />
    </Routes>
  );
}

export default PageHandler;
