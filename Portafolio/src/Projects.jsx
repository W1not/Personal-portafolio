import { projects_list } from './data/projects.js';
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

function Project() {

  return (
    <>
      <div className='max-2-5x1 mx-auto px-20 md:px-25 lg:px-60  text-amber-50 m-40'>
        <h1 className="text-2xl py-2">Projects</h1>
        {Object.entries(projects_list).map(([title, details]) => (
          <div className='bg-gray-950 p-4 rounded-2xl border border-gray-700 mb-5' key={title}>
            <h1 className="text-2xl pb-5">{title}</h1>
            <p className='pb-2'>{details.description}</p>
            <div className='flex items-center pb-4 gap-2'>
              {details.technologies.map(tech => (
                <p className="text-sm border p-1.5 rounded-4xl text-gray-700 bg-gray-900">{tech}</p>
              ))}
            </div>
            <motion.a
              href={details.link}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.1 }}
              className="inline-block bg-gray-900 text-gray-300 hover:bg-gray-800 p-2 rounded-lg">
              View Project
            </motion.a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Project
