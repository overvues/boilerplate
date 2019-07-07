# Overvues Boilerplate

This repo is an example of a modern technology stack, and the considerations that go into it. For more context on the considerations, view the partner documentation at [overvues.dev](https://overvues.dev/).

## Commands

The boilerplate can be installed locally using `yarn`, or using the pre-configured Docker container specified in the `devcontainer` folder. If you would like to develop inside the docker container environment, it is recommended to install the Remote Extension Pack, and read [this blog](https://code.visualstudio.com/docs/remote/containers).

### Dev

- To run individual packages, navigate within the packages and run scripts from within `package.json`. For development this command is `yarn dev`.

- You can develop all packages in the Monorepo locally, using `now dev`. To learn more, read [this](https://zeit.co/blog/now-dev), and install `now` locally. **NOTE**: `now dev` is still in beta, and currently the `vuepress` and `gatsby` static builds conflict with each other. It is recommended to test packages individually, instead of from the root. 


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
