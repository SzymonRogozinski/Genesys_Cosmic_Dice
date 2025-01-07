# Genesys Cosmic Dice App

## Introduction

This project is simple dice app for Genesys based games. It gets random numbers from random.org to achieve more true random results. Purpose of this idea was created when my friend state that all dice app are fake, because they lack of randomness. So, to show him that this is not true, I create this app.

## Set up

To app working as intended, user must get developer account in [random org domain](https://api.random.org/dashboard) and crete api key. Api key should be then write in file src/apikey.json.

Without it, it would use build in random number generator.

## Running app (by npm)

Before starting app, all dependences must be downloaded, by using comand

### `npm i`

Then, to start app use

### `npm start`

## FAQ

There is a dice limit set on 40, but it can be change in src/model/types.js addDice function inside Dice class.

App will inform when api key used all requests and change to normal rng. Other errors will be printed in console log.
