import { useEffect, useState } from "preact/hooks";

interface BarGraphProps {
  title: string;
  min: Date;
  max: Date;
  value: Date;
  barHeight: number;
  backgroundColor: string;
  fillColor: string;
}

interface IColor {
  dayBG: string;
  dayFill: string;
  weekBG: string;
  weekFill: string;
  q1BG: string;
  q1Fill: string;
  q2BG: string;
  q2Fill: string;
  q3BG: string;
  q3Fill: string;
  q4BG: string;
  q4Fill: string;
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
    <div class="w-fit">
      <svg width={barWidth} height={barHeight + 20} class="block mx-auto">
        <rect
          x={0}
          y={10}
          width={barWidth}
          height={barHeight}
          fill={props.backgroundColor}
        />
        <rect
          x={0}
          y={10}
          width={barWidth * progress / 100}
          height={barHeight}
          fill={props.fillColor}
        />
      </svg>
      <p class="text-sm w-full text-left">
        {props.title} {progress}%
      </p>
    </div>
  );
}

export default function Clock() {
  const [dayBG, setDayBG] = useState("#D3D3D3");
  const [dayFill, setDayFill] = useState("#808080");
  const [weekBG, setWeekBG] = useState("#D3D3D3");
  const [weekFill, setWeekFill] = useState("#808080");
  const [q1BG, setQ1BG] = useState("#D3D3D3");
  const [q1Fill, setQ1Fill] = useState("#808080");
  const [q2BG, setQ2BG] = useState("#D3D3D3");
  const [q2Fill, setQ2Fill] = useState("#808080");
  const [q3BG, setQ3BG] = useState("#D3D3D3");
  const [q3Fill, setQ3Fill] = useState("#808080");
  const [q4BG, setQ4BG] = useState("#D3D3D3");
  const [q4Fill, setQ4Fill] = useState("#808080");

  useEffect(() => {
    const item = localStorage.getItem("My Clock");
    let stored: IColor;
    if (item) {
      stored = JSON.parse(item);
      setDayBG(stored.dayBG);
      setDayFill(stored.dayFill);
      setWeekBG(stored.weekBG);
      setWeekFill(stored.weekFill);
      setQ1BG(stored.q1BG);
      setQ1Fill(stored.q1Fill);
      setQ2BG(stored.q2BG);
      setQ2Fill(stored.q2Fill);
      setQ3BG(stored.q3BG);
      setQ3Fill(stored.q3Fill);
      setQ4BG(stored.q4BG);
      setQ4Fill(stored.q4Fill);
    } else {
      stored = {
        dayBG: dayBG,
        dayFill: dayFill,
        weekBG: weekBG,
        weekFill: weekFill,
        q1BG: q1BG,
        q1Fill: q1Fill,
        q2BG: q2BG,
        q2Fill: q2Fill,
        q3BG: q3BG,
        q3Fill: q3Fill,
        q4BG: q4BG,
        q4Fill: q4Fill,
      };
    }
  }, []);

  const [time, setTime] = useState(new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }));

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
  dayStart.setHours(0, 0, 0, 0); // start of day is at 00:00:00:00
  const dayEnd = new Date();
  dayEnd.setHours(23, 59, 59, 999); // end of day is at 23:59:59:999

  return (
    <>
      <BarGraph
        barHeight={120}
        title="Day"
        min={dayStart}
        max={dayEnd}
        value={now}
        backgroundColor={dayBG}
        fillColor={dayFill}
      />

      <h1 class="text-7xl font-bold text-center my-16">
        {time}
      </h1>

      <BarGraph
        barHeight={30}
        title="Week"
        min={weekStart}
        max={weekEnd}
        value={now}
        backgroundColor={weekBG}
        fillColor={weekFill}
      />
      <BarGraph
        barHeight={6}
        title="Q1"
        min={thisQ1[0]}
        max={thisQ1[1]}
        value={now}
        backgroundColor={q1BG}
        fillColor={q1Fill}
      />
      <BarGraph
        barHeight={6}
        title="Q2"
        min={thisQ2[0]}
        max={thisQ2[1]}
        value={now}
        backgroundColor={q2BG}
        fillColor={q2Fill}
      />
      <BarGraph
        barHeight={6}
        title="Q3"
        min={thisQ3[0]}
        max={thisQ3[1]}
        value={now}
        backgroundColor={q3BG}
        fillColor={q3Fill}
      />
      <BarGraph
        barHeight={6}
        title="Q4"
        min={thisQ4[0]}
        max={thisQ4[1]}
        value={now}
        backgroundColor={q4BG}
        fillColor={q4Fill}
      />
    </>
  );
}
