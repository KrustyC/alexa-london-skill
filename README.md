# alexa-london-skill
Skill for Alexa which let a user ask for a bus line near a given street of London.
The skill accepts commands like "When is the next 2 gonna pass by Waterloo?". 

The system uses [Transport API](https://www.transportapi.com/) to fetch data regarding London Buses.

## Development
To install all dependencies simply run `yarn install`. The function can not currently be tested on local. The easiest way to test it is to zip tun the deployment command and deploy everything to a test function on AWS Lambda.

The code is written using ES6 and compiled through [Webpack](https://webpack.js.org/) and [Babel 7](https://babeljs.io/).

## Deployment
The skill is deployed as a Lambda function on AWS. TO deploy it just run `yarn zip` which will be build the function through Webpack, and once built it zip all the needed files. Once zipped, just upload the zipped packge to a Lambda function, connect the lambda function to a skill and start talking to your Amazon device!

You will have to set `TRANSPORT_APP_ID` and `TRANSPORT_APP_KEY` as environment variables on your lambda function. They can be required for free at https://www.transportapi.com/.
 
## Linting
As a linter we're using [Prettier](https://prettier.io/) along with [ESLint](https://eslint.org/).

## Usage & Contribution
if you feel like using this as a starting point for your Amazon Skill or you wanna use it as is please do it! If you fancy contributing in any way, feel free to crate a pull request, but please respect the linting styles.
