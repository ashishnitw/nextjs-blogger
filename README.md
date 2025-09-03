## Setup

```zsh
npx create-next-app@latest nextjs-blogger
cd nextjs-blogger
npm run dev
```

### `gray-matter`

A library that lets you parse the metadata in each markdown file.

```zsh
npm install gray-matter
```

### Create a utility function to read the file system: `/lib/posts.js`

- Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
- List the data on the index page, sorted by date.

### Fetch the blog data

Now that the blog data is parsed, we need to add it to our index page (pages/index.js). We can do this with a Next.js data fetching method called `getStaticProps()`.

### Next.js has two forms of pre-rendering

- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
  1. Static Generation without data: Using `getStaticProps`
  2. Static Generation with data
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.

## Dynamic routes for post pages

- Implement `getStaticPaths` in `posts/[id].js`
- Implement `getStaticProps` in `posts/[id].js`

## Remder Markdown

```zsh
npm i remark remark-html
```

Update `libs/posts.js`

```js
export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
```

## Catch-all Routes

## Search posts
