import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#F8F6F1] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <ContactInfo />

          {/* Right */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
