import { motion } from "motion/react"

export default function ItemBox({ title, image }) {
  return (
    <motion.div
      className="
        relative flex flex-row items-center gap-2
        px-4 py-2 rounded-md
        bg-[#084569]/35 border border-[#016FB9]
        cursor-pointer select-none overflow-hidden
        group
      "
      whileHover={{ y: -6, transition: { duration: 0.12, ease: "easeOut" } }}
    >
      {/* Corner accents — aparecen en hover */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#22AED1] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#22AED1] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

      {/* Glow de fondo en hover */}
      <span className="absolute inset-0 bg-[#22AED1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-md" />

      {/* Dot indicador */}
      <span className="w-1.5 h-1.5 rounded-full bg-[#016FB9] group-hover:bg-[#22AED1] transition-colors duration-150 shrink-0 z-10" />

      {/* Texto */}
      <h2 className="text-sm text-[#c8e8f5] font-mono whitespace-nowrap z-10 tracking-wide">
        {title}
      </h2>

      {/* Ícono */}
      <img
        src={image}
        alt={title}
        className="w-[18px] h-[18px] object-contain opacity-85 z-10
                   drop-shadow-[0_0_4px_rgba(34,174,209,0.5)]"
      />
    </motion.div>
  )
}