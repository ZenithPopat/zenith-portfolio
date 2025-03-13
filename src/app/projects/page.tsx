import Image from 'next/image';

export default function Page() {
  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="mt-8 grid grid-cols-3 gap-8">
        {/* Example of project thumbnails */}
        <div className="project-thumbnail">
          <Image src="/Messi1.jpg" alt="Project 1" width={500} height={300} className="w-full h-auto" />
          <h2 className="text-xl mt-2">Project 1</h2>
        </div>
        <div className="project-thumbnail">
          <Image src="/Messi2.jpg" alt="Project 1" width={500} height={300} className="w-full h-auto" />
          <h2 className="text-xl mt-2">Project 1</h2>
        </div>
        <div className="project-thumbnail">
          <Image src="/Messi3.jpg" alt="Project 1" width={500} height={300} className="w-full h-auto" />
          <h2 className="text-xl mt-2">Project 1</h2>
        </div>
      </div>
    </section>
  );
}