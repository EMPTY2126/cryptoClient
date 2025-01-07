import React, { useState } from "react";
import './Deposit.css'
import LeftPanel from "../Dashboard/components/LeftPanel";
import onlineBanking from '../../assets/online.png'
import visa from '../../assets/visa.png'
import upi from '../../assets/upi.png'
import master from '../../assets/master.png'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Deposit() {
    const [amount, setAmount] = useState("");
    const {user} = useAuth();
    const navigate = useNavigate();
    const numberInput = (event) => {
        const value = event.target.value;
      
        if (/^\d*$/.test(value) && !(value.length > 1 && value.startsWith('0'))) {
          setAmount(value);
        }
      };

      const handleBeforeInput = (event) => {
        if (/[^\d]/.test(event.data)) {
          event.preventDefault();
        }
      };

      const depositAmount = async()=>{
        const payload = {user,amount};
        const response  = await axios.post('http://localhost:5000/payment/pay',payload);
        if(response.data.isSuccess) window.location.href = response.data.url;
        else console.log("deposit faild");
      }

      const cancleDeposit = ()=>{
        setAmount("");
        navigate('/');
      }
      
      

  return (
    <div className="flex ">
      <div>
        <LeftPanel />
      </div>
      <div className="relative w-full h-full flex justify-center items-center border-[#17153b]">
        <div className="w-[900px] h-auto  bg-white">
            <div className="w-full h-12 p-2 border border-solid text-3xl">Deposit</div>
            <div className="w-full border border-b ">
                <div className="w-full ml-52">
                    <div className="text-2xl mt-9 mb-2">Amount</div>
                    <div className="relative w-7/12 text-xl mb-14">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">₹</span>
                        <input onChange={numberInput} onBeforeInput={handleBeforeInput} value={amount} type="number" className="pl-8 pr-12 w-full h-14 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500 appearance-none" placeholder="Enter the amount" />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">INR</span>
                    </div>
                </div>
            </div>
            <div className="w-full border border-b">
                <div className="w-full ml-52 mt-9">
                    <div>Accept, Process & Deposit Digital Payments For Your Business.</div>
                    <div className="flex mb-8 mt-2 gap-4" >
                        <img className="border border-solid w-24 h-16 p-4" src={visa} alt="netbanking" />
                        <img className="border border-solid w-24 h-16 p-4" src={master} alt="netbanking" />
                        <img className="border border-solid w-24 h-16 p-4" src={upi} alt="netbanking" />
                        <img className="border border-solid w-24 h-16 p-4" src={onlineBanking} alt="netbanking" />
                    </div>
                </div>
            </div>

            <div className="w-full ml-52 h-24 mt-9">
                <button onClick={depositAmount} className="border w-32 h-12 bg-[#4193f7ef] rounded-lg hover:bg-[#4168f7]">Deposit</button>
                <button onClick={cancleDeposit} className="ml-8 border w-32 h-12 bg-[#9fa2b5] rounded-lg">Cancel</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
