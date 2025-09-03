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
