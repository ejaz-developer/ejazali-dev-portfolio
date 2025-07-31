import { useState } from 'react';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaCheck,
  FaGraduationCap
} from 'react-icons/fa';
import data from '../../data.json';

const DashboardContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { personalInfo } = data;

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'bg-blue-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      color: 'bg-red-600'
    },
    {
      icon: FaGraduationCap,
      label: 'Education',
      value: personalInfo.education,
      href: '#',
      color: 'bg-green-600'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: personalInfo.socialLinks.linkedin,
      color: 'bg-blue-700'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: personalInfo.socialLinks.github,
      color: 'bg-gray-800'
    }
  ];

  const availability = [
    { day: 'Monday', time: '4:00 PM - 8:00 PM', available: true },
    { day: 'Tuesday', time: '4:00 PM - 8:00 PM', available: true },
    { day: 'Wednesday', time: '4:00 PM - 8:00 PM', available: true },
    { day: 'Thursday', time: '4:00 PM - 8:00 PM', available: true },
    { day: 'Friday', time: '4:00 PM - 8:00 PM', available: true },
    { day: 'Saturday', time: '10:00 AM - 6:00 PM', available: true },
    { day: 'Sunday', time: '10:00 AM - 6:00 PM', available: true },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to start a project together? I'd love to hear from you. Send me a message and let's discuss how we can bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">Send me a message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                <FaCheck className="text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-200 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="Project collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
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

        {/* Contact Info & Availability */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{contact.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">My Availability</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Best times to reach me (Pakistan Standard Time)
            </p>
            <div className="space-y-3">
              {availability.map((slot, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      slot.available ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <span className="font-medium text-gray-800 dark:text-white text-sm">{slot.day}</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{slot.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>Note:</strong> I'm currently a 9th-grade student, so I'm most available after school hours and on weekends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
          <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
            Whether you need a website, web application, or just want to discuss an idea, I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-blue-600/25"
            >
              <FaEnvelope />
              Email Me
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors font-semibold"
            >
              <FaGithub />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContact;