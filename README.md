# Welcome

If you're reading this, first off I want to thank you for taking the time to check out my repo. I'm currently in the process of designing and building my developer portfolio site for which this is the code repository.

I have opted to design in browser, since I don't have much experience designing in a tool like Figma. Also, while I may have started my career as a web designer, I haven't truly designed much in the past decade as I focused primarily on UI/UX development.

Therefore, much of what you'll see on the live URL at [patrickalcisto.dev](https://patrickalcisto.dev) is a part of my design process and may not look the same the next time you visit the site. I am taking advantage of this time to learn new tools and techniques to improve my skills and while reinforcing my existing knowledge and skillset.

So please, sit back have a drink and follow me on this journey. Who knows, maybe I'll settle on a couple different designs and implement a way to switch between both.

If you're still reading this, then I appreciate your patience and interest in what I do and hope you enjoy what you see.

Cheers,
Patrick

## New (or Newish To Me) Things I'm trying

Here's a list of a few things I'm trying out:

- Astro
- Netlify
- Responsive design w/ Tailwindscss
- Improving/sharpening my design skills
  <br /><br />

## Stack

The motivation for this stack is based around performance in an effort to deliver an excellent user experience for visitors of this site. A second motivation of learning new things impacted my decision-making with some of the tech, such as Astro and TailwindCSS.

I had never used Astro prior to his project and had heard and read great things that intrigued me. So far I'm REALLY enjoying it -- so easy to get started and all of the integrations make many things a breeze! As for TailwindCSS, I have used it on a couple of prior projects but never really felt like I had as solid of a grasp of tool as I'd like to have. So this project was mostly an exercise of practice and becoming more deeply familiar with it's various concepts and conventions.

Furthermore, my performance based decisions include the utilization of `woff2` fonts due to their improved compression over `woff` and it's great [browser support](https://caniuse.com/?search=woff2). The images have been optimized using [TinyPNG](https://tinypng.com/) (yes... I know Astro has image optimization built-in, but I've used TinyPNG for years and it's my go-to/habitual choice when I need to quickly optimize a few images, plus I figured I'd save the time of learning Astro's image optimization for another North Carolina rainy day of which there are many). [SVGOMG](https://svgomg.net/) handles all SVG optimization duties.

- Astro
- React
- TailwindCSS
- Netlify

Big thanks to [@ladddesign](https://twitter.com/ladddesign) for the beautiful font, [Config Rounded](https://en.bestfonts.pro/font/config-rounded).

---

[![Netlify + Astro](https://user-images.githubusercontent.com/43764894/223559085-8ff69d2f-4247-427f-a3a6-d2036b00082a.png)](https://ntl.fyi/3LZGn73)

# Astro Quickstart Template

This is a bare-bones Astro project that has everything you need to quickly deploy it to [Netlify](https://netlify.com).

Hate reading, here's a video: https://youtu.be/SknFflQVOys!

Love reading, here's blog post: www.netlify.app/blog/deploy-your-astro-project-fast/!

## Table of Contents:

- [Quick Setup + Deploy Option](#quick-setup--deploy-option)
- [Regular Setup](#regular-setup)
  - [Cloning + Install Packages](#1-cloning--install-packages)
  - [Deploying](#2-deploying)
- [Astro + Netlify Resources](#astro--netlify-resources)
- [Project Structure](#project-structure)
- [Styling](#styling)
  - [Notes on Styling](#notes-on-styling)
  - [Remove Styling](#remove-styling)
- [Commands](#commands)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)
  - [Removing Renovate](#removing-renovate)
  - [Removing Cypress](#removing-cypress)
- [Want to learn more?](#want-to-learn-more)

## Quick Setup + Deploy Option

Click this button and it will help you create a new repo, create a new Netlify project, and deploy!

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/astro-quickstart)

## Regular Setup

### 1. Cloning + Install Packages

- Clone this repo with one of these options:

  - Click the 'Use this template' button at the top of the page
  - Or via the command line `git clone https://github.com/netlify-templates/astro-quickstart`

- Then install the necessary packages and run the project locally to make sure everything works.

  ```bash
  npm install
  npm run dev
  ```

> Alternatively, you can run this locally with [the Netlify CLI](https://docs.netlify.com/cli/get-started/)'s by running the `netlify dev` command for more options like receiving a live preview to share (`netlify dev --live`) and the ability to test [Netlify Functions](https://www.netlify.com/products/functions) and [redirects](https://docs.netlify.com/routing/redirects/).

### 2. Deploying

- Install the Netlify CLI globally `npm install netlify-cli -g`
- Run `npm run build`

- Then use the `netlify deploy` for a deploy preview link or `netlify deploy --prod` to deploy to production

Here are a few other ways you can deploy this template:

- Use the Netlify CLI's create from template command `netlify sites:create-template astro-quickstart` which will create a repo, Netlify project, and deploy it
- If you want to utilize continuous deployment through GitHub webhooks, run the Netlify command `netlify init` to create a new project based on your repo or `netlify link` to connect your repo to an existing project

## Astro + Netlify Resources

Here are some resources to help you on your Astro + Netlify coding fun!

- [Astro on Netlify Integration Page](https://docs.netlify.com/integrations/frameworks/astro)

- [Build wicked fast sites with Astro: An Introduction](https://www.netlify.com/blog/2021/07/08/build-wicked-fast-sites-with-astro-an-introduction/#main)

- [A Template for Building Shopify Stores with Astro and the Storefront API](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions)

Hope this template helps :) Happy coding 👩🏻‍💻!

---

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── style/
│       └── demo-styling.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## Styling

We've added some modern styling to this template using css within an external stylesheet, this will allow you to easily remove our styling and add in your own.

If you decide that you want to keep our styling you can review our style notes below.

### Notes on Styling

The variables below give you the ability to change the gradient colors of the blobs and are interpolated into the URL string of the background-img within the body.

```css
// Controls the blob blur gradient colors within the main tag's svg
--top-right-blur-1: #20c6b7;
--top-right-blur-2: #4d9abf;
--bttm-left-blur-1: #ff5c02;
--bttm-left-blur-2: #ffcdb1;
```

### Remove Styling

If you decide that our styling is not for you, all you'll need to do is remove the [demo-styling.css](https://github.com/netlify-templates/astro-quickstart/tree/main/src/style/demo-styling.css) file.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

If your team is not interested in this tooling, you can remove them with ease!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.

### Removing Cypress

For our testing, we use [Cypress](https://www.cypress.io/) for end-to-end testing. This makes sure that we can validate that our templates are rendering and displaying as we’d expect. By default, we have Cypress not generate deploy links if our tests don’t pass. If you’d like to keep Cypress and still generate the deploy links, go into your `netlify.toml` and delete the plugin configuration lines:

```diff
[[plugins]]
  package = "netlify-plugin-cypress"
-  [plugins.inputs.postBuild]
-    enable = true
-
-  [plugins.inputs]
-    enable = false 
```

If you’d like to remove the `netlify-plugin-cypress` build plugin entirely, you’d need to delete the entire block above instead. And then make sure sure to remove the package from the dependencies using:

```bash
npm uninstall -D netlify-plugin-cypress
```

And lastly if you’d like to remove Cypress entirely, delete the entire `cypress` folder and the `cypress.config.ts` file. Then remove the dependency using:

```bash
npm uninstall cypress
```

## Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).
