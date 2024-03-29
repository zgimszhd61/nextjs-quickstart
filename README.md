## Nextjs Quickstart Tutorial

This tutorial will guide you through setting up a new Next.js project and creating a basic application. We'll cover the following steps:

### 1. Install Prerequisites

Before we begin, ensure you have the following installed on your system:

- Node.js (version 18.17 or later)
- npm (usually bundled with Node.js)

### 2. Create a New Next.js Project

Open your terminal and run the following command to create a new Next.js project:

```bash
npx create-next-app@latest my-nextjs-app
```

This command will prompt you with a few questions. For this tutorial, you can choose the default options by pressing Enter for each prompt.

Once the installation is complete, navigate into the project directory:

```bash
cd my-nextjs-app
```

### 3. Start the Development Server

To start the Next.js development server, run the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`. Open your browser and navigate to this URL to see the default Next.js starter page.

### 4. Create a New Page

Next.js uses a file-based routing system, where each file inside the `pages` directory represents a route in your application.

Create a new file called `about.js` inside the `pages` directory with the following content:

```jsx
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our Next.js application.</p>
    </div>
  );
}
```

Now, if you navigate to `http://localhost:3000/about` in your browser, you should see the content of the `about.js` file rendered.

### 5. Modify the Home Page

Open the `pages/index.js` file and replace its content with the following:

```jsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page of our Next.js application.</p>
    </div>
  );
}
```

Save the file, and you should see the updated content on `http://localhost:3000`.

### 6. Add Navigation

To navigate between pages, we can use the `Link` component provided by Next.js. Open the `pages/index.js` file and add the following import statement at the top:

```jsx
import Link from 'next/link';
```

Then, modify the `Home` component to include a link to the `about` page:

```jsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page of our Next.js application.</p>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

Now, you should be able to navigate between the home page and the about page by clicking the link.

Congratulations! You've successfully created a basic Next.js application and learned how to create pages, navigate between them, and start the development server. From here, you can continue exploring Next.js by adding more pages, components, and functionality to your application. [1][2][3][4][5]

Citations:
[1] https://javascript.plainenglish.io/next-js-unleashed-a-beginners-guide-to-start-developing-web-applications-with-next-js-40ea4b230c0?gi=4ac260fd16d4
[2] https://nextjs.org/learn/dashboard-app/getting-started
[3] https://nextjs.org/learn-pages-router/basics/create-nextjs-app
[4] https://nextjs.org/docs/getting-started/installation
[5] https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup
[6] https://nextjs.org/learn
[7] https://nextjs.org/docs
[8] https://www.freecodecamp.org/news/nextjs-tutorial/
[9] https://clerk.com/docs/quickstarts/nextjs
[10] https://welearncode.com/beginners-guide-nextjs/
[11] https://www.youtube.com/watch?v=qwhMyVVnmKM
[12] https://www.youtube.com/watch?v=_F7uP7gFmW4
