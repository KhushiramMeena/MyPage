'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { ShowLottie, Wrapper } from '@/components';
import { slideUp } from '@/styles/animations';

// Import a relevant Lottie animation
import buildingAnimation from '/public/lotties/build.json';

const ComingSoonPage = () => {
  const getAnimationDelay = (i: number, increment = 0.15) => 0.3 + increment * i;

  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center bg-bg text-text">
      <Wrapper className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 max-w-4xl px-4 py-8">
        {/* Lottie Animation */}
        <motion.div
          variants={slideUp({ delay: getAnimationDelay(0) })}
          initial="hidden"
          animate="show"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
        >
          <ShowLottie path={buildingAnimation} className="w-full h-full" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-1 leading-tight"
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="text-sm sm:text-base md:text-lg text-dark-2 max-w-2xl leading-relaxed"
        >
          🚀 Exciting project coming soon! I'm building something incredible that will 
          showcase cutting-edge technology and innovative solutions.
        </motion.p>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          className="text-xs sm:text-sm text-dark-3"
        >
          Built with ❤️ by{' '}
          <Link href="https://www.linkedin.com/in/khushiram1/" className="text-accent hover:underline">
            Khushiram Meena
          </Link>
        </motion.p>
      </Wrapper>
    </div>
  );
};

export default ComingSoonPage;
