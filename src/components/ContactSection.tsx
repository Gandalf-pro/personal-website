import { IconMailFast } from "@tabler/icons-react";
import HomeSection from "./HomeSection";

const ContactSection = () => {
  return (
    <HomeSection title="📬 Contact" id="contact">
      <div className="flex w-full flex-col gap-3">
        <input
          name="name"
          id="name"
          className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none"
          placeholder="Name *"
          maxLength={50}
        />
        <input
          name="email"
          type="email"
          id="email"
          className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none"
          placeholder="Email *"
          maxLength={60}
        />
        <textarea
          className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none"
          placeholder="Message *"
          rows={5}
          minLength={3}
          maxLength={5000}
        />
        <button className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-black bg-opacity-50 p-2 px-4 py-3 text-lg font-semibold text-white hover:bg-opacity-70 focus:outline-none">
          <IconMailFast className="h-8 w-8" />
          Send
        </button>
      </div>
    </HomeSection>
  );
};

export default ContactSection;
