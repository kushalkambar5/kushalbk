import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
  Code2
} from "lucide-react";
import { useLenis } from 'lenis/react';

export default function Footer() {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/kushalkambar5" 
    },
    {
      name: "X",
      icon: ({ size = 20, ...props }: any) => (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          {...props}
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/kushal___5",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/kushal.kambar.5/",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kushalbk/",
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/Kushalk_05",
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#Projects" },
    { label: "Education", href: "#education" },
  ];

  return (
    <footer
      style={{
        padding: "0",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#4ade80",
      }}
    >
      <div
        className="w-full px-6 md:px-16 py-6 md:py-8"
        style={{
          backgroundColor: "#eaff4b", // Vibrant lime yellow as requested
          borderRadius: "40px 40px 0 0",
          color: "#0a0a0a",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {/* Logo Section */}
          <div style={{ width: "220px", flexShrink: 0 }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                letterSpacing: "-0.05em",
                margin: 0,
                color: "#0a0a0a",
                fontFamily: "var(--font-mono)"
              }}
            >
              KB.
            </h2>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "2.5rem",
                color: "#0a0a0a",
                maxWidth: "850px",
                letterSpacing: "-0.02em"
              }}
            >
              Building high-performance systems at the intersection of AI and Web development.
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "3rem",
              }}
            >
              {/* Column 1: Navigation */}
              <div>
                <h4
                  style={{
                    fontWeight: "800",
                    marginBottom: "1.25rem",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Navigation
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        style={{
                          color: "#0a0a0a",
                          textDecoration: "none",
                          fontSize: "1rem",
                          fontWeight: "600",
                          opacity: 0.8,
                          transition: "opacity 0.2s"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0a0a0a",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Column 2: Contact */}
              <div>
                <h4
                  style={{
                    fontWeight: "800",
                    marginBottom: "1.25rem",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Get in touch
                </h4>
                <p
                  style={{
                    margin: "0 0 0.25rem",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                  }}
                >
                  Email me at
                </p>
                <a
                  href="mailto:kushalkambar07@gmail.com"
                  style={{
                    margin: "0 0 1rem",
                    fontSize: "1.1rem",
                    fontWeight: "800",
                    color: "#0a0a0a",
                    textDecoration: "none",
                    display: "block"
                  }}
                >
                  kushalkambar07@gmail.com
                </a>
                <p
                  style={{
                    margin: "0.5rem 0 0.25rem",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                  }}
                >
                  Call or WhatsApp
                </p>
                <p
                  style={{
                    margin: "0 0 1rem",
                    fontSize: "1.1rem",
                    fontWeight: "800",
                  }}
                >
                  +91 9035035884
                </p>
                <motion.a
                  href="https://drive.google.com/file/d/1BwFsC2thamqpx_0g2fP5_7Z2HANNaJoY/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#0a0a0a",
                    textDecoration: "none",
                    marginTop: "1.5rem"
                  }}
                >
                  View Resume <ExternalLink size={16} />
                </motion.a>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "900",
                    margin: "1.5rem 0 0",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    opacity: 0.9
                  }}
                >
                  KUSHAL.
                </h3>
              </div>

              {/* Column 3: Location */}
              <div>
                <h4
                  style={{
                    fontWeight: "800",
                    marginBottom: "1.25rem",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Location
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    backgroundColor: "#fff", 
                    borderRadius: "12px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    overflow: "hidden"
                  }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png" 
                      alt="NITK Logo" 
                      style={{ width: "80%", height: "80%", objectFit: "contain" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      margin: 0,
                      lineHeight: "1.4"
                    }}
                  >
                    NITK Surathkal<br />
                    Mangalore, India
                  </p>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    <span style={{ fontSize: "0.85rem", fontWeight: "700", opacity: 0.7 }}>
                      Available for Internships
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(10, 10, 10, 0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "0.85rem",
            fontWeight: "600",
            color: "#0a0a0a",
            opacity: 0.8
          }}
        >
          <div>
            © {new Date().getFullYear()} Kushal Basavaraj Kambar. All rights reserved.
          </div>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
          </div>
        </div>
      </div>
    </footer>
  );
}

