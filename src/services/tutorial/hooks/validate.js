'use strict'

const validateHook = require('/Users/kulakowka/Documents/node.js/sandbox/feathers-validate-hook').validate
const errors = require('feathers-errors')

/*
title
slug
sourceUrl
sourceDomain
content
contentHtml
keywords
languages
platforms
projects
commentsCount
*/

var schema = {
  properties: {
    title: {
      title: 'Title',
      description: 'Title for tutorial',
      required: true,
      maxLength: 200,
      minLength: 5,
      type: 'string'
    },
    slug: {
      required: true,
      type: 'string'
    },
    sourceUrl: {
      required: true,
      type: 'string'
    },
    sourceDomain: {
      required: true,
      type: 'string'
    },
    content: {
      required: true,
      type: 'string'
    },
    contentHtml: {
      required: true,
      type: 'string'
    },
    keywords: {
      type: 'array',
      items: {
        type: 'string'
      },
      minItems: 1,
      maxItems: 20,
      uniqueItems: true
    },
    languages: {
      type: 'array',
      items: {
        type: 'string'
      },
      minItems: 1,
      maxItems: 20,
      uniqueItems: true
    },
    platforms: {
      type: 'array',
      items: {
        type: 'string'
      },
      minItems: 1,
      maxItems: 20,
      uniqueItems: true
    },
    commentsCount: {
      type: 'number',
      minimum: 0,
      exclusiveMinimum: true,
      default: 0
    }
  }
}

var options = {

}

module.exports = validateHook(schema, options, errors)
