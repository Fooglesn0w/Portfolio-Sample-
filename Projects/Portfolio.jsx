export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 font-sans">
      {/* Hero Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-700">Cybersecurity Specialist | Ethical Hacker | CTF Player</p>
      </header>

      {/* Projects Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Cybersecurity Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="bg-white shadow-xl rounded-2xl p-4">
            <h3 className="text-xl font-bold">Project Title</h3>
            <p className="text-gray-600 mb-2">Brief description of the project, e.g., pentesting tool, malware analysis, etc.</p>
            <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Accomplishments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>OSCP Certified (Offensive Security Certified Professional)</li>
          <li>Top 5% in TryHackMe global rankings</li>
          <li>Reported critical bug to HackerOne (Company X)</li>
          <li>Published write-ups on Medium</li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="py-10 text-center border-t mt-10">
        <p className="mb-2">Get in touch:</p>
        <div className="space-x-4">
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">Email</a>
          <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
