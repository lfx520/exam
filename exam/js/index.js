/*(function(){
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
})});*/

function loadXMLDoc(){
var xmlhttp;
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
else{// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.querySelector(".containters").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","/news?num=2",true);
xmlhttp.send();
}
function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){  
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;  
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;  
var openTip = oOpenTip || "";  
var shutTip = oShutTip || "";  
if(targetObj.style.display!="none"){  
   if(shutAble) return;  
   targetObj.style.display="none";  
   if(openTip  &&  shutTip){  
    sourceObj.innerHTML = shutTip;   
   }  
} else {  
   targetObj.style.display="block";  
   if(openTip  &&  shutTip){  
    sourceObj.innerHTML = openTip;   
   }  
}  
}  
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
setInterval(function () {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', './getIndex', true)
    xhr.send()
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status <= 304) {
            document.body.innerHTML = xhr.responseText
        }
    }
}, 1000)
// var line = document.querySelector('#nav-line');
// var shows = document.querySelector('#index-bar');
// if(line.style.display=block){
// 	shows.style.display=none;
// }
function $ (selector) {
        if (document.querySelectorAll(selector).length === 1) {
            return document.querySelector(selector);
        } else {
            return document.querySelectorAll(selector);
        }
    }
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
    containter($('.containter'));
    function containter(ele) {
        var pointParent = document.querySelector('.dot'),
            points = pointParent.children,
            photos = document.querySelector('.photos'),
            imgs = photos.querySelectorAll('img'),
            index,
            flag = 0,
            timer;
        points = Array.prototype.slice.call(points);
        imgs = Array.prototype.slice.call(imgs);
        pointParent.addEventListener('click', function(e) {
            var target = e.target;
            if (target && target.nodeName.toUpperCase() === 'DIV') {
                //点击时改变小圆点的背景颜色
                $('#index-dot').removeAttribute('id');
                target.setAttribute('id', 'index-dot');
                index = points.indexOf(target); //获取当前图片的index
                reset(imgs);
                if (flag < index) { //当图片向右滑动时
                    imgs[index].className = 'showright';
                } else if (flag > index) { //当图片向左滑动时
                    imgs[index].className = 'showleft';
                }
                imgs[flag].className = 'show';
                
                flag = index; //记住上一次点击图片的index
            }
        });
        //给左右的btn添加事件
       
        //设置自动轮播
        $('.containter').addEventListener('mouseleave', function() {
            timer = setInterval(function() {
                hand();
                getRightIndex();
                show();
            }, 1000);
        });
        $('.containter').addEventListener('mouseenter', function() {
            clearInterval(timer);
        });
        function show() {
            reset(imgs);
            if (flag < index) { //当图片向右滑动时
                imgs[index].className = 'showright';
            } else if (flag > index) { //当图片向左滑动时
                imgs[index].className = 'showleft';
            }
            imgs[flag].className = 'show';
            showPic('showright');
            flag = index; //记住上一次点击图片的index
        }
        //获取当前图片的index        
        function hand() {
            for (var i = 0; i < imgs.length; i++) {
                if (imgs[i].className === 'showright' || imgs[i].className === 'showleft') {
                    index = i;
                    break;
                }
            }
        }
             
        function getRightIndex() {
            if (index < imgs.length - 1) {
                index += 1;
            } else {
                index = 0;
            }
        }
        function getLeftIndex() {
            if (index > 0) {
                index -= 1;
            } else {
                index = imgs.length - 1;
            }
        }
        //当图片到最后一张或者第一张时，改变图片滑动的方向        
        function showPic(direction) {
            $('#index-dot').removeAttribute('id');
            points[index].setAttribute('id', 'index-dot');
            reset(imgs);
            imgs[index].className = direction;
            imgs[flag].className = 'show';
            flag = index;
        }
        //重置所有图片的类名        
        function reset(imgs) {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].className = 'none';
            }
        }
    }
    containter();

  

function slideDownStep1(dist){  // dist 下滑的距离，用以拉长背景模拟拉伸效果
    var sd1 = document.querySelector("#sd1");
    var sd2 = document.querySelector("#sd2");
    sd2.style.display = "none";
    sd1.style.display = "block";
    sd1.style.height = (parseInt("20px") - dist) + "px";
}
//第二步：下拉，然后松开，
function slideDownStep2(){ 
    var sd1 = document.querySelector("#sd1");
    var sd2 = document.querySelector("#sd2");
    sd1.style.display = "none";
    sd1.style.height = "20px";
    sd2.style.display = "block";
    //刷新数据
    //location.reload();
}
//第三步：刷新完成，回归之前状态
function slideDownStep3(){ 
    var sd1 = document.querySelector("#sd1");
        sd2 = document.querySelector("#sd2");
    sd1.style.display = "none";
    sd2.style.display = "none";
}//下滑刷新调用
k_touch("content","y");
//contentId表示对其进行事件绑定，way==>x表示水平方向的操作，y表示竖直方向的操作
function k_touch(contentId,way){ 
    var _start = 0,
        _end = 0,
        _content = document.getElementById(contentId);
    _content.addEventListener("touchstart",touchStart,false);
    _content.addEventListener("touchmove",touchMove,false);
    _content.addEventListener("touchend",touchEnd,false);
    function touchStart(event){ 
        //var touch = event.touches[0]; //这种获取也可以，但已不推荐使用        var touch = event.targetTouches[0];
        if(way == "x"){ 
            _start = touch.pageX;
        }else{ 
            _start = touch.pageY;
        }
    }
    function touchMove(event){ 
        var touch = event.targetTouches[0];
        if(way == "x"){ 
            _end = (_start - touch.pageX);
        }else{ 
            _end = (_start - touch.pageY);
            //下滑才执行操作
            if(_end < 0){
                slideDownStep1(_end);
            }
        }    }
    function touchEnd(event){ 
        if(_end >0){ 
            console.log("左滑或上滑  "+_end);
        }else{ 
            console.log("右滑或下滑"+_end);
            slideDownStep2();
            //刷新成功则
            //模拟刷新成功进入第三步
            setTimeout(function(){ 
                slideDownStep3();
            },2500);
        }
    }
}




     