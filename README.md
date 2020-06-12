This is a frontend challenge made for [gStudio](https://gstudioapp.com/)

The stack used to make this is [React](https://pt-br.reactjs.org/) with [Typescript](https://www.typescriptlang.org/)

React is a common used framework when talking about scalable frontends. It's also a great tool when thinking about components in your application, letting us build complex UI's in a simple manner.
After having to maintain a large React codebase without Typescript I can say that is so valuable to have it setup correctly. We can have a lot of benefits coming out of typed language:

- When you have new developers maintaing your code it get simpler to know what we can pass to a component or a function;
- You're less likely to have JavaScript bugs;

## How will you organize the interface components and name them?

When developing a component I like to have two ways of thinking on how to structure it, the presentional and the container components. The presentional one cares more about getting a nice markup, and the container cares about integrations with data. This way we can separate concerns in data fetching and styling, so it get easier to reuse later.
The way I like to name them is the same as a Designer normally would do, so you can look up to the design system and know exactly where you have to go.

## Will you use a component library? Which one? Explain why.

It's not exaclty a component library, but one I like to use when creating React components is [styled components](https://styled-components.com/) or [emotion](https://emotion.sh/docs/introduction). It simplifies a lot the styling in a elegant way, not to mention it already scss by default, so we can write a more powerful css.

## How will you document the components to make them public for other members of your team can reuse components in the future?

I think the best way to document components is using [Storybook](https://storybook.js.org/). We can see what props it gets and how it looks, so not only developers can use it.

## Getting started

You can clone or fork this repository. Once you have it in your machine run `yarn install` or `npm install` to install all dependencies.

You can run the app with `yarn start` or `npm start`.

If you want to see the tests run `yarn test` or `npm run test`
