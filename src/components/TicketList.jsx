import React from "react";
import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onSelect }) => {
  return (
    <section className="md:px-5 text-black bg-[#F5F5F5]">
      <h3 className="text-xl font-bold mb-4">Customer Tickets</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} onClick={onSelect} />
        ))}
      </div>
    </section>
  );
};

export default TicketList;
