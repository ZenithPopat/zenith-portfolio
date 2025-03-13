export default function AboutPage() {
    return (
      <div>
        <section className="py-16 px-8">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-4">I&apos;m a passionate developer with a love for exploring new technologies and creating impactful projects.</p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="flex gap-4 mt-2">
              {/* Example skill tags */}
              <span className="badge bg-blue-500 text-white py-1 px-3 rounded-full text-sm">JavaScript</span>
              <span className="badge bg-orange-500 text-white py-1 px-3 rounded-full text-sm">React</span>
              <span className="badge bg-green-500 text-white py-1 px-3 rounded-full text-sm">Node.js</span>
            </div>
          </div>
          <a href="/cv" className="mt-8 inline-block text-blue-600">Download CV</a>
        </section>
      </div>
    );
  }