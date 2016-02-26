'use strict'

const authentication = require('feathers-authentication')

const BitbucketStrategy = require('passport-bitbucket-oauth2').Strategy
const GithubStrategy = require('passport-github').Strategy
const GithubTokenStrategy = require('passport-github-token').Strategy

module.exports = function () {
  const app = this

  let config = app.get('auth')

  config.bitbucket.strategy = BitbucketStrategy
  config.github.strategy = GithubStrategy
  config.github.tokenStrategy = GithubTokenStrategy

  app.set('auth', config)
  app.configure(authentication(config))
}
