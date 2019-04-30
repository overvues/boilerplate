# Javascript Testing Overview

This section looks at the major testing frameworks and attempts to qualify where they fit in the industry. It also defines the various kinds of tests and how they are used in the Javascript ecosystem.

## Types of Testing

### Unit Tests

This tests a "unit" of code in isolation. In our case this will be our individual components.

Unit tests should verify that outputs are expected using "Assertions", and that no edge cases are introduced. If we strive for components to be self-contained and "pure" (no side effects), unit tests become much easier to reason about. To test how well are units are tested, we use "code coverage" tools to identify which components need more work.

### Integration Testing

This tests the interactions of components, and can help identify when a change in one area of the code effects another. It's often used to test response from API's for example.

### E2E

This tests code inside a browser that can either be real or simulated. The environments we have the option of testing in are:

- Simulated Browser

- This means that it does not render anything or have a UI. A popular example of this would be [jsdom](https://github.com/jsdom/jsdom).

- Headless Browser

- This a browser that runs without a UI but is otherwise a full browser. Examples are: [chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md) or [phantomJS](http://phantomjs.org/)(development suspended).

- Real Browser

- The testing tools take over the browser and make changes directly.

### Snapshot Testing

Another idea created by Facebook, this is incorporated in both [integration testing](https://jestjs.io/docs/en/snapshot-testing), and [E2E](https://www.cypress.io/blog/2018/01/16/end-to-end-snapshot-testing/#) (though more commonly just integration tests). The idea is that the first time the test is run, the system saves a "snapshot" of what the current passing test value is. On future tests if the value is unexpected, the system throws an error and we can choose to update our snapshot value or keep it the same. As the snapshot is of the DOM, this feels like the in between of unit tests and E2E (COME BACK TO).

Think of it like git remembering a version of our code. When we have a clash, we get to choose between our current changes or the "incoming ones". Snapshots work in a similar way.

### Screenshot or Regression Testing

The most extreme version, this checks if two screenshots of an app are equal to each other instead of just checking the DOM or some conditions. This is not often used.

## Unit Testing / Integration Tools

Before I attempt to put these tools into categories, it's important to know that there is a lot of overlap between testing tools. They can be used on their own, but are often paired depending on the goals for testing. They don't need to go together as I have organized them below.

However, there are popular pairings in most projects, and I've tried to organize the information based on community trends.

### Test Runner Framework Tools

Test runners allow tests to be executed from a CLI, by providing a structure for various testings tools to integrate.

#### Mocha

Popular test runner for React.

Often paired with:

- Chai (Assertion Library)

- Sinon (Mocking/ Stubs)

#### Karma

Default in Angular projects.

Often paired with:

- Jasmine (Assertion Library, Mocking/ Stubs)

#### Jest

A test runner created by Facebook, most of the community support is behind Jest going forward.

Often paired with:

- Enzyme (Assertion Library, Mocking/ Stubs)

### Code Coverage Tools

If not using Jest, then the tool of choice is [Istanbul](https://github.com/gotwarlost/istanbul). Otherwise code coverage is included in Jest.

## E2E

Where Unit Testing / Integration Tools are comprised of mostly open source solutions, E2E is a crowded space with many options that include GUI only tools, and paid options. We won't be talking about paid tools in this section, but will highlight open source tools with a paid component.

In the past the main open source tool to accomplish E2E was Selenium either by itself, or with another library warped over it. Selenium however was not built to interact with Progressive Web Apps, and has required work over the years to handle the extra asynchronous complications. This has lead to people calling Selenium "flaky", and introduced a new set of tools that are not based on Selenium. The key difference being Selenium tools work by executing commands across a network, while non Selenium tools typically control through Node.js processes.

On the flip side, Selenium currently has more stability and continued support. Non Selenium tools all appeared around 2017, and while they have been embraced by the developer community, are still gaining momentum.

### Selenium-Based Tools

#### WebdriverIO

Has the most support of the Selenium tools, and strong flexibility. If not using Angular, this is probably the tool to go with.

#### Protractor

While it can be used with any frontend framework, it is really focused on Angular. It has special hooks to interface with Angular and is included in the official documentation.

#### Nightwatch

Though it formally had a lot of support, it's fallen out of fashion and is missing new features like typescript support. Go with Webdriver for future projects.

### Non-Selenium Based Tools

#### Puppeteer

Created by Google as a "Headless Chrome API", it has strong developer support and better performance than Selenium based tools. The main drawback using it is that it only supports Chrome, and can't be used to test other browsers. If you don't need cross browser support this is probably the option to go with.

#### TestCafe

Formerly only a paid product, it was open sourced in 2016 with paid features as additions. It supports multiple browsers and advanced features like Parallel Testing (not counting the paid features). The syntax for the test structure is not based on any popular tool, but instead es6/7. I personally like it but others find it polarizing. Of popular non-selenium based tools it is probably the most mature and full featured.

#### Cypress

A little newer than TestCafe, with the big feature being a GUI to help debug tests and watch them progress in real time. It's missing cross browser support (though that is "in progress"), and other advanced features like Parallel Testing. It's using Mocha for the testing syntax, but will switch to Jest [at a later time](https://github.com/cypress-io/cypress/issues/281#issuecomment-435427198). Nothing is currently in progress.

Having looked at the documentation of both TestCafe and Cypress, I found the support to be better with Cypress. This seems to be sentiment shared by others, as the github stars and number of contributors are both twice as large as TestCafe, and it seems to have the most excitement in the community. If you can wait for major features and don't want to be dependent on google, this is probably the most interesting project.

## Interesting blogs

- [Working with Cypress](https://snipcart.com/blog/frontend-testing-cypress)

- [Testing Overview](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
