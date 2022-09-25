import { Head } from "$fresh/runtime.ts";
import SettingsForm from "../islands/SettingsForm.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Clock | Settings</title>
      </Head>
      <main class="w-screen min-h-screen flex items-center justify-start flex-col gap-y-2 py-10">
        <SettingsForm />
      </main>
    </>
  );
}
