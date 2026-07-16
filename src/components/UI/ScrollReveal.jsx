import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { animations, instant } from "./animations";

const ScrollReveal = ({
  children,
  animation = "fadeUp",
  className = "",
  delay = 0,
  once = true,
  amount = 0.3,
  as = "div",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();

  const variant = animations[animation] || animations.fadeUp;

  const MotionTag = motion[as] || motion.div;

  const resolvedVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: instant },
      }
    : {
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: {
            ...(variant.visible.transition || {}),
            delay,
          },
        },
      };

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={resolvedVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const StaggerItem = ({ children, className = "", as = "div", ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const resolvedVariant = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: instant } }
    : animations.fadeUp;

  return (
    <MotionTag
      variants={resolvedVariant}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const HeroReveal = ({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, ...(shouldReduceMotion ? {} : { y: 0 }) }
          : shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 40 }
      }
      transition={shouldReduceMotion ? instant : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;
