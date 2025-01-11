import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";

// language
import cppIcon from "@/assets/icons/c-plusplus.svg";
import cIcon from "@/assets/icons/c.svg";
import csharpIcon from "@/assets/icons/c-sharp.svg";
import pythonIcon from "@/assets/icons/python.svg";
import swiftIcon from "@/assets/icons/swift.svg";
import kotlinIcon from "@/assets/icons/kotlin-icon.svg";
import luaIcon from "@/assets/icons/lua.svg";
import rLangIcon from "@/assets/icons/r-lang.svg";
import typescriptIcon from "@/assets/icons/typescript-icon.svg";
import html5Icon from "@/assets/icons/html-5.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import javaIcon from "@/assets/icons/java.svg";
import lispIcon from "@/assets/icons/lisp.svg";

// Backend
import sqliteIcon from "@/assets/icons/sqlite.svg";
import mysqlIcon from "@/assets/icons/mysql-icon.svg";
import mongodbIcon from "@/assets/icons/mongodb.svg";
import nodejsIcon from "@/assets/icons/nodejs-icon.svg";
import expressIcon from "@/assets/icons/express.svg";

// Frontend
import reactIcon from "@/assets/icons/react.svg";
import nextjsIcon from "@/assets/icons/nextjs-icon.svg";
import vueIcon from "@/assets/icons/vue.svg";
import angularIcon from "@/assets/icons/angular-icon.svg";
import threejsIcon from "@/assets/icons/threejs.svg";

// DevOps
import awsIcon from "@/assets/icons/aws.svg";
import googleCloudIcon from "@/assets/icons/google-cloud.svg";
import microsoftAzureIcon from "@/assets/icons/microsoft-azure.svg";
import vercelIcon from "@/assets/icons/vercel-icon.svg";
import gitIcon from "@/assets/icons/git-icon.svg";

// Frameworks & Libraries
import tensorflowIcon from "@/assets/icons/tensorflow.svg";
import numpyIcon from "@/assets/icons/numpy.svg";
import pandasIcon from "@/assets/icons/pandas.svg";
import opencvIcon from "@/assets/icons/opencv.svg";
import xamarinIcon from "@/assets/icons/xamarin.svg";
import dotnetIcon from "@/assets/icons/dotnet.svg";



export default function skills() {
  const data = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: cppIcon },
        { name: "C", icon: cIcon },
        { name: "C#", icon: csharpIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Java", icon: javaIcon },
        { name: "Swift", icon: swiftIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "R", icon: rLangIcon },
        { name: "Kotlin", icon: kotlinIcon },
        { name: "Lua", icon: luaIcon },
        { name: "Lisp", icon: lispIcon,},       
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: nodejsIcon },
        { name: "Express", icon: expressIcon },
        { name: "MongoDB", icon: mongodbIcon },
        { name: "SQLite", icon: sqliteIcon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: reactIcon },
        { name: "Angular", icon: angularIcon },
        { name: "Vue.js", icon: vueIcon },
        { name: "Next.js", icon: nextjsIcon },
        { name: "Three.js", icon: threejsIcon },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Git", icon: gitIcon },        
        { name: "Google Cloud", icon: googleCloudIcon },
        { name: "AWS", icon: awsIcon },
        { name: "Microsoft Azure", icon: microsoftAzureIcon },
        { name: "Vercel", icon: vercelIcon },
      ],
    },
    
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: ".NET", icon: dotnetIcon },
        { name: "Xamarin", icon: xamarinIcon },
        { name: "TensorFlow", icon: tensorflowIcon },
        { name: "OpenCV", icon: opencvIcon },
        { name: "NumPy", icon: numpyIcon },
        { name: "Pandas", icon: pandasIcon },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
