$(function(){
	
	//关闭顶部提示
	$(".close").click(function(){
		$(this).parent(".notice").slideUp()
	})
	//分享
	 $(".fixd-tip").click(function(){
	 	//调原生方法
	 })
	
	//隐藏详情
	$(".hd-text").click(function(){
		if($(this).hasClass("shou-all")){
			$(".content-box").slideDown();
			$(this).removeClass("shou-all");
			$(this).text("隐藏详情")
		}else{
			$(".content-box").slideUp();
			$(this).addClass("shou-all");
			$(this).text("");
		}
	})
	//柱状图轮播
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: false,//可选选项，自动滑动
		pagination : '.swiper-pagination'
	})
	//曲线小计卡片头部小圆点分配
	var pointcolors=["#f76120","#ffcc6a","#267ef3","#8dbf1d"];
	$(".point").each(function(i,v){
		var cindex=i%4;
		var color=pointcolors[cindex];
		$(this).css("background",color)
	})
	
	//table表格：
	//	数据列表宽度控制
	$('.data-table ul li').each(function() {
		var tabLength = $(this).find('span').length;
		var tabWidth = $('.data-table').width();
		
		if(tabLength <= 4) { 
			$('.data-table ul li span').width(parseInt(tabWidth / tabLength));
		} else {
			$('.data-table ul li span').width(parseInt(tabWidth / 4));
			$('.data-table ul li').width($('.data-table ul li span').width() * tabLength);
		};
	});
	//	数据标题宽度控制
	$('.data-table .table-title').each(function() {
		var tabLength = $(this).find('span').length;
		var tabWidth = $('.data-table').width();
		
		if(tabLength <= 4) {
			$('.data-table .table-title span').width(parseInt(tabWidth / tabLength));
		} else {
			var eachwidth=parseInt(tabWidth / 4);
			$('.data-table .table-title span').width(eachwidth);
			$('.data-table .table-title span ul').width(eachwidth*0.85);
			$('.data-table .table-title span ul li').width(eachwidth*0.85);
			$('.data-table .table-title span .t-updown').width(eachwidth*0.15);
			$('.data-table .table-title').width($('.data-table .table-title span').width() * tabLength);
		};
	})
	//表格排序
	$(".data-table").each(function(){
		var $this=$(this);
		$this.find(".table-title .t-updown").each(function(){
			$(this).click(function(){
				if($(this).hasClass("t-down")){
					$(this).removeClass("t-down").addClass("t-up");
				}else if($(this).hasClass("t-up")){
					$(this).removeClass("t-down").removeClass("t-up");
				}else{
					$(this).addClass("t-down");
				}
				
			})
		})
	})
	//收起表格
	$(".each-moudle").each(function(){
		var _that=$(this);
		_that.find(".click-hide").click(function(){
			if(!_that.find(".xiaoji").hasClass("hidetable")){
				_that.find(".data-table").slideUp();
				_that.find(".xiaoji").addClass("hidetable");
			}
			_that.find(".xiaoji").click(function(){
				if(_that.find(".xiaoji").hasClass("hidetable")){
					_that.find(".data-table").slideDown();
					$(this).removeClass("hidetable")
				}
				
			})
			
			
		})
	})
	//小计环形百分比
	var value=[0.6,0.5,0.2];
	var gradient={
		color0:["#ff8014", "#ffbd54"],
		color1:["#2375f2", "#00c7fa"]
		
	}
	$('.second.circle').each(function(i,n){
		
		var curcolor=gradient["color"+i];
		$(this).circleProgress({
	    value: value[i],
	    fill:{ gradient: curcolor },
	    size:60,
	    thickness:2,
	    startAngle:-1/2*Math.PI
		}).on('circle-animation-progress', function(event, progress) {
		    $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
		});
			
	})
	
})
