var $ = require('jquery')
var codemirror = require('./codemirror')
var forms = require('./forms')

module.exports.initTutorialForm = function initTutorialForm () {
  var textarea = $('.tutorialForm textarea').get(0)
  if (textarea) codemirror.initCodeMirror(textarea)
}


module.exports.onFormSubmit = function onFormSubmit () {
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
