import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const NAV_ITEMS = ["home", "aboutme", "projects", "contact"]
const SECTION_IDS = ["Home", "Aboutme", "Projects", "Contact"]

function Header() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation("header")
  const currentLang = i18n.language.toUpperCase()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }

  const scrollTo = (id) => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#0a3a5a] bg-[#050f1a]/75 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-13 flex items-center justify-between">

        {/* Logo */}
        <span className="font-mono text-base font-medium text-[#e8f4fa] tracking-widest">
          W1N0<span className="text-[#22AED1]">T</span>
        </span>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href={`#${SECTION_IDS[i]}`}
                className="text-[.8rem] font-mono text-[#8ab8cc] px-3 py-1.5 rounded-md border border-transparent
                           hover:text-[#22AED1] hover:border-[#016FB9] hover:bg-[#084569]/35
                           transition-all duration-150 select-none"
              >
                {t(item)}
              </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="hidden md:flex text-[.7rem] font-mono text-[#3a6a8a]
                       border border-[#0a3a5a] rounded-md px-2.5 py-1
                       hover:text-[#22AED1] hover:border-[#016FB9]
                       transition-all duration-150"
            whileTap={{ scale: 0.95 }}
          >
            🌍 {currentLang}
          </motion.button>

          {/* Hamburger */}
          <motion.button
            className="md:hidden text-[#8ab8cc] border border-[#0a3a5a] rounded-md px-2.5 py-1.5 text-sm"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.92 }}
          >
            ☰
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-[#0a3a5a] bg-[#050f1a] px-6 pb-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Drawer top */}
            <div className="flex items-center justify-between py-3 border-b border-[#0a3a5a] mb-3">
              <button
                onClick={toggleLanguage}
                className="text-[.7rem] font-mono text-[#3a6a8a] border border-[#0a3a5a]
                           rounded-md px-2.5 py-1 hover:text-[#22AED1] hover:border-[#016FB9]
                           transition-all duration-150"
              >
                🌍 {currentLang}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-[.7rem] font-mono text-[#3a6a8a] border border-[#0a3a5a]
                           rounded-md px-2.5 py-1 hover:text-[#22AED1] hover:border-[#016FB9]
                           transition-all duration-150"
              >
                ✕ close
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  onClick={() => scrollTo(SECTION_IDS[i])}
                  className="text-sm font-mono text-[#8ab8cc] px-3 py-2.5 rounded-md border border-transparent
                             hover:text-[#22AED1] hover:border-[#016FB9] hover:bg-[#084569]/35
                             cursor-pointer transition-all duration-150"
                  whileHover={{ x: 6, transition: { duration: 0.1 } }}
                >
                  {t(item)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header