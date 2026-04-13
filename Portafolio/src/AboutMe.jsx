import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import ItemBox from "./components/ItemBox.jsx"
import Experience from "./Experience.jsx"
import { skills } from "./data/skills.js"

function AboutMe() {
  const { t } = useTranslation('aboutme')

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-8">

        {/* Status badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22AED1] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-[#22AED1] uppercase">
            {t('availableStatus')}
          </span>
        </div>

        {/* Título principal */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-mono text-[#016FB9]">[</span>
          <h1 className="text-4xl font-medium text-[#e8f4fa] tracking-tight">
            {t('title')}
          </h1>
          <span className="text-3xl font-mono text-[#016FB9]">]</span>
        </div>

        <hr className="border-[#016FB9]/25 mb-8" />

        {/* Bio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BioCard label={t('careerLabel')}>
            <p>{t('description')}</p>
            <br />
            <p>{t('description2')}</p>
          </BioCard>

          <BioCard label={t('hobbiesLabel')}>
            <p>{t('hobbiesDescription')}</p>
          </BioCard>
        </div>
      </section>

      <hr className="border-[#016FB9]/25 max-w-5xl mx-auto" />

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        <p className="text-[11px] font-mono tracking-widest text-[#3a6a8a] uppercase mb-4">
          // {t('skills')}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <ItemBox key={skill.title} title={skill.title} image={skill.image} />
          ))}
        </div>
      </section>

      <Experience />
    </>
  )
}

function BioCard({ label, children }) {
  return (
    <motion.div
      className="relative border border-[#0a3a5a] rounded-lg p-5 bg-[#084569]/18 overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Borde izquierdo accent */}
      <span className="absolute top-0 left-0 w-[3px] h-full bg-[#016FB9] rounded-l-lg" />

      <p className="text-[11px] font-mono tracking-widest text-[#22AED1] uppercase mb-3 ml-1">
        {label}
      </p>
      <div className="text-sm text-[#8ab8cc] leading-relaxed ml-1">
        {children}
      </div>
    </motion.div>
  )
}

export default AboutMe