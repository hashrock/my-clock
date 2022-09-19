import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Counter start={3} />
    </div>
  );
}
