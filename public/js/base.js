function resize(originsize,type){
    var type=type||"x";
    if(type=="x"){
        var widths=document.documentElement.clientWidth;
        var size=widths/originsize*100;
    }else if(type=="y"){
        var heights=document.documentElement.clientHeight;
        var size=heights/originsize*100;
    }
    document.getElementsByTagName("html")[0].style.fontSize=size+"px";
}
window.onload=function(){
    resize(750,"x")


}