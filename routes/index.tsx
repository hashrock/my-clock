import Clock from "../islands/Clock.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Clock</title>
      </Head>
      <div class="w-screen h-screen flex items-center justify-center flex-col">
        <Clock />
      </div>
    </>
  );
}
