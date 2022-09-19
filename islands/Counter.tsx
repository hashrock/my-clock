import { useEffect, useState } from "preact/hooks";

interface CounterProps {
  start: number;
}

interface BarGraphProps {
  title: string;
  min: Date;
  max: Date;
  value: Date;
  barHeight: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function BarGraph(props: BarGraphProps) {
  const progress = Math.round(
    clamp(
      (props.value.getTime() - props.min.getTime()) /
        (props.max.getTime() - props.min.getTime()),
      0,
      1,
    ) * 100,
  );
  const barWidth = 280;
  const barHeight = props.barHeight;

  return (
    <svg width={barWidth} height={barHeight + 20} class="block mx-auto">
      <rect x={0} y={10} width={barWidth} height={barHeight} fill="lightgray" />
      <rect
        x={0}
        y={10}
        width={barWidth * progress / 100}
        height={barHeight}
        fill="gray"
      />
      <text
        x={0}
        y={barHeight + 20}
        font-size={11}
        font-weight={900}
        fill="gray"
        font-family="sans-serif"
      >
        {props.title} {progress}%
      </text>
    </svg>
  );
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

  const now = new Date();
  const thisQ1 = [
    new Date(now.getFullYear(), 0, 1),
    new Date(now.getFullYear(), 2, 31),
  ];
  const thisQ2 = [
    new Date(now.getFullYear(), 3, 1),
    new Date(now.getFullYear(), 5, 30),
  ];
  const thisQ3 = [
    new Date(now.getFullYear(), 6, 1),
    new Date(now.getFullYear(), 8, 30),
  ];
  const thisQ4 = [
    new Date(now.getFullYear(), 9, 1),
    new Date(now.getFullYear(), 11, 31),
  ];

  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() + 1 - weekStart.getDay());
  const weekEnd = new Date();
  weekEnd.setDate(weekEnd.getDate() + (6 - 1 - weekEnd.getDay()));

  const dayStart = new Date();
  dayStart.setHours(12, 0, 0, 0);
  const dayEnd = new Date();
  dayEnd.setDate(dayEnd.getDate() + 1);
  dayEnd.setHours(5, 0, 0, 0);

  return (
    <>
      <div class="text-center">
        <BarGraph
          barHeight={120}
          title="Day"
          min={dayStart}
          max={dayEnd}
          value={now}
        />
      </div>

      <div class="text-7xl font-bold text-center my-16">
        {time}
      </div>

      <div class="text-center">
        <BarGraph
          barHeight={30}
          title="Week"
          min={weekStart}
          max={weekEnd}
          value={now}
        />
        <BarGraph
          barHeight={6}
          title="Q1"
          min={thisQ1[0]}
          max={thisQ1[1]}
          value={now}
        />
        <BarGraph
          barHeight={6}
          title="Q2"
          min={thisQ2[0]}
          max={thisQ2[1]}
          value={now}
        />
        <BarGraph
          barHeight={6}
          title="Q3"
          min={thisQ3[0]}
          max={thisQ3[1]}
          value={now}
        />
        <BarGraph
          barHeight={6}
          title="Q4"
          min={thisQ4[0]}
          max={thisQ4[1]}
          value={now}
        />
      </div>
    </>
  );
}
