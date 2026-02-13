import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Main container */}
            <div class="max-w-7x1 mx-auto px-4 py-3 flex items-center justify-between text-white">
                {/* Logo */}
                <div class="text-xl font-bold">
                    R
                </div>

                {/* Navigation buttons for desktop view, disable when the movile device will be activated*/}
                <nav class="hidden md:flex space-x-10">
                    <motion.a href="#"
                        class="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        Inicio
                    </motion.a>
                    <motion.a href="#"
                        class="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        Proyectos
                    </motion.a>
                    <motion.a href="#"
                        class="hover:text-bright hover:bg-[#016FB9] p-2 rounded-sm"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.1 }
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        Contacto
                    </motion.a>
                </nav>

                {/* Navigation button for reactive enviroment */}
                <motion.button 
                whileHover={{
                    scale:1.2,
                    transition: { duration: 0.1 }}}
                class="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}>
                    ☰
                </motion.button>

                {/* Menu for mobile devices */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            class="fixed inset-0 md:hidden bg-[#016FB9]"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <nav className="flex flex-col p-6 space-y-4 text-lg">
                                {/* Button to close de mobile menu */}
                                <motion.button 
                                    class="hover:text-bright bg-[#182825] p-2 rounded-sm"
                                    initial={{y:-15 }}
                                    animate={{y:1}}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.1 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setOpen(false)}
                                >
                                <motion.p
                                initial={{rotate:359}}
                                animate={{rotate:0}}
                                >X</motion.p>
                                </motion.button>
                                <motion.a href="#"
                                    class="hover:text-bright hover:bg-[#016FB9] p-2"
                                    whileHover={{
                                        x: 15,
                                        transition: { duration: 0.1 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setOpen(false)}
                                >
                                    Inicio
                                </motion.a>
                                <motion.a href="#"
                                    class="hover:text-bright hover:bg-[#016FB9] p-2"
                                    whileHover={{
                                        x: 15,
                                        transition: { duration: 0.1 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setOpen(false)}
                                >
                                    Proyectos
                                </motion.a>
                                <motion.a href="#"
                                    class="hover:text-bright hover:bg-[#016FB9] p-2"
                                    whileHover={{
                                        x: 15,
                                        transition: { duration: 0.1 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setOpen(false)}
                                >
                                    Contacto
                                </motion.a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Header