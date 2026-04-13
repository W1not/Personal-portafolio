import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { projects_list } from "./data/projects.js"

function Projects() {
  const { t } = useTranslation("projects")
  const entries = Object.entries(projects_list)

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">

      {/* Header */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-2xl font-mono text-[#016FB9]">{"{"}</span>
        <h2 className="text-4xl font-medium text-[#e8f4fa] tracking-tight">
          {t("title")}
        </h2>
        <span className="text-2xl font-mono text-[#016FB9]">{"}"}</span>
      </div>
      <hr className="border-[#016FB9]/25 mb-10" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {entries.map(([key, details], index) => (
          <ProjectCard
            key={key}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            technologies={details.technologies}
            year={details.year}
            link={details.link}
            btnLabel={t("btn_viewProject")}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, description, technologies, year, link, btnLabel, index }) {
  return (
    <motion.div
      className="group relative flex flex-col gap-3 border border-[#0a3a5a] rounded-xl p-5
                 bg-[#084569]/18 hover:border-[#016FB9] hover:bg-[#084569]/30
                 transition-all duration-150 overflow-hidden"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.07, ease: "easeOut" }}
    >
      {/* Borde superior accent en hover */}
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#016FB9]
                       opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

      {/* Título + año */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-medium text-[#e8f4fa] leading-snug">
          {title}
        </h3>
        <span className="text-[10px] font-mono text-[#3a6a8a] tracking-widest pt-0.5 whitespace-nowrap">
          {year}
        </span>
      </div>

      <hr className="border-[#0a3a5a]" />

      {/* Descripción */}
      <p className="text-sm text-[#8ab8cc] leading-relaxed flex-1">
        {description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono text-[#22AED1]
                       bg-[#22AED1]/10 border border-[#22AED1]/25
                       px-2.5 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botón */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 w-fit
                   text-xs font-mono text-[#c8e8f5]
                   bg-[#084569]/50 border border-[#016FB9]
                   px-3.5 py-1.5 rounded-md
                   hover:bg-[#22AED1]/20 hover:border-[#22AED1] hover:text-[#22AED1]
                   transition-all duration-150"
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
      >
        {btnLabel}
        <span className="text-xs">↗</span>
      </motion.a>
    </motion.div>
  )
}

export default Projects