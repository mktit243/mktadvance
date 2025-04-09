"use client";

import { FC, ReactNode, useRef, useState, useEffect } from "react";
import { motion, MotionValue, useScroll, useTransform, useInView, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Original scroll-based text reveal
interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

// New simple text reveal animations
type AnimationType = "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "typewriter" | "character" | "gradient";

interface TextRevealProps {
  text: string;
  className?: string;
  animationType?: AnimationType;
  duration?: number;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
}

const animationVariants: Record<AnimationType, Variants> = {
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "slide-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-down": {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-left": {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-right": {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  "typewriter": {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1 }
  },
  "character": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  "gradient": {
    hidden: { opacity: 0, backgroundPosition: "200% 0" },
    visible: { opacity: 1, backgroundPosition: "0% 0" }
  }
};

export const TextReveal: FC<TextRevealProps> = ({
  text,
  className,
  animationType = "fade",
  duration = 0.5,
  delay = 0,
  staggerChildren = 0.03,
  once = true,
  color,
  gradientFrom = "#3b82f6",
  gradientTo = "#8b5cf6",
  as = "div"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
  const renderContent = () => {
    if (animationType === "character") {
      const characters = text.split("");
      
      return (
        <AnimatePresence>
          {isInView && characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={animationVariants[animationType]}
              initial="hidden"
              animate="visible"
              transition={{ 
                duration, 
                delay: delay + index * staggerChildren,
                ease: "easeOut" 
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      );
    }
    
    if (animationType === "gradient") {
      return (
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animationVariants[animationType]}
          transition={{ duration: duration * 1.5, delay, ease: "easeOut" }}
          style={{
            display: "inline-block",
            backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            backgroundSize: "200% auto",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {text}
        </motion.span>
      );
    }
    
    if (animationType === "typewriter") {
      return (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animationVariants[animationType]}
          transition={{ duration: duration * text.length * 0.1, delay, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      );
    }
    
    return (
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants[animationType]}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {text}
      </motion.div>
    );
  };
  
  switch (as) {
    case "h1":
      return <h1 ref={ref} className={className} style={{ color }}>{renderContent()}</h1>;
    case "h2":
      return <h2 ref={ref} className={className} style={{ color }}>{renderContent()}</h2>;
    case "h3":
      return <h3 ref={ref} className={className} style={{ color }}>{renderContent()}</h3>;
    case "h4":
      return <h4 ref={ref} className={className} style={{ color }}>{renderContent()}</h4>;
    case "h5":
      return <h5 ref={ref} className={className} style={{ color }}>{renderContent()}</h5>;
    case "h6":
      return <h6 ref={ref} className={className} style={{ color }}>{renderContent()}</h6>;
    case "p":
      return <p ref={ref} className={className} style={{ color }}>{renderContent()}</p>;
    case "span":
      return <span ref={ref} className={className} style={{ color }}>{renderContent()}</span>;
    default:
      return <div ref={ref} className={className} style={{ color }}>{renderContent()}</div>;
  }
};

export default TextReveal;
