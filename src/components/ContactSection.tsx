import { IconLoader2, IconMail, IconMailFast } from "@tabler/icons-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { constantVariables } from "~/utils/constantVariables";
import HomeSection from "./HomeSection";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      setSuccessMessage("");
      setIsLoading(true);
      const data = new FormData(e.currentTarget);
      const body: Record<string, string> = {};
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      data.forEach((value, key) => (body[key] = value.toString()));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      try {
        const tmp = (await res.json()) as { message: string };
        if (res.ok) {
          setSuccessMessage(tmp.message);
        } else {
          setError(tmp.message);
        }
      } catch (error) {
        setError("Got an error.");
      }
    } catch (error) {
      console.error(error);
      setError("Got an error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HomeSection title="📬 Contact" id="contact">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void handleSend(e);
        }}
      >
        <div className="flex w-full flex-col gap-3">
          {error && (
            <div className="flex w-full gap-3">
              <div className="flex-1 rounded-lg bg-destructive bg-opacity-50 p-2 px-4 py-4 text-white">
                {error}
              </div>
              <Link
                href={`mailto:${constantVariables.emailAddress}`}
                className=" flex flex-col items-center justify-center rounded-lg border-2 border-pink-600 px-2 py-1"
              >
                Use Mail Instead?
                <IconMail className="h-8 w-8" />
              </Link>
            </div>
          )}
          {successMessage && (
            <div className="w-full rounded-lg bg-green-600 bg-opacity-50 p-2 px-4 py-4 text-white">
              {successMessage}
            </div>
          )}
          <input
            name="name"
            id="name"
            className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            placeholder="Name *"
            maxLength={50}
            required
            disabled={isLoading}
          />
          <input
            name="email"
            type="email"
            id="email"
            className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            placeholder="Email *"
            maxLength={60}
            required
            disabled={isLoading}
          />
          <textarea
            className="w-full rounded-lg bg-black bg-opacity-50 p-2 px-4 py-4 text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            placeholder="Message *"
            name="message"
            rows={5}
            minLength={3}
            maxLength={3000}
            required
            disabled={isLoading}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-black bg-opacity-50 p-2 px-4 py-3 text-lg font-semibold text-white hover:bg-opacity-70 focus:outline-none disabled:pointer-events-none"
          >
            {isLoading ? (
              <IconLoader2 className="h-6 w-6 animate-spin" />
            ) : (
              <>
                <IconMailFast className="h-8 w-8" />
                Send
              </>
            )}
          </button>
        </div>
      </form>
    </HomeSection>
  );
};

export default ContactSection;
