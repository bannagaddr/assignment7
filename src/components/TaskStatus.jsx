import React from "react";

const TaskStatus = ({ inProgress, resolved, onComplete }) => {
  return (
    <section className="md:w-1/3 bg-[#F5F5F5] text-black">
      <h3 className="text-xl font-bold mb-4">Task Status</h3>

      <div className="mb-4">
        {inProgress.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Select a ticket to add to Task Status
          </p>
        ) : (
          inProgress.map((task) => (
            <div key={task.id} className="card bg-[#ffffff] shadow p-3 mb-2">
              <div className="card-body p-2">
                <h5 className="text-black font-medium">{task.title}</h5>
                <button
                  onClick={() => onComplete(task.id)}
                  className="btn btn-success text-white btn-sm mt-2"
                >
                  Complete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="rounded-md shadow bg-white p-4">
        <h4 className="font-semibold mb-2">Resolved Task</h4>
        {resolved.length === 0 ? (
          <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        ) : (
          resolved.map((r) => (
            <div key={r.id} className="card bg-green-50 shadow p-3 mb-2">
              <div className="card-body p-2">
                <h5 className="font-medium">{r.title}</h5>
                <p className="text-green-500">
                  <i class="fa-solid fa-check"></i> Successful
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TaskStatus;
