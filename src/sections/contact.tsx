import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="py-5 my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
      id="contact"
    >
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p>
          Feel free to reach out to me at:
        </p>
      </MotionDiv>
      <ContactList />
    </section>
  );
}
