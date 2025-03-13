export default function Page() {
  return (
    <section className="py-16 px-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="mt-4">Feel free to reach out if you have any questions or collaboration ideas!</p>
      <div className="mt-8">
        <a href="mailto:example@example.com" className="text-blue-600">Email me</a>
      </div>
      <div className="mt-8">
        <p className="text-lg">Connect with me:</p>
        <ul className="flex gap-4 mt-2">
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
}