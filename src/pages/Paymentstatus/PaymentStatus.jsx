import React,{useEffect,useState} from "react";
import LeftPanel from "../Dashboard/components/LeftPanel";
// import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import Status from "./components/Status";

function PaymentStatus() {
  const [loading,setLoading] = useState(true);
  const { merchenttransactionId } = useParams();
  const [transaction,setTransaction] = useState({});

  useEffect(()=>{
    const getStatus = async()=>{
      const res = await axios.get(`http://localhost:5000/payment/status/${merchenttransactionId}`);
      console.log(res.data);
      setTransaction(res.data.transaction);
      setLoading(false)
    }

    getStatus();
  },[]);

  return (
    <div className="flex ">
      <div>
        <LeftPanel />
      </div>
      <div className="relative w-full h-[900px] bg-gradient-to-br from-[#433D8B] to-[#2E236C] object-contain border-[20px] border-[#17153b] ">
      {loading?  <LoadingSpinner/> : <Status success={transaction.success} amount={transaction.data.amount} transactionId={transaction.data.transactionId} />}
      
      </div>
    </div>
  );
}

export default PaymentStatus;
