import React from 'react';

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  const observer = React.useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ));

  React.useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() };
    }
  }, [ref.current]);

  return isIntersecting
};
