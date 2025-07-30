import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane, FaHeart } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
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
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form
      formRef.current.reset();

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-500/10"></div>

      <div className="relative container z-10">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Let's start a conversation and bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slideUp">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <FaHeart className="text-blue-600 dark:text-blue-400" />
                Let's Connect
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md leading-relaxed">
                Feel free to reach out to me for any questions, collaboration
                opportunities, or just to say hello. I'd love to hear from you and
                discuss how we can work together to create something amazing!
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<FaEnvelope className="text-blue-600 dark:text-blue-400" />}
                  title="Email"
                  content={
                    <a
                      href="mailto:devpro.ejazali34@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      devpro.ejazali34@gmail.com
                    </a>
                  }
                />
                <ContactInfo
                  icon={<FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />}
                  title="Location"
                  content={<span className="text-gray-600 dark:text-gray-400">Skardu, Pakistan</span>}
                />
              </div>

              <p className="mt-8 text-blue-600 dark:text-blue-400 font-medium">
                ⚡ Usually responds within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slideUp">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <FaPaperPlane className="text-blue-600 dark:text-blue-400" />
                Send Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Your Name"
                    icon={<FaUser />}
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                  />
                  <FormField
                    label="Your Email"
                    icon={<FaEnvelope />}
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <FormField
                  label="Subject"
                  icon={<FaPaperPlane />}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300">
                    ❌ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl mt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{title}</h4>
      {content}
    </div>
  </div>
);

const FormField = ({
  label,
  icon,
  type,
  name,
  placeholder,
  required,
}: {
  label: string;
  icon: React.ReactNode;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border border-blue-200 dark:border-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
      />
    </div>
  </div>
);

export default Contact;
