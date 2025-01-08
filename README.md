# Genesys Cosmic Dice App

## Introduction

This project is a simple dice app for Genesys-based games. It retrieves random numbers from random.org to achieve truly random results. The idea for this app came about when my friend stated that all dice apps are fake because they lack randomness. To prove him wrong, I created this app.

## Setup

For the app to work as intended, the user must create a developer account on the [random.org website](https://api.random.org/dashboard) and generate an API key. The API key should then be saved in the `src/apikey.json` file.

Without it, the app will use the built-in random number generator.

## Running the App (via npm)

Before starting the app, all dependencies must be installed by running the command:

### `npm i`

Then, to start the app, use:

### `npm start`

## FAQ

There is a dice limit set to 40, but it can be changed in the `src/model/types.js` file, in the `addDice` function inside the `Dice` class.

The app will notify the user when the API key has used all its requests and will switch to the built-in random number generator. Other errors will be logged in the console.
