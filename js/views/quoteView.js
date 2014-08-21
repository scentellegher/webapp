define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'models/quote',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/quote/quoteTemplate.html'
], function($, _, Backbone, $, Quote, quoteTemplate){

	var QuoteView = Backbone.View.extend({
		el : ".quote",
		render : function () {
			var that = this; 
			this.quote = new Quote();
			this.quote.fetch({
				success : function (quote) {
					var template = _.template(quoteTemplate, {quote: quote});
					that.$el.html(template);		
				}
			});
			
		}
	});
	return QuoteView;
});