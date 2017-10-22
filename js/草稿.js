$(function(){
    //图片滚动
    var myElement= document.getElementById('carousel-example-generic')
    var hm=new Hammer(myElement);
    hm.on("swipeleft",function(){
        $('#carousel-example-generic').carousel('next')
    })
    hm.on("swiperight",function(){
        $('#carousel-example-generic').carousel('prev')
    })

    //
    $(document).ready(function() {
        $(".list_head").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
            return false;
        });
    });


    // 收缩展开效果
    jQuery(function($){
        $(".list_head").click(function(){
            $(this).next(".list_text").animate({height: 'toggle', opacity: 'toggle'}, "slow;").closest("li").siblings("li").children("ul").hide();
        }).next("ul").hide();

    });

    //下拉框收缩
    var OnOff=false;
    var aDiv = document.getElementsByClassName('list')[0];
    var aA = document.getElementsByClassName('list_head');
    //alert(aDiv.scrollTop);
    for(var i=0;i<aA.length;i++){
        aA[i].onclick=function(e){
            OnOff=!OnOff;
            stopPropagation(e);
            document.onclick= function () {
                if(OnOff){
                    for(var j=0;j<aA.length;j++) {
                        document.getElementsByClassName('list_text')[j].style.display = "none";
                        OnOff=!OnOff;
                    }
                }
            };
            aDiv.scrollTop=15+'px';
        }
    }

    //阻止冒泡
    function stopPropagation(e) {
        e = e || window.event;
        if(e.stopPropagation) { //W3C阻止冒泡方法
            e.stopPropagation();
        } else {
            e.cancelBubble = true; //IE阻止冒泡方法
        }
    }


    //菜单选择
    var aLUL = document.getElementsByClassName('list_text');

    var screenwidth=screen.width;
    for(var i=0;i<aLUL.length;i++){

        aLUL[i].style.width=screenwidth+'px';
        aLUL[i].style.marginLeft=-((screenwidth/3)*i)+'px';
        var aLi=aLUL[i].getElementsByTagName('li');
        for(var j=0;j<aLi.length;j++){
            aLi[j].style.width=screenwidth+'px';
        }
        var index=i;
        for(var k=0;k<aLi.length;k++){
            aLi[k].onclick=function(){
                this.parentNode.parentNode.getElementsByTagName("span")[0].innerText=this.innerText;
            }
        }
    }
})

