import React from "react";

const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      className="card bg-white text-black shadow hover:shadow-md cursor-pointer w-full"
      onClick={() => onClick(ticket)}
    >
      <div className="card-body p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h4 className="card-title text-lg font-medium">{ticket.title}</h4>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                ticket.status === "Open"
                  ? "bg-green-100 text-green-700"
                  : ticket.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : ticket.status === "Closed"
                  ? "bg-red-100 text-red-700"
                  : "bg-[#F8F3B9] text-[#FEBB0C]"
              }`}
            >
              <i
                className={`fa-solid fa-circle text-[0.6rem] ${
                  ticket.status === "Open"
                    ? "text-green-500"
                    : ticket.status === "Pending"
                    ? "text-yellow-500"
                    : ticket.status === "Closed"
                    ? "text-red-500"
                    : "text-[#9C7700]"
                }`}
              ></i>
              {ticket.status}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base mb-3 truncate">
          {ticket.description}
        </p>
        <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="flex flex-wrap sm:space-x-2 gap-1">
            <p># {ticket.id}</p>
            <p
              className={`font-semibold ${
                ticket.priority === "High"
                  ? "text-[#F83044]"
                  : ticket.priority === "Medium"
                  ? "text-[#FEBB0C]"
                  : ticket.priority === "Low"
                  ? "text-[#02A53B]"
                  : ""
              }`}
            >
              {ticket.priority}
            </p>
          </div>
          <div className="flex flex-wrap sm:space-x-2 gap-1">
            <p>{ticket.customer}</p>
            <p className="flex items-center">
              <i className="fa-regular fa-calendar mr-1 text-sm sm:text-base"></i>
              {ticket.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
