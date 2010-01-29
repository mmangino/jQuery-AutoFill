// Auto-Fill Plugin
// Written by Joe Sak http://www.joesak.com/2008/11/19/a-jquery-function-to-auto-fill-input-fields-and-clear-them-on-click/
(function($){
	$.fn.autofill=function(options){
		var defaults={
			value:'First Name',
			defaultTextColor:"#666",
			activeTextColor:"#333"};
			
			
			var options=$.extend(defaults,options);
			return this.each(function(){
				var obj=$(this);
				var pfield = (obj.attr('type')=='password');
				
				if(pfield){
					obj.hide();
					obj.after('<input type="text" id="'+this.id+'_autofill" class="'+$(this).attr('class')+'" />');
					var p_obj = obj;
					obj = obj.next();
				} 
				
				obj.css({color:options.defaultTextColor})
					.val(options.value);
					
				if(!pfield) {
					 obj.focus(function(){
							if(obj.val()==options.value){
								obj.val("")
								.css({color:options.activeTextColor});
							}
						})
						.blur(function(){
							if(obj.val()==""){
								obj.css({color:options.defaultTextColor})
								.val(options.value);
							}
						});
					} else {
						obj.focus(function(){
							if(obj.val()==options.value){
								obj.hide();
								p_obj.show()
								.focus()
								.val("")
								.css({color:options.activeTextColor});
							}
						});
						p_obj.blur(function(){
							if(p_obj.val()==""){
								p_obj.hide();
								obj.show()
								.css({color:options.defaultTextColor})
								.val(options.value);
							}
						});
					}
				});
			};
		})(jQuery);