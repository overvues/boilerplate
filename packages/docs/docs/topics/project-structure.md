# Project Structure and Management

When looking at the twelve factor app methodology, there are a few apparent inconsistencies with the trends in managing codebases right now. The twelve factor app states that we should only have a single repo, or it is then a "distrubuted system". However, many organization store their code in a "Monorepo" which contains multiple applications. When considering microservices and monorepos, the line between what should be factored out into it's own versioned dependency becomes increasingly blurry.

## Mono-repo vs Mulit-repo

### What is a Monorepo?

A Monorepo is a single, large repository to hold your entire organization's code. Inside the repo are "sub-repos" to break up the code into modules or another structure.

**Advantages:**

- Configuration/Linting can be set for all projects

- Packages can be installed for all projects, but projects can also have independent packages.

- Testing across all packages becomes much easier.

- Only one repo must be cloned, instead of many projects of organization.

**Disadvantages:**

- More upfront work on tooling and automation.

- Granting partial permissions more difficult.

### What is a multi-repo?

A multi-repo is the more "traditional" structure of separate repos for each section of the codebase.

**Advantages to this are:**

- Clear separation of concerns

- Can set permissions on access to code more easily

**Disadvantages:**

- Global configuration difficult

- Making changes across the entire codebase (to an API for instance), becomes very difficult.

### When to go with a Monorepo vs multi-repo

For many small teams, a Monorepo represents a premature optimization. Many libraries are still not setup with multiple packages in mind, and learning how to configure them the first time is not trivial. On the other side, a Monorepo that is too large poses an entirely different set of problems. Tracking issues across one giant repo makes it difficult to separate concerns, and one connected repo makes it hard for a team to have a space to own.

However, with tools such as Lerna and the general increase in popularity for Monorepos, managing them has become much simpler. Given that large tech companies often operate in a Monorepo, major open source libraries like Facebook's Jest and Yarn are working on first-class support to them. If you are starting with a new project and can benefit from the clear separation of different packages (ie separate component library), then I think Monorepos make a lot of sense. Being able to have consistent tooling, CI/CD setup, and update packages and API's is a major advantage.

## Packaging/ Dependency Tools

### Yarn

- Workspaces

- Takes in multiple `package.json` files from subfolders. In then combines all of these and pulls out the packages needed only once. Each individual "package" is then it's own workspace which can have dependencies of other workspaces.

### NPM

- The original popular package manager, NPM

- Also, they've recently been firing many of their senior staff which is never a good sign.

### Lerna

Lerna tries to make managing multi package repositories (mono-repos) more manageable. It has features to accomplish this, but the two main concepts are `bootstrap` and `publish`.

- bootstrap: links dependencies in the monorepo together.

- publish: publishes updated changes to individual packages inside the repo.
