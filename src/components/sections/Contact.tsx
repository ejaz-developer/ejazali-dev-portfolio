import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
    <section id="contact" className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 animate-gradient-x opacity-70"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50 animation-delay-300"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-40 animation-delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-70 animation-delay-700"></div>
      </div>

      <div className="relative container z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Let's start a conversation and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 shadow-2xl shadow-purple-500/20">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-50"></div>

              <div className="relative">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl font-bold mb-6 text-white flex items-center gap-3"
                >
                  <FaHeart className="text-pink-400 animate-pulse" />
                  Let's Connect
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 mb-8 max-w-md leading-relaxed"
                >
                  Feel free to reach out to me for any questions, collaboration
                  opportunities, or just to say hello. I'd love to hear from you and
                  discuss how we can work together to create something amazing!
                </motion.p>

                <div className="space-y-6">
                  <ContactInfo
                    icon={<FaEnvelope className="text-purple-400" />}
                    title="Email"
                    content="devpro.ejazali34@gmail.com"
                    href="mailto:devpro.ejazali34@gmail.com"
                    delay={0.5}
                  />
                  <ContactInfo
                    icon={<FaMapMarkerAlt className="text-indigo-400" />}
                    title="Location"
                    content="Skardu, Pakistan"
                    delay={0.6}
                  />
                </div>

                {/* Response time */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-8 p-4 bg-gradient-to-r from-purple-700/30 to-indigo-700/30 rounded-xl border border-purple-400/20"
                >
                  <p className="text-purple-200 text-sm">
                    ⚡ Usually responds within 24 hours
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 shadow-2xl shadow-purple-500/20">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-50"></div>

              <div className="relative">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl font-bold mb-6 text-white flex items-center gap-3"
                >
                  <FaPaperPlane className="text-indigo-400 animate-pulse" />
                  Send Message
                </motion.h3>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-400/30 text-green-200 rounded-lg backdrop-blur-sm"
                  >
                    <p className="font-medium flex items-center gap-2">
                      ✅ Message Sent Successfully!
                    </p>
                    <p className="text-sm opacity-90">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-400/30 text-red-200 rounded-lg backdrop-blur-sm"
                  >
                    <p className="font-medium flex items-center gap-2">
                      ❌ Message Could Not Be Sent
                    </p>
                    <p className="text-sm opacity-90">
                      Please try again or contact me directly at devpro.ejazali34@gmail.com
                    </p>
                  </motion.div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                      type="text"
                      id="user_name"
                      name="user_name"
                      label="Your Name"
                      icon={<FaUser />}
                      required
                    />
                    <InputField
                      type="email"
                      id="user_email"
                      name="user_email"
                      label="Your Email"
                      icon={<FaEnvelope />}
                      required
                    />
                  </div>

                  <InputField
                    type="text"
                    id="subject"
                    name="subject"
                    label="Subject"
                    icon={<FaPaperPlane />}
                    required
                  />

                  <div className="relative group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-purple-200 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 resize-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50 backdrop-blur-sm"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-bold rounded-lg transition-all duration-500 hover:from-purple-500 hover:via-purple-400 hover:to-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transform active:scale-95 border border-purple-400/30 hover:border-purple-300/50 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x"></div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
  href,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group flex items-start gap-4 p-4 bg-gradient-to-r from-purple-700/20 to-indigo-700/20 rounded-xl border border-purple-400/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-105"
  >
    <div className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
        {title}
      </h4>
      {href ? (
        <a
          href={href}
          className="text-gray-300 hover:text-purple-300 transition-colors duration-300 break-all"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {content}
        </p>
      )}
    </div>

    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
  </motion.div>
);

const InputField = ({
  type,
  id,
  name,
  label,
  icon,
  required = false,
}: {
  type: string;
  id: string;
  name: string;
  label: string;
  icon: React.ReactNode;
  required?: boolean;
}) => (
  <div className="relative group">
    <label htmlFor={id} className="block text-sm font-medium text-purple-200 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className="w-full pl-10 pr-4 py-3 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300/50 backdrop-blur-sm"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
);

export default Contact;
