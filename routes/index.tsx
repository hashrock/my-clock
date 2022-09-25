import Clock from "../islands/Clock.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Clock</title>
      </Head>
      <main class="w-screen h-screen flex items-center justify-center flex-col">
        <a
          href="/settings"
          class="absolute top-5 right-10 border border-blue-200 py-1 px-3 rounded-lg text-black bg-blue-200 hover:(text-blue-400 bg-white) transition-colors"
        >
          Settings
        </a>
        <Clock />
      </main>
    </>
  );
}
