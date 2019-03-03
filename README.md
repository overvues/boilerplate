# Overvues 

## Monorepo Structure 

### Commands

- To build all projects run `yarn build` at the root. 
- To deploy individual projects, navigate within the packages and run scripts from within. 

### Linting

- We are using eslint rather than tslint (as it is going to be deprecated in the future)
    - To ignore the next line use `// @ts-ignore`
    - Still does not have feature parity with tslint
    - Rules can be [found here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) for typescript.