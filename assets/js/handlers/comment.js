var $ = require('jquery')
var codemirror = require('./codemirror')
var _editor = null

module.exports.initCommentForm = function initCommentForm () {
  var textarea = $('.commentForm textarea').get(0)
  if (textarea) _editor = codemirror.initCodeMirror(textarea)
}

module.exports.onFormSubmit = function onFormSubmit () {
  var form = $(this)
  var data = form.serialize()
  var commentsList = $('.commentsList')
  var buttons = form.find('button') 

  buttons.attr('disabled', true)

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (json, textStatus, jqXHR) {
    commentsList.find('.noComments').remove()
    _editor.setValue('')
    commentsList.prepend(json.html)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    var json = jqXHR.responseJSON
    if (json.error || json.errors) return forms.showErrors(form, json)
  }).always(function () {
    buttons.attr('disabled', false)
  })
  
  return false
}
