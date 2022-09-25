import { useEffect, useState } from "preact/hooks";

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

export default function SettingsForm() {
  const [stored, setStored] = useState<IColor>()
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
    const savedColors = JSON.parse(localStorage.getItem("My Clock")!)
    setStored(savedColors)
    setDayBG(savedColors.dayBG);
    setDayFill(savedColors.dayFill);
    setWeekBG(savedColors.weekBG);
    setWeekFill(savedColors.weekFill);
    setQ1BG(savedColors.q1BG);
    setQ1Fill(savedColors.q1Fill);
    setQ2BG(savedColors.q2BG);
    setQ2Fill(savedColors.q2Fill);
    setQ3BG(savedColors.q3BG);
    setQ3Fill(savedColors.q3Fill);
    setQ4BG(savedColors.q4BG);
    setQ4Fill(savedColors.q4Fill);
  }, []);

  const applyChanges = () => {
    localStorage.setItem(
      "My Clock",
      JSON.stringify({
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
      }),
    );
    window.location.href = "/";
  };

  const resetColors = () => {
    localStorage.removeItem("My Clock");
    window.location.href = "/";
  };

  return (
    <>
      <h1 class="text-3xl font-bold mb-2">Settings</h1>

      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2"
        placeholder={`Day Background: ${stored ? stored.dayBG : dayBG}`}
        onChange={(e) => setDayBG((e.target as HTMLInputElement).value)}
      >
      </input>
      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2 mb-5"
        placeholder={`Day Fill: ${stored ? stored.dayFill : dayFill}`}
        onChange={(e) => setDayFill((e.target as HTMLInputElement).value)}
      >
      </input>

      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2"
        placeholder={`Week Background: ${stored ? stored.weekBG : weekBG}`}
        onChange={(e) => setWeekBG((e.target as HTMLInputElement).value)}
      >
      </input>
      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2 mb-5"
        placeholder={`Week Fill: ${stored ? stored.weekFill : weekFill}`}
        onChange={(e) => setWeekFill((e.target as HTMLInputElement).value)}
      >
      </input>

      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2"
        placeholder={`Q1 Background: ${stored ? stored.q1BG : q1BG}`}
        onChange={(e) => setQ1BG((e.target as HTMLInputElement).value)}
      >
      </input>
      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2 mb-5"
        placeholder={`Q1 Fill: ${stored ? stored.q1Fill : q1Fill}`}
        onChange={(e) => setQ1Fill((e.target as HTMLInputElement).value)}
      >
      </input>

      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2"
        placeholder={`Q2 Background: ${stored ? stored.q2BG : q2BG}`}
        onChange={(e) => setQ2BG((e.target as HTMLInputElement).value)}
      >
      </input>
      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2 mb-5"
        placeholder={`Q2 Fill: ${stored ? stored.q2Fill : q2Fill}`}
        onChange={(e) => setQ2Fill((e.target as HTMLInputElement).value)}
      >
      </input>

      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2"
        placeholder={`Q3 Background: ${stored ? stored.q3BG : q3BG}`}
        onChange={(e) => setQ3BG((e.target as HTMLInputElement).value)}
      >
      </input>
      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2 mb-5"
        placeholder={`Q3 Fill: ${stored ? stored.q3Fill : q3Fill}`}
        onChange={(e) => setQ3Fill((e.target as HTMLInputElement).value)}
      >
      </input>

      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2"
        placeholder={`Q4 Background: ${stored ? stored.q4BG : q4BG}`}
        onChange={(e) => setQ4BG((e.target as HTMLInputElement).value)}
      >
      </input>
      <input
        type="text"
        class="w-1/2 border rounded-lg outline-none focus:(border-blue-200 outline-none) text-left p-2 mb-5"
        placeholder={`Q4 Fill: ${stored ? stored.q4Fill : q4Fill}`}
        onChange={(e) => setQ4Fill((e.target as HTMLInputElement).value)}
      >
      </input>

      <div class="w-1/2 flex items-center justify-between">
        <a
          href="/"
          class="border border-red-200 py-1 px-3 rounded-lg text-black bg-red-200 hover:(text-red-400 bg-white) transition-colors outline-none focus:outline-none w-1/5 text-center"
        >
          Cancel
        </a>
        <button
          onClick={() => resetColors()}
          class="border border-purple-200 py-1 px-3 rounded-lg text-black bg-purple-200 hover:(text-purple-400 bg-white) transition-colors outline-none focus:outline-none w-1/5 text-center"
        >
          Reset
        </button>
        <button
          onClick={() => applyChanges()}
          class="border border-blue-200 py-1 px-3 rounded-lg text-black bg-blue-200 hover:(text-blue-400 bg-white) transition-colors outline-none focus:outline-none w-1/5 text-center"
        >
          Apply
        </button>
      </div>
    </>
  );
}
