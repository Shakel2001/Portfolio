import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast"; // update path as needed
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_sswbcks",
        "template_z4vdhf2",
        formRef.current,
        "jwBn2vSw2zFHsMwvB"
      )
      .then(
        () => {
          toast({
            title: " Message sent!",
            description: "Thank you! I'll get back to you soon.",
          });
          setShowSuccess(true);
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: " Failed to send message",
            description: "Please try again later.",
          });
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Interested in collaborating or have a project in mind? I'm currently
          seeking full-time opportunities and open to discussing how I can
          contribute to your team. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 shadow-sm">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a
                    href="mailto:shakelsk2001@gmail.com"
                    className="text-muted-foreground hover:text-primary text-base"
                  >
                    shakelsk2001@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-13">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 shadow-sm">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a
                    href="tel:+919143117999"
                    className="text-muted-foreground hover:text-primary text-base"
                  >
                    +91 9143117999
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-7">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary/10 shadow-sm">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground text-base">
                    Rajahmundry, AP, India
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-12 text-center">
              <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/shek-shakel-316092222/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition"
                >
                  <Linkedin className="h-6 w-6 md:h-7 md:w-7" />
                </a>
                <a href="#" className="hover:text-primary transition">
                  <Twitter className="h-6 w-6 md:h-7 md:w-7" />
                </a>
                <a href="#" className="hover:text-primary transition">
                  <Instagram className="h-6 w-6 md:h-7 md:w-7" />
                </a>
                <a href="#" className="hover:text-primary transition">
                  <Twitch className="h-6 w-6 md:h-7 md:w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {showSuccess && (
                <p className="text-green-600 font-medium text-center pt-4">
                   Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
