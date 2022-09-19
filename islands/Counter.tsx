import { useEffect, useState } from "preact/hooks";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div class="text-7xl font-bold text-center">
        {time}
      </div>
    </>
  );
}
