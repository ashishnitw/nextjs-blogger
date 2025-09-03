import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <article className="space-y-6">
          <header className="border-b pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {postData.title}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              {new Date(postData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          <section
            className="prose prose-lg prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
