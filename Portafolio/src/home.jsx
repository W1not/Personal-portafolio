import ColorBends from './components/ColorBends';
import SplitText from './components/SplitText';

import { useTranslation } from 'react-i18next';
import AboutMe from './AboutMe.jsx';
import Project from './Projects.jsx'


function Home() {

  const { t, i18n } = useTranslation('home');


  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
      <div>
        <div class="flex flex-col items-center justify-center h-screen text-center">
          <SplitText
            text="Raul Rodriguez R."
            className="text-4xl md:text-7xl lg:text-9xl font-bold text-amber-50 [-webkit-text-stroke:1px_black] pb-5"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
          <SplitText
            text="Full Stack developer"
            className="text-2xl font-semibold text-amber-50 [-webkit-text-stroke:0.2px_black]"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
        </div>

        {/* Background */}
        <div class='blur-lg absolute inset-0 -z-10 overflow-hidden'>
          <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            transparent
            autoRotate={0}
            color=""
          />
        </div>
      </div>

      <section id='Aboutme' className='py-95'>
        <AboutMe/>
      </section>

      <section id='Projects' className=''>
        <Project/>
      </section>
      
    </>
  )
}

export default Home