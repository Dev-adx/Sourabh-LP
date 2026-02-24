import { useEffect, useState } from "react";

interface Props {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  start,
}: Props) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!start || hasAnimated) return;

    let startTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      const percentage = Math.min(progress / duration, 1);
      const currentValue = Math.floor(percentage * end);

      setValue(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, hasAnimated]);

  return (
    <span className="inline-flex items-center">
      {prefix}
      <span className="tabular-nums">{value.toLocaleString()}</span>
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
