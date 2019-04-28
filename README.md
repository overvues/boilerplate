# Overvues Boilerplate

** Note: For commands to run boilerplate, navigate [here](###commands)

This repo gives an example of a modern technology stack, and the considerations that went into it. For more context on the considerations, view the partner documentation [here](blog).

Before going further, it's important to note that motivations for architecture decisions are varied and should be dependant on the context. While it is important to not reinvent your architecure for each new challenge, you also should not make decisions without considering the size/ experience of your team, tech debt, or evolutions in the space. In our case, this is written from the perspective of a small team focused on shipping, and comes with the assumptions below:

- No pre-optimizations
  - We aren't google and need to embrace that we are dealing with solved problems.
- Infrastructure needs to scale
  - Even if not google, it's still important to get infrastructure right the first time to avoid constant pain when trying to scale.
- Cheap as possible (including developer time)
  - If a managed service saves developer time, doesn't come with extreme lock in, and won't see drastic price changes, adopt it.
- Embrace Tech Debt
  - Vendor lock in, less than 100% test coverage, and code that needs to be refactored are all not ideal. However, if fixing the problems will cost more time for the forseeable future (depends on your threshold) -- don't bother.
- Flexibility wherever possible
  - To contradict all the other assumptions, we need to be able to change direction and evolve the stack as much as possible. Unfortunately, every technology used creates some degree of lock in, and this is something you have to get comfortable with. What must not happen however, is that a service becomes so important that if the project shuts down or changes direction you're out of luck.

In summary I once read someone on twitter advice infrastructure decisions with this heuristic:

"If you have few users, use Heroku.
If you have lots of users and no money, go with Serverless.
If you have lots of users and money, use Kubernets."

This exploration is our own attempt at sweeping generalizations like that. Tech decisions with a focus on practicality.

## Checklist for Implementing Recommendations

This shows what is currently in progress, and links to recommendations in documentation.

### Source Control/ Automation

Not sure if this is different the CICD or not.

- [ ] Github Actions
- [x] Automated Builds and checks (now)
- [x] Automatically deploy previews of PR's (now)

### Security

- [ ]
- [ ] Hashicorp Vault / Or maybe Chamber
- [ ] Automatically check for exposed secrets

### Project Structure

- [x] Monorepo
- [x] Microservices
- [x] CICD (Circle CI)
- [ ] Serverless
- [ ] Docker Container
- [x] Code formating

### Testing

- [x] Linting (ESLint)
- [x] Type Safety (Typescript)
- [ ] Unit Testing (Jest)
- [ ] Integration Testing (Jest)
- [ ] End to End Testing (Cypress)

### Running

- [] Dev, Staging, and Production

### Logging and Error Catching

Kind of feel like this is the same as testing but maybe not.

## Monorepo Structure 

### Commands

- To run individual packages, navigate within the packages and run scripts from within `package.json`. For development this command is `yarn dev`.
- The ability to develop all packages in the monorepo locally, is unfortunately not yet available. Zeit will [soon release](https://github.com/zeit/now-cli/pull/1883#issuecomment-482397983) `now dev` which will allow this.
- To build all projects run `yarn build` at the root. 
- To deploy the project, you'll need to setup an account with Zeit, and run `yarn deploy` from the root. 

### Linting

- We are using eslint rather than tslint (as it is going to be deprecated in the future)
    - To ignore the next line use `// @ts-ignore`
    - Still does not have feature parity with tslint
    - Rules can be [found here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) for typescript.

### Pre-Commit

- If you would like to add a precommit hook, add the following to `.huskyrc` :

```
{
  "hooks": {
    "pre-commit": ["yarn build"]
  }
}
```

In our case we will use circle-ci to check for linting on PR's.

## Maintainers

This boilerplate is maintained by Korinne and Adam as an example of our own workflow for personal projects and freelance work. If you would like to add to this boilerplate or offer an alternative, please raise an issue or submit a PR.

If you would like to get in contact with us, you can find us online at [korrine.dev](http://korinne.dev) AND HERE. 
