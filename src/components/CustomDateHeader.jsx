
import React from "react";
import moment from "moment";


const CustomDateHeader = ({ label, date }) => {
  const isToday = moment(date).isSame(new Date(), 'day');

  return (
    <div
      className={`flex flex-col items-center justify-center py-1 ${
        isToday ? 'bg-blue-100 rounded-md' : ''
      }`}
    >
      <div className="text-sm font-medium text-gray-500">
        {moment(date).format("ddd")} {/* Mon, Tue... */}
      </div>
      <div className="text-lg font-bold text-gray-800">
        {moment(date).format("D")} {/* 24, 25... */}
      </div>
    </div>
  );
};

export default CustomDateHeader;
