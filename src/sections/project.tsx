import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import CoolPortraitCard from "@/components/cool-portrait-card";



export default function Projects() {
  const projectData = [
    {
      name: "Wave Switch",
      description:
        "SBC project to control Hue lights by hand gestures using OpenCV",
      link: "https://github.com/DroitXenon/wave-switch",
      photo: "/project/wave-switch.png", // Replace with your image file
    },
    {
      name: "Cyber Geolocation Analysis (CYGA)",
      description:
        "The Cyber Geolocation Analysis tool designed to show real-time data and insights.",
      link: "https://github.com/DroitXenon/CYGA",
      photo: "/project/cyga.png", // Replace with your image file
    },
    {
      name: "Shadowmaze",
      description:
        "A simplified rogue-like game where players explore a dungeon, battle enemies, collect treasure, and progress through five floors.",
      link: "https://github.com/DroitXenon/Shadowmaze",
      photo: "/project/shadowmaze.jpeg", // Replace with your image file
    },
  ];

  return (
    <section id="projects" className="py-20 flex w-full flex-col items-center text-center">
      <MotionDiv>
        <h2 className="mb-3 w-full text-center md:mb-16">My Projects</h2>
      </MotionDiv>
      <div className="flex flex-col w-full max-w-3xl px-4 gap-2">
        {projectData.map((project, index) => (
          <MotionDiv key={index} className="border-b pb-4">
            <div className="flex flex-col lg:flex-row items-center text-left">
              <CoolPortraitCard>
              <img
                src={project.photo}
                alt={project.name}
                className="w-[300px] min-w-[300px] rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </CoolPortraitCard>
            <div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            </div>
          </MotionDiv>
        ))}
      </div>
      <div className="mt-4">
        <a
          href="https://github.com/DroitXenon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          More on GitHub
        </a>
      </div>
    </section>
  );
}
