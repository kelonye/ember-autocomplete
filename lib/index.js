require('ember');

var compile = Em.Handlebars.compile;
var overlay = require('ember-overlay');

var tmpl = '';
tmpl += '<ul>';
tmpl += '{{#each view.parentView.controller.content}}';
tmpl += '{{#view view.resultView contentBinding="this"}}';
tmpl += '{{this}}';
tmpl += '{{/view}}';
tmpl += '{{/each}}';
tmpl += '</ul>';

var resultView = Em.View.extend({
  tagName: 'li',
  click: function(e){
    var input = this.get('parentView.parentView.parentMasterView')
    input.hide(e);
    input.set('value', this.get('content'));
  }
});

var overlayView = Em.View.extend({
  resultView: resultView,
  template: compile(tmpl)
});

module.exports = Em.Mixin.create( overlay, {
  overlay: overlayView
});
