import { getSortedPostsData } from "@/lib/posts";
import Image from "next/image";

// getStaticProps can only be exported from a page. You can’t export it from non-page files.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Profile */}
      <section className="flex flex-col items-center text-center space-y-4">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full grayscale hover:grayscale-0 transition"
        />
        <h1 className="text-3xl font-light tracking-tight">Alex Morgan</h1>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          Writing about technology, design, and life — with simplicity in mind.
        </p>
      </section>

      {/* Posts List */}
      <section className="mt-14 space-y-8">
        {allPostsData.map(({ id, date, title }) => (
          <article key={id} className="group">
            <a href={`/posts/${id}`} className="block space-y-1">
              <h3 className="text-lg font-medium tracking-tight group-hover:text-gray-900 transition">
                {title}
              </h3>
              <time className="text-xs text-gray-400">{date}</time>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
