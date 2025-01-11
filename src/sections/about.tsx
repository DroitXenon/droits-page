import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, my name is Justin Wang. A human.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              I’m a software developer and electronics enthusiast, studying at the University of Waterloo. I’m majoring in Combinatorics and Optimization, Computational Mathematics, and Computer Science—basically, a mix of math and tech that keeps me on my toes.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              Outside of school, I’m all about creating. I enjoy building my own software, tinkering with hardware, and combining the two to make cool projects. There’s just something satisfying about bringing an idea to life, whether it’s coding up a new app or assembling something with my own hands. For me, it’s not just work—it’s something I genuinely enjoy doing.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.7}>
            <p>
              When I’m not immersed in tech, I love exploring new places and capturing moments through photography. Traveling gives me a fresh perspective, and there’s nothing quite like finding the perfect shot in a new environment. Photography also lets me slow down and appreciate the world around me.            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpeg"
              alt="photo"
              className="w-[300px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
