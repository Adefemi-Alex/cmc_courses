import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-200">
        {/* Sidebar content goes here */}
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        <div>
          <h1>Riga</h1>
        </div>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
