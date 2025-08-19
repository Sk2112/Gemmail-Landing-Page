import React from "react";
import InstallationVideo from "../assets/videos/InstallationVideo2.mp4";
import Thumbnail from "../assets/images/Download.png";

const steps = [
  {
    id: 1,
    title: "Download the Extension",
    description: [
      "Click the Download Extension (.zip) button above.",
      "Save the ZIP file on your computer.",
      "Extract (unzip) the file to a folder.",
    ],
    icon: "📥",
  },
  {
    id: 2,
    title: "Open Extensions Page",
    description: [
      "Google Chrome → Open chrome://extensions/",
      "Brave Browser → Open brave://extensions/",
      "Microsoft Edge → Open edge://extensions/",
    ],
    icon: "🌐",
  },
  {
    id: 3,
    title: "Enable Developer Mode",
    description: ["In the top-right corner, toggle 'Developer mode' ON."],
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Load the Extension",
    description: [
      "Click 'Load unpacked'.",
      "Select the folder where you extracted the ZIP file and refresh the Page.",
    ],
    icon: "📂",
  },
  {
    id: 5,
    title: "Done!",
    description: [
      "The GemMail extension will now appear in your extensions bar.",
      "Open Gmail → You’ll see the AI Reply button ready to use!",
    ],
    icon: "✅",
  },
];

const Installation = () => {
  return (
    <div id="Installation" className="backdrop-blur-2xl p-6 sm:p-10 rounded-xl bg-white/10 max-w-7xl lg:mx-auto sm:mx-11 ">
      <h2 className="text-center mb-8 text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white  ">
        Installation Guide
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Video Section */}
        <div className="w-full">
          <div className="lg:sticky lg:top-20">
            <video
              src={InstallationVideo}
              controls
              className="border-2 border-white rounded-lg w-full h-auto "
              poster={Thumbnail}
            ></video>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-5 sm:p-6 border-2 rounded-xl shadow-lg bg-white/70  "
            >
              <div className="flex space-x-4 items-center">
                <div className="text-2xl sm:text-3xl">{step.icon}</div>
                <h3 className="font-bold text-base sm:text-lg">
                  Step {step.id}: {step.title}
                </h3>
              </div>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 text-sm sm:text-base">
                {step.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
