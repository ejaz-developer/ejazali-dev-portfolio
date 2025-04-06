import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// EmailJS configuration
// Environment variables:
// - VITE_PUBLIC_EMAILJS_SERVICE_ID: service_sk29hlj
// - VITE_PUBLIC_EMAILJS_TEMPLATE_ID: template_vyzeauc
// - VITE_PUBLIC_EMAILJS_PUBLIC_KEY: Your EmailJS public key
//
// Make sure your EmailJS template has the following variables:
// - user_name: The sender's name
// - user_email: The sender's email
// - subject: The email subject
// - message: The email message

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      return;
    }

    try {
      // Use the environment variables for service ID and template ID
      const result = await emailjs.sendForm(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || "service_sk29hlj",
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID || "template_vyzeauc",
        formRef.current,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY // Public key from environment variables
      );

      console.log("Email sent successfully:", result.text);
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form
      formRef.current.reset();

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email send error:", error); // Helpful for debugging
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container">
        <motion.h2
          className="section-title neon-text neon-purple"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              Feel free to reach out to me for any questions, collaboration
              opportunities, or just to say hello. I'll get back to you as soon
              as possible.
            </p>
            <div className="space-y-6">
              <ContactInfo
                icon={<FaEnvelope />}
                title="Email"
                content="devpro.ejazali34@gmail.com"
                href="mailto:devpro.ejazali34@gmail.com"
              />
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Location"
                content="Skardu, Pakistan"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  <p className="font-medium">Message Sent Successfully!</p>
                  <p>
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                  <p className="font-medium">Message Could Not Be Sent</p>
                  <p>
                    There was an error sending your message. Please try again or
                    contact me directly at devpro.ejazali34@gmail.com
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => (
  <div className="flex items-start">
    <div className="text-blue-600 text-xl mt-1 mr-4">{icon}</div>
    <div>
      <h4 className="font-bold">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
