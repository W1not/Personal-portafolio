import { motion } from "motion/react"

export default function ItemBox({ title, image }) {
    return (
        <motion.div className="w-auto sm:-auto 
        px-4 py-2 rounded-x1 
        flex flex-row items-center justify-center gap-3 
        transition
        outline-2 bg-[#084569]/40 outline-[#016FB9] outline-offset-2 rounded-3xl hover:bg-[#22AED1] hover:outline-[#22AED1]
        select-none cursor-pointer"
            whileHover={{
                    y: -8,
                    transition: { duration: 0.1 }
                }}
            transition={{ duration: 0.1 }}>
            <h1 className="text-sm md:text-lg sm:text-base text-amber-50 whitespace-nowrap">{title}</h1>
            <img
                src={image}
                alt={title}
                className="w-5 h-5
                sm:w-6 sm:h-6
                md:w-7 md:h-7 
                object-contain"/>
        </motion.div>
    );
}