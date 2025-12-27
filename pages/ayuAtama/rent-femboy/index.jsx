import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-20 pt-20 md:pt-30">
      <h1 className="text-4xl font-bold text-pinky-600 mb-4">
        Find Your Perfect Companion 💖
      </h1>

      <p className="max-w-xl mx-auto text-gray-600 mb-8">
        A respectful marketplace to connect with cute companions for online or
        offline experiences.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/ayuAtama/rent-femboy/profiles"
          className="bg-pinky-500 text-white px-6 py-3 rounded-lg"
        >
          Browse Profiles
        </Link>
        <Link
          href="/ayuAtama/rent-femboy/auth/register"
          className="border border-pinky-500 text-pinky-600 px-6 py-3 rounded-lg"
        >
          Sign Up
        </Link>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {["Browse", "Choose", "Book"].map((step) => (
          <div key={step} className="bg-white rounded-xl shadow p-6 border">
            <h3 className="font-semibold text-pinky-500">{step}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simple, safe, and transparent.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {["Browse", "Choose", "Book"].map((step) => (
          <div key={step} className="bg-white rounded-xl shadow p-6 border">
            <h3 className="font-semibold text-pinky-500">{step}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simple, safe, and transparent.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {["Browse", "Choose", "Book"].map((step) => (
          <div key={step} className="bg-white rounded-xl shadow p-6 border">
            <h3 className="font-semibold text-pinky-500">{step}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simple, safe, and transparent.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {["Browse", "Choose", "Book"].map((step) => (
          <div key={step} className="bg-white rounded-xl shadow p-6 border">
            <h3 className="font-semibold text-pinky-500">{step}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simple, safe, and transparent.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {["Browse", "Choose", "Book"].map((step) => (
          <div key={step} className="bg-white rounded-xl shadow p-6 border">
            <h3 className="font-semibold text-pinky-500">{step}</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simple, safe, and transparent.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
