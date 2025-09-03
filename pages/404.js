import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6">
      <h1 className="text-9xl font-extrabold tracking-tight text-gray-200 mb-4">
        404
      </h1>
      <p className="text-base text-gray-500 mb-8">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
