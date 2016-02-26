var $ = require('jquery')
var forms = require('./forms')

module.exports.logout = function logout () {
  $.ajax({
    url: '/auth/logout',
    method: 'post',
    dataType: 'json'
  }).done(function (json) {
    document.location.href = '/'
  })

  return false
}

module.exports.signin = function signin () {
  var form = $(this)
  var data = form.serialize()
  var buttons = form.find('button')

  buttons.attr('disabled', true)
  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (data, textStatus, jqXHR) {
    if (data.webUrl) document.location.href = data.webUrl
  }).fail(function (jqXHR, textStatus, errorThrown) {
    var json = jqXHR.responseJSON
    if (json.error || json.errors) return forms.showErrors(form, json)
  }).always(function () {
    buttons.attr('disabled', false)
  })

  return false
}

module.exports.signup = function signup () {
  var form = $(this)
  var data = form.serialize()
  var buttons = form.find('button')

  buttons.attr('disabled', true)
  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (data, textStatus, jqXHR) {
    if (data.webUrl) document.location.href = '/auth/success'
  }).fail(function (jqXHR, textStatus, errorThrown) {
    var json = jqXHR.responseJSON
    if (json.error || json.errors) return forms.showErrors(form, json)
  }).always(function () {
    buttons.attr('disabled', false)
  })

  return false
}

module.exports.recoverPassword = function recoverPassword () {
  var form = $(this)
  var data = form.serialize()
  var buttons = form.find('button')

  buttons.attr('disabled', true)

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (data, textStatus, jqXHR) {
    form.remove()
    $('.sucessRecover').removeClass('hidden')
  }).fail(function (jqXHR, textStatus, errorThrown) {
    var json = jqXHR.responseJSON
    if (json.error || json.errors) return forms.showErrors(form, json)
  }).always(function () {
    buttons.attr('disabled', false)
  })

  return false
}

module.exports.resetPassword = function resetPassword () {
  var form = $(this)
  var data = form.serialize()
  var buttons = form.find('button')

  buttons.attr('disabled', true)

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (data, textStatus, jqXHR) {
    form.remove()
    $('.sucessReset').removeClass('hidden')
  }).fail(function (jqXHR, textStatus, errorThrown) {
    var json = jqXHR.responseJSON
    if (json.error || json.errors) return forms.showErrors(form, json)
  }).always(function () {
    buttons.attr('disabled', false)
  })

  return false
}
