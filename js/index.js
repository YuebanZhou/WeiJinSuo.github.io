$(function () {
    banner();
    tab();
    $('[data-toggle="tooltip"]').tooltip();

});

var banner=function () {
    /*ͼƬ��·������*/
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
        /*�ж��ǲ����ƶ�����Ļ*/
        var ism=$(window).width()<768?true:false;
        /*��ʼ��*/
        var pointHtml='';
        var imageHtml='';
        /*����*/
        $.each(data,function (i,item) {
            pointHtml+='<li '+(i==0?'class="active"':'')+
                ' data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>'
            imageHtml+='<div class="item '+(i==0?'active':'')+'">';
            if(ism) {
                /*С��ֱ�ӷ�ͼƬ��ǩ*/
                imageHtml+='<a href="#" class="small"><img src="'+item.mi+'"></a>';
            }else {
                /*����С���ű���ͼ*/
                imageHtml+='<a href="#" class="big" style="background-image: url('+item.pi+')"></a>';
            }
            imageHtml+='</div>';
        });
        /*׷��*/
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);
    }
    /*��Ļ�ߴ緢���ı䴥���¼�*/
    $(window).on('resize',function () {
        render();
    }).trigger('resize');
};

var tab=function () {
    /*��ȡ��Ԫ��*/
    var $parent=$('.nav-tabs-parent');
    /*��ȡ����ul*/
    var $child=$parent.children('ul');
    /*��ȡul�����е�li*/
    var $lis=$child.find('li');

    /*��ʼ��һ�����*/
    var width=0;
    $lis.each(function(i,item){
        width+=$(item).outerWidth(true);
    });
    $child.width(width);
    /*iscroll���*/
    new IScroll('.nav-tabs-parent', {
        scrollX:true,
        scrollY:false
    })
};