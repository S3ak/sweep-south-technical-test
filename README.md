## Brief

Please use ReactJS to create a small app that enables a user to browse profiles

Profiles can be displayed as simple UI Cards that show a profile photo of a candidate, their name, city they are based in.

When you click a user profile you must navigate to another page that displays the full user profile.

You may fetch dummy data from here - https://randomuser.me/api/?results=50

Please note we are looking for a simple, clean UI and a considered approach to the structure of your small application. Structure of your code is important, try to think about reusable components and file structure. 

## About

Using next.js I'm building static html files rendered at build time.

### Gotchas
One of the problems with randomuser is that the data changes on each request.  I've used a seed to var to make sure the data is always the same. I can't query a specific person so I have to pull all the profiles then find the specific user.

## Links

Deployment dashoard: https://vercel.com/seak/sweep-south-technical-test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Resources:

type-scale: https://type-scale.com/?size=14&scale=1.618&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=400&bodyfont=Poppins&bodyfontweight=400&lineheight=1.65&backgroundcolor=white&fontcolor=%23333&preview=false

Color palette:

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## TODO
[see project](https://github.com/S3ak/sweep-south-technical-test/projects/1)

### Learnings

https://nextjs.org/learn/basics/data-fetching
https://stackoverflow.com/questions/55624695/loading-screen-on-next-js-page-transition
https://reacttricks.com/animating-next-page-transitions-with-framer-motion/
https://flaviocopes.com/how-to-save-json-object-to-file-nodejs/
