# Personal Security

In any organization, the biggest security vulnerability is people. Admittedly, this section is a departure from our usecase and possibly overkill (though thats how security issues start), but we've included it as a form of security to think about. We won't be doing as deep a dive as other sections, but instead simply highlight what works for us.

## Password Managers

The biggest players are Lastpass, Keepass, and Dashlane. Previously we used Dashlane, but in July 2018 they raised the price to \$60 per year, causing us to reevaluate our entire security setup. We've chosen Bitwarden, which is far and away the most cost effective and flexible (unless you need advanced features).

### Bitwarden

While there are some concerns with using open source software in a password manager, it's nice to be able to verify the quality of the application being used. In the [fall 2018 security audit](https://cure53.de/pentest-report_bitwarden.pdf) 2 issues were listed as "crucial" with the quality of code being praised. While thats obviously not perfect, having access to the source and the general praise from the auditing team, make it a tool worth supporting. Further more, its price at free or \$10 dollars a year makes it far more cost effective than other solutions.

Concerning clients available, Bitwarden uses the Electron framework. While again this brings up concerns, it also points to timely updates and we've found the performance to be positive.

## 2 Factor Auth

Two factor authentication keys are necessary if you're serious about security, but the experience is still not very intuitive and expensive. The main provider is Yubikey, with some cheaper brands (Solo for instance) providing a similar experience. Google briefly provided a key called Titan, but it looks like that has already been canceled. If investing in two factor authentication keys, be prepared to buy backups and put up with some inconvenience.

### Yubikey

The defacto standard, this is what we recommend due to the many form factors and popularity. Documentation from Yubico is poor and the platform has a bit of a learning curve.

### Caveats

If you are using iOS, NFC while supported by Apple, does not work with these devices. This means to get apps that need a password working in iOS, you'll need to use YubiCo OTP and other workarounds. Personally,we don't need to access any services where two factor auth is needed on our phones (all Google services are accessed through a dummy account), and this has worked out fine.

Yubikey is working on a lightening connector version to fix this, and iOS13 will apparently support FIDO2 authentication in some capacity.

## VPNs

Choosing the right VPN is a moving target, and everyone has different opinions on what they find important. The one thing that we will stress is to check-in on your provider from time-to-time. We were happy Tunnel Bear users for years, until finding out they were sold. Now we use [Mullvad](https://mullvad.net/en/) which has been a pleasure. For more information, look up reviews on Reddit. Ignore rankings lists and be careful of the many advertisers posing as users.
