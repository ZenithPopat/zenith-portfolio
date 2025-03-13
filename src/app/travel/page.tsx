import Image from 'next/image';

export default function Page() {
  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold">Travel Stories</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="travel-card">
          <Image src="/Messi1.jpg" alt="Travel Story 1" width={700} height={475} className="w-full h-auto" />
          <h2 className="text-xl mt-2">Exploring Argentina with Messi</h2>
        </div>
        <div className="travel-card">
          <Image src="/Messi2.jpg" alt="Travel Story 1" width={700} height={475} className="w-full h-auto" />
          <h2 className="text-xl mt-2">Exploring Barcelona with Messi</h2>
        </div>
        <div className="travel-card">
          <Image src="/Messi3.jpg" alt="Travel Story 1" width={700} height={475} className="w-full h-auto" />
          <h2 className="text-xl mt-2">Exploring the Alps with Messi</h2>
        </div>
      </div>
    </section>
  );
}