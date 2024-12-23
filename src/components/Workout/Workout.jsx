// video youtube dan captionnya
// cara bikin menu latihan sendiri pake postingan 6 bulan
import React, { useState } from "react";
import Push from "./SplitWorkout/Push";
import Pull from "./SplitWorkout/Pull";
import LegQuad from "./SplitWorkout/LegQuad";
import LegHamstring from "./SplitWorkout/LegHamstring";
import Arms from "./SplitWorkout/Arms";

export default function Workout() {
  const [activeSection, setActiveSection] = useState("push");

  return (
    <>
      <div className="mt-20">
        {/* Button Section */}
        <div className="flex flex-col 2xl:grid-cols-2 2xl:max-w-screen-2xl md:flex-row gap-4 mb-6 max-w-sm mx-auto md:max-w-screen-md">
          <button
            className={`px-4 py-2 rounded ${
              activeSection === "push"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveSection("push")}
          >
            Push
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeSection === "pull"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveSection("pull")}
          >
            Pull
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeSection === "legQuad"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveSection("legQuad")}
          >
            Leg (Quad Focus)
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeSection === "legHamstring"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveSection("legHamstring")}
          >
            Leg (Hamstring & Glutes Focus)
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeSection === "arms"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveSection("arms")}
          >
            Arms
          </button>
        </div>

        {/* Content Section */}
        <div className="mb-10">
          {activeSection === "push" && <Push />}
          {activeSection === "pull" && <Pull />}
          {activeSection === "legQuad" && <LegQuad />}
          {activeSection === "legHamstring" && <LegHamstring />}
          {activeSection === "arms" && <Arms />}
        </div>
      </div>
    </>
  );
}
