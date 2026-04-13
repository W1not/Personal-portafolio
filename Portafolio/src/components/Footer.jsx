import { motion } from "motion/react"

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/raul-rodriguez-22010430b/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    invert: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/W1not",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    invert: true,
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-[#0a3a5a] bg-[#050f1a] px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo */}
        <span className="font-mono text-sm font-medium text-[#e8f4fa] tracking-widest">
          W1N0<span className="text-[#22AED1]">T</span>
        </span>

        {/* Copyright */}
        <p className="text-[11px] font-mono text-[#3a6a8a] tracking-wide">
          © {currentYear} W1n0t. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ name, href, icon, invert }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex items-center justify-center w-8 h-8 rounded-md
                         border border-[#0a3a5a] hover:border-[#016FB9]
                         hover:bg-[#084569]/35 transition-all duration-150"
              whileHover={{ y: -2, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.92 }}
            >
              <img
                src={icon}
                alt={name}
                className={`w-4 h-4 object-contain ${invert ? "invert" : ""}`}
              />
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer