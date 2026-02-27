import { projects_list } from './data/projects.js';
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

function Project() {
  const {t, i18n} = useTranslation("projects") 
  return (
    <>
      <div className='max-2-5x1 mx-auto px-20 md:px-25 lg:px-60  text-amber-50 m-40'>
        <h1 className="text-4xl py-2 pb-5">{t("title")}</h1>
        <hr className='pb-5'/>
        {Object.entries(projects_list).map(([key, details]) => (
          <div className='bg-[#084569]/40 p-4 rounded-2xl border border-[#016FB9] mb-5 hover:border-[#22AED1] transition' key={key}>
            <h1 className="text-2xl pb-5">{t(`${key}.title`)}</h1>
            <p className='pb-2'>{t(`${key}.description`)}</p>
            
            <div className='flex flex-wrap items-center pb-4 gap-2'>
              {details.technologies.map(tech => (
                <p className="text-sm border p-2 rounded-4xl text-[#016FB9] bg-[#0E1B18] whitespace-nowrap">{tech}</p>
              ))}
            </div>
            <motion.a
              href={details.link}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1}
              }}
              transition={{ duration: 0.1 }}
              className="inline-block bg-[#016FB9] text-gray-300 hover:bg-[#22AED1] p-2 rounded-lg">
              {t('btn_viewProject')}
            </motion.a>
            <p className="text-sm text-right text-gray-400">{details.year}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Project
