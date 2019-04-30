# Linting, Formatting, and Static Testing

## Static Testing

While testing is normally thought of in terms of validating that code/ integrations performs as expected, another important consideration is static testing. Considered the bottom of the ["Testing Pyramdid"](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests), static testing catches bugs early, enforces proper formatting/ rules, and improves developer experience. 

### Typescript

Typescript is a technology that allows for writing type safe ES6+ Javascript, that compiles down ES5. As you've probably seen, 2018 and 2019 have really seen the project take off. In the open source community, major projects like Vue, Monoco, and even Facebook tools like Jest have switched from Javascript or are in the process of rewriting to use Typescript (instead of Facebook's own type safe "Flow" for instance). 

While Typescript is obviously great for catching type errors, it also brings other benefits in the IDE experience, particularly with VScode. The ecosystem of plugins and built in system to catch compile errors, works mostly out of the box, and customization for rules is straight forward. Pairing the ecosystem and great support by Microsoft, with no fear of type based errors (which Airbnb recently claimed [accounts for 38%](https://news.ycombinator.com/item?id=19131272) of all their bugs), creates a very compelling experience. 

### Caveats with Typescript

While using Typescript is great for added productivity, the experience of integrating is still not painless. One of the main advantages of using Typescript is that it doesn't need to be integrated all at once, but instead can be used along side Javascript. This however creates some awkward situations when importing untyped libraries, and requires the use of a `global.d.ts` file and importing packages as `import * as package`. Many of these issues have improved (`esModuleInterop` now allows importing the expected way), but there is still a lot of googling of configurations.

The real issues we've found, is the need for not well documented syntax in specific cases like mocking classes with Jest for instance. In general, guides are still not written with Typescript in mind, and this requires hunting around for answers on github issues. Productivity will certainly go down initially when learning the conventions. 

### Typescript vs Javascript

While we are proponents of Typescript and will continue to use it in projects, after using it consistently, we don't believe the benefits are as significant as presented. As with many trends in programming, the pendulum swings back and forth and type safety is one such issue. As stated before, the developer experience around Typescript is amazing, but there is no reason this couldnt be created for Javascript. Alternatively, some people report using Typescript tooling in Javascript simply with the `allowJs` flag set to true. 

One large frustration around Typescript is that encourages "bad" habits by pushing the `Class` syntax instead of other native Javascript patterns. It also adds an incredible amount of boilerplate and as stated before, which will slow down developers with a deep knowledge of the codebase down. It standardizes possible implementations by making Javascript act like other languages which while limiting in one way, also creates a positive in standardization between developers. While choice and speed are good things, inevitably others will need to interact with your codebase and having a shared consistency in development, is often more important for speed than creating new conventions.

For this reason we find it important to adopt and follow Typescript. Software development is of course susceptible to trends and reinventing the wheel, but we firmly believe that we move forward each time the pendulum swings. Weather it's taking advantage of the great developer experience, providing shared background in teams, or being in the technology where the innovation is happening, Typescript has become an obvious decision for projects that will expand.

* For an alternative view read [Eric Elliot's](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b) thoughts.


## Linting

Forcing consistency and adhering to style guides (Airbnb's being popular), has been an obvious good practice for awhile now in Javascript. Previously, Eslint was the defacto tool to lint in Javascript with Tslint by Palantir being used in Typescript. However, Palantir recently decided to [merge their efforts](https://medium.com/palantir/tslint-in-2019-1a144c2317a9) with the Eslint community, and are going to be deprecating Tslint in 2019. For this reason linting has technology has gotten even easier, go with Eslint!

One things to note while linting, we suggest to not blindly adopt rules from someone else. Use a company style guide or the defaults as a starting point, but everyone has different thresholds for what should be allowed. For instance we have `no any` set just to a warning (thinking about complicated types while coding really gets rid of flow). 

## Formatting

In general, linting forces consistent syntax, but is not as strict about formatting. To achieve consistent formatting, we use prettier. Whether it's formatting decisions are the best is another debate, but we've found definitive formatting to be one less thing to fight about in Code Reviews. Furthermore, automatic formatting on save, or as part of the CI pipeline, is very hard to give up after getting used to it. 

The main benefit of prettier however, is also one of it's greatest headaches for me. Prettier is opinionated about formatting, and will thus not respect restrictions made by other tools. For instance when using Vue, Eslint, and Prettier, if additional prettier packages are not installed to suppress eslint warnings/errors, you'll end up with errors. Additionally, if you have eslint settings which prettier does not agree with, you have the manually override them in your `.prettierrc` file. In most cases however, we're happy with prettier's decisions and have decided to stick with them.