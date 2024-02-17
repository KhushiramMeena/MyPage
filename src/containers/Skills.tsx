'use client';

import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();
  

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-32">
        
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDarkMode ? 'dark' : 'light']}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
            
          />
        ))}


      </div>
      
      {/* <div className='space-y-32 mobile-view'>
      

      <div className=" mx-5 flex space-x-4"> 
      <a href='#'>
          <img  alt='Leetcode' src='./logo/Leetcode.png' className="logo inline-block" />
       
        </a>
        <a href='#'>
          <img  alt='Codechef' src='./logo/codechef.png' className=" mx-3 logo inline-block" />
        </a>
        <a href='#'>
          <img  alt='GeeksForGeeks' src='./logo/geeks.png' className="logo inline-block" />
        </a>
      
      </div>

      </div> */}

     
    </Wrapper>
  );
};

export default Skills;
