$(function() {
    /* Allow the textareas and content display to be draggable ~for fun :)
    $("#html").draggable({
    	cancel: ''
    });
    $("#js").draggable({
    	cancel: ''
    });
    $("#css").draggable({
    	cancel: ''
    });
	*/
    function getHtml() {
    	var html = $("#html").val();
    	return html;
    }

    function getCss() {
    	var css = $("#css").val();
    	return css;
    }

    function getJs() {
    	var js = $("#js").val();
    	return js;
    }

    // answer from http://stackoverflow.com/questions/9950894/adding-tabs-to-textareas-using-javascript
	$("textarea").keydown(function(e) {
		var $this, end, start;
		if (e.keyCode === 9) {
			start = this.selectionStart;
			end = this.selectionEnd;
			$this = $(this);
			$this.val($this.val().substring(0, start) + "\t" + $this.val().substring(end));
			this.selectionStart = this.selectionEnd = start + 1;
			return false;
		}
	});

    $(".tbox").on("keyup", function(){
    	var result = $("#update")[0].contentWindow.document
    	result.open();
    	result.close();

    	var html = getHtml();
    	var css = getCss();
    	var js = getJs();

    	$("body", result).append(html);
    	$("head", result).append("<style>" + css + "</style>");
    	$("body", result).append("<script>" + js + "</script>");

    });

    $("#download").click(function(){
    	/*var zip = new JSZip();
    	var html = getHtml();
    	var css = getCss();
    	var js = getJs();

    	zip.generateAsync({type:"blob"})
		.then(function (blob) {
    		saveAs(blob, "hello.zip");
		});

    	zip.file("index.html", html);
    	zip.file("css/styles.css", css);
    	zip.file("js/script.js", js);


    	zip.generateAsync({type:"base64"}).then(function (base64) {
    		Downloadify.create('downloadify',{
	    		data: function(){
	        		return base64;
	    		},
	    		dataType: 'base64'
    		});
		});*/
    	console.log("test");
    });
});

