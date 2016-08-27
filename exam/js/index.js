(function(){
	$(".open" ).click(function(){
    $(this ).hide().siblings(".close" ).show();
    $(".nav-change" ).animate({height:'300/64rem'},200);
    return false;
});
$(".close" ).click(function(){
    $(this ).hide().siblings(".open" ).show();
    $(".nav-change" ).animate({height:'72/64rem'},200);
    return false;
});});

function changeNav() {
    var navContainer = document.querySelector('.nav-ul');
    var containerLists = navContainer.children;
        containerLists = Array.prototype.slice.call(containerLists);
    var navLine = document.querySelector('.nav-line');

    navContainer.addEventListener('mouseover',
        function(ev) {
            var target = target || ev.target;
            var index = 0;

            var width = 72 + 26;
            if (target.nodeName.toLowerCase() == 'li') {
                index = containerLists.indexOf(target);
                if (index === 0) {
                    left = 0;
                } else {
                    left = (index - 1) * width + 54;
                }
                navLine.style.left = left + 'rem';
            }
            navContainer.addEventListener('mouseleave',
                function() {
                    setTimeout(function() {
                            navLine.style.left = '0rem';
                        },
                        100);
                },
                false);
        },
        false);
}
(function(){$.ajax({
	type:"get",
	url:"/news?num=2",
	contentType: "application/json",
	           
	    data: "{'index': '" + index + "', 'status': '" + status + "'}",
	    dataType: 'json',
	    success: function (data) {
	        data = JSON.parse(data.d);
	        console.log(data) ; 
	    }
})});



v



