/**
 * By: Justin Rings
 * 
 * A super simple get set clear cookie
 * 
 * How to use: 
 * 
 * cookie.get("cookie name")
 *   example: get.cookie("username")
 * 
 * cookie.set("cookie name", "cookie value", number of days)
 * 	example: cookie.set("username", "justinr", 365)
 * 
 * cookie.clear("cookie name")
 * 	example: cookie.clear("username")
 * 
 */


(function(){
	window.cookie = {
	
		get:   function(key) {
			var i, x, y, c = document.cookie.split(";");
			for (i = 0; i < c.length; i++) {
			  x = c[i].substr(0, c[i].indexOf("="));
			  y = c[i].substr(c[i].indexOf("=") + 1);
			  x = x.replace(/^\s+|\s+$/g, "");
			  if (x == key) {
			    return unescape(y);
			  }
			}
		       },
		set:   function(key, value, days) {
			var exp = new Date();
			exp.setDate(exp.getDate() + days);
			var val = escape(value) + ((days == null) ? "" : "; expires=" + exp.toUTCString());
			document.cookie = key + "=" + val;
		       },
	    	clear: function(key){
			cookie.set(key,"",-1);
		       }
		}
})();
  
