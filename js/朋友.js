/**
 * Created by linwenjie on 2017/3/12.
 */

window.onload = function (){
    var aBtn=document.getElementsByTagName('button');
    for(var i=0;i<2;i++){
        aBtn[i].onclick=function(){
            for(var i=0;i<2;i++){
                aBtn[i].id='';
            }
            this.id='active';
        }
    }
    var oUl1 = document.getElementById('list_a');
    var aH21 = oUl1.getElementsByTagName('h2');
    var aUl1 = oUl1.getElementsByTagName('ul');
    var aLi1 = null;

    var arrLi1 = [];

    for( var i=0; i<aH21.length; i++ ){
        aH21[i].index = i;
        aH21[i].onclick = function (){
            if( this.className == '' ){
                aUl1[this.index].style.display = 'block';
                this.className = 'active';
            } else {
                aUl1[this.index].style.display = 'none';
                this.className = '';
            }
        };
    }

    for( var i=0; i<aUl1.length; i++ ){
        aLi1 = aUl1[i].getElementsByTagName('li');
        for( var j=0; j<aLi1.length; j++ ){
            arrLi.push( aLi1[j] );
        }
    }

    for( var i=0; i<arrLi1.length; i++ ){
        arrLi1[i].onclick = function (){

            for( var i=0; i<arrLi1.length; i++ ){
                if( arrLi1[i] !=this ){
                    arrLi1[i].className = '';
                }
            }
            if( this.className == '' ){
                this.className = 'hover';
            }else{
                this.className = '';
            }
        };
    }
};

