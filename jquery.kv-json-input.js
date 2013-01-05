/**
 * jQuery Key-Value Json Input Plugin
 *
 * @author     Zeng Xi <zengxi@udomain.com.hk>
 * @copyright  UDomain Web Hosting Company Limited
 * @date       Dec 19, 2012
 * @license    GPL Version 2 (or later version) licenses.
 * @version    0.1
 */
(function ($) {
	var methods = {
		init: function(options){
					var settings = $.extend({}, $.fn.kvJsonInput.defaults, options || {});
					return this.each(function () {
						var $input = $(this);
						settings.initData = $.parseJSON($input.val());
						$input.kvJsonInput('setupHtml', settings);
						$input.kvJsonInput('initData', settings);
						$(document).on('click.kv-table', '.'+settings.addRowTriggerClass, function(){
							$input.kvJsonInput('addRow', settings.templateClass);
						});
						$(document).on('click.kv-table', '.'+settings.delRowTriggerClass, function(e){
							$input.kvJsonInput('delRow', e.target);
						});
						$input.parents('form').submit(function(e){
							$input.kvJsonInput('updated', settings);
							return true;
						});
					});
				},
		setupHtml: function(options) {
						//define css rule to hide template
						$('<style type="text/css"> .'+options.templateClass+'{display:none;} .kv-table .del-column{width: 25px;text-align: center;vertical-align: middle;} .kv-table .close{float:none;}</style>').appendTo('head');
						var $input = $(this);
						var htmlContent = '<table class="'+options.tableClass+' kv-table">\
												<thead>\
													<tr>\
														<th>Key</th>\
														<th>Value</th>\
														<th class="del-column"></th>\
													</tr>\
												</thead>\
												<tbody>\
													<tr class="'+options.templateClass+' kv-table-row">\
														<td><input type="text" class="'+options.keyInputClass+'" ></td>\
														<td><input type="text" class="'+options.valueInputClass+'" ></td>\
														<td class="del-column"><button type="button" class="close '+options.delRowTriggerClass+'">&times;</button></td>\
													</tr>\
												</tbody>\
												<tfoot>\
													<tr>\
														<td colspan="3"><button type="button" class="'+options.addRowTriggerClass+' btn-link">Add</button></td>\
													</tr>\
												</tfoot>\
											</table>';
						return $input.hide().after(htmlContent);
				},
		initData: function(options) {
						var settings = $.extend({}, $.fn.kvJsonInput.defaults, options || {});
						var $table = $(this).next('.kv-table');
						for(var item in settings.initData) {
							$table.find('tbody>.'+settings.templateClass)
									.clone(true) // clone with binded event
									.removeClass(settings.templateClass) // remove template mark
									.find('.'+settings.keyInputClass)
										.val(item)
										.attr('required',true)
										.end()
									.find('.'+settings.valueInputClass)
										.val(settings.initData[item])
										.attr('required',true)
										.end()
									.appendTo($table.find('tbody')); // insert into table
						}

				},
		addRow: function(templateClass){
					var $table = $(this).next('.kv-table');
					return $table.find('tbody>.'+templateClass)
								.clone(true) // clone with binded event
								.removeClass(templateClass) // remove template mark
								.find('input')
									.attr('required',true)
									.end()
								.appendTo($table.find('tbody')); // insert into table
				},
		delRow: function(delBtn){
					return $(delBtn).parents('tr').find('input')
														.attr('required', false)
														.end()
													.fadeOut('normal', function(){$(this).remove();});
				},
		updated: function(options){
					var settings = $.extend({}, $.fn.kvJsonInput.defaults, options || {});
					var $table = $(this).next('.kv-table');
					var params = {};
					$table.find('tbody tr').not('.'+settings.templateClass).each(function(){
						params[$(this).find('input.'+settings.keyInputClass).val()] = $(this).find('input.'+settings.valueInputClass).val();
					});
					return $(this).val(JSON.stringify(params));
				}
				
	};
	
	
	$.fn.kvJsonInput = function(method){
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.kvJsonInput');
			return false;
		}
	};
	
	$.fn.kvJsonInput.defaults = {
		addRowTriggerClass: 'add-row-trigger',
		delRowTriggerClass: 'del-row-trigger',
		tableClass: 'table table-striped table-bordered table-hover',
		templateClass: 'template',
		keyInputClass: 'config-key',
		valueInputClass: 'config-value',
		
		initData: {}
	};
})(jQuery);