$(function(){
    function resize(originSize,type){
        var width=document.documentElement.clientWidth;
        var height=document.documentElement.clientHeight;
        var htmls=document.getElementsByTagName("html")[0];
        var scale;
        type=type||"X";
        if(type=="X"){
            scale=width/originSize*100;
        }else if(type=="Y"){
            scale=height/originSize*100;
        }
        htmls.style.fontSize=scale+"px";
    }
    resize(1334,"Y");
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: 5000,
        pagination : '.swiper-pagination'});
    var mySwiper1 = new Swiper ('.swiper-container1', {
        slidesPerView : 3,
        spaceBetween : 20});


       var  myScroll=new IScroll("#wrapper",{
            mouseWheel: true,
        });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false)

})