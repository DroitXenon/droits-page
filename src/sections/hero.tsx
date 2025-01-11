import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import ContactList from "@/components/contact-list";


export default function hero() {
    return (
        <section className="my-8 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
            <MotionText delayOffset={0}>Hi, I'm Justin Wang! 👋</MotionText>
        </h1>
        <div className="overflow-hidden rounded-full p-3 md:p-4">
            <MotionDiv>
            <video
                className="h-[180px] w-[250px] md:h-[200px] md:w-[270px]"
                muted
                autoPlay
                loop
                playsInline
            >
                <source src={"/animoji.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </MotionDiv>
        </div>
        <h1>
            <MotionDiv delayOffset={0.8}>Developer 🧑🏻‍💻</MotionDiv>
        </h1>
        <h1>
            <MotionDiv delayOffset={1}>UWaterloo Student 🧑‍🎓</MotionDiv>
        </h1>
        <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
            <MotionDiv delayOffset={1.2}>
            <p>Welcome to my personal page!</p>
            </MotionDiv>
            <MotionDiv delayOffset={1.4}>
            <p>
                Just a human who loves coding and building cool stuff.
            </p>
            </MotionDiv>
        </div>
        <div className="my-8">
            <ContactList delayOffset={1.45} showWhenInView={false} />
        </div>
        </section>
    );
}
  