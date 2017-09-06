$(function () {
    banner();
    tab();
    $('[data-toggle="tooltip"]').tooltip();

});

var banner=function () {
    /*图片的路径数据*/
    var data=[
        {
            pi:'images/slide_01_2000x410.jpg',
            mi:'images/slide_01_640x340.jpg'
        },
        {
            pi:'images/slide_02_2000x410.jpg',
            mi:'images/slide_02_640x340.jpg'
        },
        {
            pi:'images/slide_03_2000x410.jpg',
            mi:'images/slide_03_640x340.jpg'
        },
        {
            pi:'images/slide_04_2000x410.jpg',
            mi:'images/slide_04_640x340.jpg'
        }
    ]

    var render= function () {
        /*判断是不是移动端屏幕*/
        var ism=$(window).width()<768?true:false;
        /*初始化*/
        var pointHtml='';
        var imageHtml='';
        /*遍历*/
        $.each(data,function (i,item) {
            pointHtml+='<li '+(i==0?'class="active"':'')+
                ' data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>'
            imageHtml+='<div class="item '+(i==0?'active':'')+'">';
            if(ism) {
                /*小屏直接放图片标签*/
                imageHtml+='<a href="#" class="small"><img src="'+item.mi+'"></a>';
            }else {
                /*不是小屏放背景图*/
                imageHtml+='<a href="#" class="big" style="background-image: url('+item.pi+')"></a>';
            }
            imageHtml+='</div>';
        });
        /*追加*/
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }
    /*屏幕尺寸发生改变触发事件*/
    $(window).on('resize',function () {
        render();
    }).trigger('resize');
};

var tab=function () {
    /*获取父元素*/
    var $parent=$('.nav-tabs-parent');
    /*获取整个ul*/
    var $child=$parent.children('ul');
    /*获取ul中所有的li*/
    var $lis=$child.find('li');

    /*初始化一个宽度*/
    var width=0;
    $lis.each(function(i,item){
        width+=$(item).outerWidth(true);
    });
    $child.width(width);
    /*iscroll插件*/
    new IScroll('.nav-tabs-parent', {
        scrollX:true,
        scrollY:false
    })
};