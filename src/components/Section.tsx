import React, { Children, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  onInViewChange?: (id: string, inView: boolean) => void;
}

const Section: React.FC<SectionProps> = ({ id, children, className, containerClassName, onInViewChange }) => {
  // Hook for one-time animation
  const { ref: animationRef, inView: animationInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Hook for active nav tracking
  const { ref: navRef, inView: navInView } = useInView({
    threshold: 0.4, // A section is active when 40% is visible
  });

  // Combine refs into a single callback ref
  const setRefs = React.useCallback(
    (node: HTMLElement | null) => {
      animationRef(node);
      navRef(node);
    },
    [animationRef, navRef],
  );

  // Effect to call the callback for active nav state
  useEffect(() => {
    if (onInViewChange) {
      onInViewChange(id, navInView);
    }
  }, [navInView, id, onInViewChange]);

  return (
    <section id={id} ref={setRefs} className={`content-section fade-in-section ${className || ''} ${animationInView ? 'is-visible' : ''}`}>
      <div className={`container ${containerClassName || ''}`}>
        {Children.map(children, (child, index) => {
          // Type guard to ensure we are only dealing with React elements that can have props
          if (React.isValidElement<{ className?: string; style?: React.CSSProperties }>(child)) {
            const newProps = {
              className: `${child.props.className || ''} animated-child`,
              style: {
                ...child.props.style,
                animationDelay: `${index * 0.15}s`,
              },
            };
            return React.cloneElement(child, newProps);
          }
          return child;
        })}
      </div>
    </section>
  );
};

export default Section;
