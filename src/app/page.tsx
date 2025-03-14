import CompassGuide from "@/components/ui/CompassGuide";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Zenith&apos;s Portfolio</h1>
        <div className="mt-4">Discover my journey through code, design, and exploration.</div>
        <CompassGuide />
      </section>
    </div>
  );
}
