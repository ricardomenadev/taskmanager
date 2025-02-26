"use client";

import { useState } from "react";

export default function TaskList() {
  const [expandedTask, setExpandedTask] = useState(null);

  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
      <p className="text-gray-500"></p>
    </div>
  );
}
