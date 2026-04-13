import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { experience_list } from "./data/experience"

function Experience() {
  const { t } = useTranslation('experience')
  const entries = Object.entries(experience_list)

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">

      {/* Header */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-2xl font-mono text-[#016FB9]">_</span>
        <h2 className="text-4xl font-medium text-[#e8f4fa] tracking-tight">
          {t('title')}
        </h2>
      </div>
      <hr className="border-[#016FB9]/25 mb-10" />

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Línea vertical */}
        <span className="absolute left-0 top-2 bottom-2 w-px bg-[#0a3a5a]" />

        {entries.map(([key, details], index) => {
          const isCurrent = !details.endYear
          return (
            <motion.div
              key={key}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08, ease: "easeOut" }}
            >
              {/* Nodo */}
              <span className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full border-[1.5px] border-[#016FB9] bg-[#050f1a] group-hover:border-[#22AED1] transition-colors" />

              {/* Fecha */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1 h-1 rounded-full bg-[#016FB9]" />
                <span className="text-[11px] font-mono text-[#3a6a8a] tracking-wider">
                  {t(`${key}.monthStart`)} {details.startYear}
                  {" — "}
                  {isCurrent
                    ? <span className="text-[#22AED1]">{t('current')}</span>
                    : `${t(`${key}.monthFinished`)} ${details.endYear}`
                  }
                </span>
                {isCurrent && (
                  <span className="text-[10px] font-mono text-[#22AED1] border border-[#22AED1]/30 bg-[#22AED1]/10 px-2 py-0.5 rounded">
                    current
                  </span>
                )}
              </div>

              {/* Card */}
              <div className="border border-[#0a3a5a] rounded-lg p-4 bg-[#084569]/18
                              hover:border-[#016FB9] hover:bg-[#084569]/30 transition-all duration-150">
                <h3 className="text-lg font-medium text-[#e8f4fa] mb-0.5">
                  {t(`${key}.position`)}
                </h3>
                <p className="text-sm font-mono text-[#22AED1] mb-3">
                  // {details.company}
                </p>
                <p className="text-sm text-[#8ab8cc] leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience