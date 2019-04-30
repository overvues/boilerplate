# Managing Secrets / API Keys 

## Why Go through the effort

The Twelve Factor App recommends storing all configuration information as environmental variables. While this is fine for small projects, it leaves a chance that secrets could be accidentally committed to your SCM. More importantly however, storing your secrets in plain text in environmental variables, makes it possible for dependencies to access their contents. Furthermore, when dealing with secrets you need to consider if they are accessible while in transit to your provider, or on the provider system itself. Personally, we've decided that we're not going to worry about secrets being stored on the provider system but every organization needs to determine what is a healthy amount of risk vs convenience for themselves.

However larger organizations definitely need to consider the threat, and everyone should have some form of secret management.

## Options

The options we'll consider boil down to two variants: those provided by the cloud providers (and the projects that build on top of them), and Hashicorp Vault. Many more services exist and many companies have open sourced their own solutions dealing with the problem. However, there is not a defacto solution in the space yet, so we've chosen to highlight the most popular and simple variants. For a blog comparing most of the solutions, [read this](https://blog.cryptomove.com/secrets-management-guide-approaches-open-source-tools-commercial-products-challenges-db560fd0584d).

If you just need a key value store, it is recommended to use what is provided by your cloud provider. However, if you need advanced functionality switch to Vault[1].

## Vault (HashiCorp)

Vault is the most versatile and free solution, but needing to maintain/ host yourself makes it better option for larger teams. As said before, Vault offers notable advantages like dynamic/versioned secrets, a web UI, and being open source.

Criticisms are that many people complain of poor documentation (though improving), and the web UI is [not quite ready](https://www.reddit.com/r/devops/comments/aeaz1k/best_softwareway_to_store_secrets/).

## AWS Solutions

After reading the general definitions below, it's highly recommended to read [this guide](https://dannyvarner.com/2018/12/24/serverless-secrets.html) for a more in depth analysis of what AWS provides and various considerations. For simpler use cases however, we recommend following the suggestions below.

### AWS Secret Manager

If you're hooked into AWS and not concerned about costs ballooning, this is an obvious choice. For $.40 /secret (and $.05/10000 API calls), you get a fully managed secret solution that handles the case of always being encrypted while in transit and at rest as well. However, service fees can quickly add up (especially the API calls if using serverless), and AWS has other solutions which are free.

### AWS Parameter Store

Parameter Store is a free option that was the precursor to the Secret Manager. It stores secrets (and non secrets), and encrypts them with an amazon customer KMS Key (Key Management Service). From here, the Simple System manager decides what can access the secrets. For more information, read [this blog](https://segment.com/blog/the-right-way-to-manage-secrets/) from segment.

### Other Solutions

**Confidant** is a tool provided by Lyft which takes advantage of a Key Management Service to create a secrets manager. For an even simpler solution, **Chamber** by Segment uses the Parameter Store. If you are hooked into AWS, we'd recommend using Chamber until you out grow it and then perhaps switching to Vault.

## Further Considerations

Further considerations are automatically searching for API Keys within your SCM, auditing dependencies to verify they aren't malicious, and auditing your own software for security vulnerabilities. However, these steps are out of scope of this guide but good to be aware of.

### Footnotes

1. A hashicorp employee echos this sentiment [here](https://www.reddit.com/r/devops/comments/8xa3u6/how_are_you_managing_application_secrets_on_aws/e28mg0w?utm_source=share&utm_medium=web2x).
