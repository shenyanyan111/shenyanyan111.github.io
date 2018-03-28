 //日期筛选
    function showdate(){
        ;(function($) {
            $.init();
            var result = $('#result')[0];
            var result1 = $('.time-rili')[0];
            var btns = $('.btn');
            var optionsJson = '{"type":"date","beginYear":1980,"endYear":2019}';
            var options = JSON.parse(optionsJson);
            
            options.buttons = ['重置',''];
            options.labels = ['年', '月'];
            var picker = new $.DtPicker(options);
            picker.show(function(rs) {
                /*
                 * rs.value 拼合后的 value
                 * rs.text 拼合后的 text
                 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
                 * rs.m 月，用法同年
                 * rs.d 日，用法同年
                 * rs.h 时，用法同年
                 * rs.i 分（minutes 的第二个字母），用法同年
                 */
                result.innerText = rs.text;
                result1.innerText = rs.text;
                getparams(rs.text)
                /* 
                 * 返回 false 可以阻止选择框的关闭
                 * return false;
                 */
                /*
                 * 释放组件资源，释放后将将不能再操作组件
                 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
                 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
                 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
                 */
                picker.dispose();
            });
                    
            
        })(mui);    
        
        
    }
    $("#date-pick").click(function(){
        $(".date-box").show();
        $(".date-box").animate({
            left:"0.35rem"
        },500)
        showdate()
    })
    // $(".date-m-cons").each(function(){
    //     $(this).find("li").click(function(){
    //         $(this).addClass("s-cur").siblings().removeClass("s-cur")
    //     })
        
    // })
    function getparams(date){    //date为所选日期，通过此重新加载数据
        
        //重新渲染数据

    }