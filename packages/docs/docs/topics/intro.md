# Intro

In these docs, you'll find an example of a modern technology stack, and the considerations that went into its. For an example of the recommendations, view the partner boilerplate [here](https://github.com/overvues/boilerplate).

Before going further, it's important to note that motivations for architecture decisions are varied and should be dependent on the context. While it is important to not reinvent your architecure for each new challenge, you also should not make decisions without considering the size/experience of your team, tech debt, or evolutions in the space. In our case, this is written from the perspective of a small team focused on shipping, and comes with the assumptions below:

- **No pre-optimizations**
    - We aren't Google and need to embrace that we are dealing with solved problems.

- **Infrastructure needs to scale**
    - Even if we aren't Google, it's still important to get infrastructure right the first time to avoid constant pain when trying to scale.

- **Cheap as possible (including developer time)**
    - If a managed service saves developer time, doesn't come with extreme lock in, and won't see drastic price changes — adopt it. 

- **Embrace Tech Debt**
    - Obviously, there are some things that are not ideal, such as: vendor lock-in, less than 100% test coverage, and/or code that needs to be refactored. However, if fixing the problems will cost more time for the forseeable future (depends on your threshold) — don't bother.

- **Flexibility wherever possible**
    - To contradict all the other assumptions, we need to be able to change direction and evolve the stack as much as possible. Unfortunately, every technology used creates some degree of lock in, and this is something you have to get comfortable with. What must not happen however, is that a service becomes so important that if the project shuts down or changes direction you're out of luck.

### Summary
There was a good Tweet floating around with this quote about making infrastructure decisions: 

> If you have few users, use Heroku.
> If you have lots of users and no money, go with Serverless.
> If you have lots of users and money, use Kubernetes.

Yes, it's a sweeping generalization — but this exploration is an attempt at making sweeping generalization of our own. Our goal: make tech decisions with a focus on practicality. 


