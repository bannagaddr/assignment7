import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleAddToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast.info(`"${ticket.title}" added to In Progress`);
    } else {
      toast.warning("Already in progress!");
    }
  };

  const handleComplete = (id) => {
    const completed = inProgress.find((t) => t.id === id);

    if (completed) {
      setResolved((prev) => [...prev, completed]);
      setInProgress((prev) => prev.filter((t) => t.id !== id));
      setTickets((prev) => prev.filter((t) => t.id !== id));

      toast.success(`"${completed.title}" marked as Resolved!`, {
        icon: "✅",
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar></Navbar>
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      ></Banner>
      <main className="flex flex-col md:flex-row gap-6 p-6 flex-grow bg-[#F5F5F5]">
        <TicketList
          tickets={tickets}
          onSelect={handleAddToProgress}
        ></TicketList>
        <TaskStatus
          inProgress={inProgress}
          resolved={resolved}
          onComplete={handleComplete}
        ></TaskStatus>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
