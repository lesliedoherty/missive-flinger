# Missive Flinger

[Mrs Flinger](http://mrsflinger.com/) really wants to receive iOS notifications at regular intervals throughout the day, containing a random quote from her collection; don't ask me why.

It occurred to me that you could probably achieve this with a service such as [My Notifier](https://mynotifier.app)[^1], and a GitHub Action. I cobbled this proof-of-concept together in a couple of hours, beecause I'm a nerd who can't pass up a good pun.

## Getting started

1. Clone this repository.
2. Create an account on [My Notifier](https://mynotifier.app).
3. Log in to your My Notifier account, and retrieve your API key from the "Account" section.
4. Add [an Action secret](https://github.com/monooso/missive-flinger/settings/secrets/actions) to your repository. Name it `MYNOTIFIER_API_KEY`, and assign it the value from the previous step.
5. Run the action.

[^1]: You could also [use Hap](https://github.com/monooso/hap), if I spent my time building that, instead of dumb things like this.

