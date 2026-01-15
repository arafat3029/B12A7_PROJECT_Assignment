import { Suspense, useState } from "react";
import "./App.css";
import CustomarTikets from "./assets/Comonents/CustomerTickets/CustomarTikets";
import Banner from "./assets/Comonents/Navber/Banner/Banner";
import Navber from "./assets/Comonents/Navber/Navber";
import Footer from "./assets/Comonents/Footer/Footer";
import { ToastContainer,  } from 'react-toastify';

const fetchData = async () => {
  const res = await fetch("/Ticket.json");
  return await res.json();
  

};

function App() {

  const [takenTicket, setTakenTicket] = useState([]);

  const PromiseData = fetchData();


  const removeTicket = (id) => {
    const remainingTickets = takenTicket.filter(ticket => ticket.id !== id);
    setTakenTicket(remainingTickets);
  }
  return (
    <>
      <Navber></Navber>
      <Banner takenTicket={takenTicket}></Banner>
      <div className="bg-[#ffffff]">
        <div className="max-w-7xl mx-auto py-5 px-5 text-3xl font-bold">
          <p>Customer Tickets</p>
        </div>
      </div>
        <CustomarTikets removeTicket={removeTicket} takenTicket={takenTicket} setTakenTicket={setTakenTicket} PromiseData={PromiseData}></CustomarTikets>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
