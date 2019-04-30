# Overvues Boilerplate

This repo is an example of a modern technology stack, and the considerations that go into it. For more context on the considerations, view the partner documentation at [overvues.dev](https://overvues.dev/).

## Commands

### Dev

- To run individual packages, navigate within the packages and run scripts from within `package.json`. For development this command is `yarn dev`.
- The ability to develop all packages in the monorepo locally, is unfortunately not yet available. Zeit will [soon release](https://github.com/zeit/now-cli/pull/1883#issuecomment-482397983) `now dev` which will allow this.

### Build

- To build all projects, run `yarn build` at the root. 

### Deploy

- To deploy the project, you'll need to setup an account with Zeit, and run `yarn deploy` from the root. 

### Lint

- To lint, run `yarn lint` at root. 
- We are using eslint to lint Typescript, rather than tslint. As Tslint is going to be deprecated in the future, we are adopting even though full feature parity does not yet exist. Rules for typescript can be [found here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).

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

## Checklist for Implementing Recommendations

This shows what is currently in progress/ completed in the boilerplate.

### Source Control/ Automation

- [x] Automated Builds and checks (Now/ CircleCI)
- [x] Automatically deploy previews of PR's (Now)

### Project Structure

- [x] Monorepo (Lerna/Yarn)
- [x] Microservices (Now)

### Testing

- [x] Linting (ESLint)
- [x] Type Safety (Typescript)
- [x] Unit Testing (Jest)
- [ ] Integration Testing (Jest)
- [ ] End to End Testing (Cypress)

### Security

- [ ] Chamber
- [ ] Automatically check for exposed secrets

### Backend

- [ ] Hasura

### Frontend

- [ ] Storybook

## Maintainers

This boilerplate is maintained by Korinne and Adam as an example of our own workflow for personal projects and freelance work. If you would like to add to this boilerplate or offer an alternative, please raise an issue or submit a PR.

If you would like to get in contact with us, you can find us online at [korinne.dev](http://korinne.dev) and [adamdpate](https://github.com/adamdpate). 
