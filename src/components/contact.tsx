"use client";

import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

function ContactInfo({ icon, title, details }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-[10px] p-4 shadow-lg">
      <div className="bg-[#1D4ED8] rounded-full p-3">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#1D4ED8]">{title}</h3>
        <p className="text-gray-600 font-semibold">{details}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-white" />

      <div className="relative container mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[#1D4ED8] font-bold mb-2">Get In Touch</h2>
          <h1 className="text-3xl font-bold md:text-4xl mb-4">
            Contact for any query
          </h1>
          <p className=" max-w-2xl mx-auto ">
            Got questions? We&apos;re here to help! Contact us via email, phone, or our contact form. Fast, friendly support is just a click away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ContactInfo
            icon={<MapPin className="w-6 h-6 text-white" />}
            title="Address"
            details="23 Life Camp, Abuja"  
          />
          <ContactInfo
            icon={<Phone className="w-6 h-6 text-white" />}
            title="Call Us"
            details="+234 813-1299-391"
          />
          <ContactInfo
            icon={<Mail className="w-6 h-6 text-white" />}
            title="Email Us"
            details="Seastrel.ltd@gmail.com"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1D4ED8] rounded-[10px] p-1">
            <div className="bg-white rounded-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6763147419087!2d7.4089!3d9.0989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDUnNTYuMCJOIDfCsDI0JzMyLjAiRQ!5e0!3m2!1sen!2sng!4v1639580000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-[6px] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white border shadow-lg border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-[6px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white shadow-lg border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-[6px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Input
                type="text"
                placeholder="Project"
                className="bg-white shadow-lg border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-[6px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Textarea
                placeholder="Message"
                className="bg-white border shadow-lg border-gray-300 text-gray-900 placeholder:text-gray-500 min-h-[160px] rounded-[6px] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-[#D8D9E1] text-gray-900 hover:text-white hover:bg-[#1D4ED8]/90 font-semibold rounded-[6px]"
              >
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
