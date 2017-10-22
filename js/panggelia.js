/**
 * Created by linwenjie on 2017/3/7.
 */
$(function() {
    var nowHeight=$("#imgChange").height();
    var nowWidth=$("#imgChange").width();
    var screenWidth=$(document.body).width();
    var index=nowWidth/nowHeight;

    $('body').bind('touchstart',function(e){
        startX = e.originalEvent.changedTouches[0].pageX,
            startY = e.originalEvent.changedTouches[0].pageY;

    });
    $('body').bind('touchmove',function(e){

        endX = e.originalEvent.changedTouches[0].pageX,
            endY = e.originalEvent.changedTouches[0].pageY;

        distanceX = endX-startX;
        distanceY = endY-startY;

        if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY<0){

            if($("#imgChange").height()>nowHeight&&$("#imgChange").width()>=nowWidth){
                var newHeight=nowHeight+distanceY;
                var newWidth=newHeight*index;
                var newLeft=(newWidth-screenWidth)/2.0;
                if(newWidth<nowWidth){
                    $("#imgChange").css('marginLeft',0);
                    $("#imgChange").width(nowWidth+'px');
                    $("#imgChange").height(nowHeight+'px');
                }else{
                    $("#imgChange").css('marginLeft',newLeft);
                    $("#imgChange").height(newHeight+'px');
                    $("#imgChange").width(newWidth+'px');
                }
            }

        }else if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY>0){

            newHeight=nowHeight+distanceY;
            newWidth=newHeight*index;
            newLeft=-(newWidth-screenWidth)/2.0+'px';
            if(distanceY<$(document.body).height()*1/4.0){
                $("#imgChange").css('marginLeft',newLeft);
                $("#imgChange").height(newHeight+'px');
                $("#imgChange").width(newWidth+'px');
            }
        }else{}
        $('body').bind('touchend',function(e){
            $("#imgChange").css('marginLeft',0);
            $("#imgChange").height(nowHeight+'px');
            $("#imgChange").width(nowWidth+'px');
        });
    });

    (function() {//��ȡͼƬԭʼ�ߴ�
        // ��ȡ�ߴ��С
        var imgReady = (function () {
            var list = [], intervalId = null,
            // ����ִ�ж���
                tick = function () {
                    var i = 0;
                    for (; i < list.length; i++) {
                        list[i].end ? list.splice(i--, 1) : list[i]();
                    };
                    !list.length && stop();
                },
            // ֹͣ���ж�ʱ������
                stop = function () {
                    clearInterval(intervalId);
                    intervalId = null;
                };
            return function (url, ready, load, error) {
                var onready, width, height, newWidth, newHeight,img = new Image();
                img.src = url;
                // ���ͼƬ�����棬��ֱ�ӷ��ػ�������
                if (img.complete) {
                    ready.call(img);
                    load && load.call(img);
                    return;
                };
                width = img.width;
                height = img.height;
                img.onerror = function () {
                    error && error.call(img);
                    onready.end = true;
                    img = img.onload = img.onerror = null;
                };
                // ͼƬ�ߴ����
                onready = function () {
                    newWidth = img.width;
                    newHeight = img.height;
                    if (newWidth !== width || newHeight !== height || newWidth * newHeight > 1024){
                        // ���ͼƬ�Ѿ��������ط����ؿ�ʹ��������
                        ready.call(img);
                        onready.end = true;
                    };
                };
                onready();
                // ��ȫ������ϵ��¼�
                img.onload = function () {
                    // onload�ڶ�ʱ��ʱ��Χ�ڿ��ܱ�onready��
                    // ������м�鲢��֤onready����ִ��
                    !onready.end && onready();
                    load && load.call(img);
                    // IE gif������ѭ��ִ��onload���ÿ�onload����
                    img = img.onload = img.onerror = null;
                };
                // ��������ж���ִ��
                if (!onready.end) {
                    list.push(onready);
                    // ���ۺ�ʱֻ�������һ����ʱ��������������������
                    if (intervalId === null) intervalId = setInterval(tick, 40);
                };
            };
        })();
        $(".article img").each(function(index, el) {//�Զ���??������ͼƬ����������ʽ
            var self = $(this);
            imgReady($(this).attr("src"), function () {
                $(self).wrap('<div class="gallery"><a href="'+$(self).attr("src")+'" data-size="'+this.width+"x"+this.height+'" data-med="'+$(self).attr("src")+'" data-med-size="'+this.width+"x"+this.height+'"></div>');
            });
        });
    })();

})

