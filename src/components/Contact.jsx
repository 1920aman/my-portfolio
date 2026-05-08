// components/Contact.jsx
// import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, contactInfo } from "../data/data";

const Contact = () => {
  

  return (
    <SectionWrapper id="contact"  title={contactInfo.heading}>
      <p className="font-outfit text-gray-400 text-base leading-relaxed max-w-2xl -mt-8 mb-12">
        {contactInfo.subheading}
      </p>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact details */}
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300 group"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-cyan/10 border border-border-subtle group-hover:border-accent-cyan/30 transition-all duration-300">
                <Icon size={16} className="text-accent-cyan" />
              </span>
              <div>
                <p className="font-mono text-xs text-gray-500 mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="font-outfit text-sm text-gray-300 hover:text-accent-cyan transition-colors duration-200"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-outfit text-sm text-gray-300">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Availability */}
          {contactInfo.availableForWork && (
            <div className="p-5 rounded-xl bg-accent-green/5 border border-accent-green/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="font-syne font-bold text-accent-green text-sm">
                  Available for Work
                </span>
              </div>
              <p className="font-outfit text-gray-400 text-sm">
                Open to full-time roles & freelance projects.
              </p>
            </div>
          )}
        </div>

       
      </div>
    </SectionWrapper>
  );
};

export default Contact;
