<template>
	<div :style="[c.css,{'width':c.seat.w+'px','height':c.seat.h+'px','top':c.seat.y+'px','left':c.seat.x+'px','z-index':c.seat.z}]" class="foot-item">
		  <a href="http://www.xcar.com.cn/about/us/" target="_blank" onclick="$(this).parents('form').submit();return false;">关于爱卡</a>|<a href="http://www.xcar.com.cn/about/job/" target="_blank" onclick="$(this).parents('form')[0].reset();return false;">招贤纳士</a>|<a href="http://www.xcar.com.cn/about/contact/" target="_blank">联系我们</a>|<a href="http://www.xcar.com.cn/about/links/" target="_blank">友情链接</a>|<a href="http://newcar.xcar.com.cn/" target="_blank">选车中心</a>|<a href="http://newcar.xcar.com.cn/photo/" target="_blank">汽车图片</a>|<a href="http://club.xcar.com.cn/" target="_blank">汽车论坛</a>|<a href="http://www.xcar.com.cn/about/sitemap/" target="_blank">站点地图</a>|<a href="http://my.xcar.com.cn/total_station_feedback.php" target="_blank">意见反馈</a>|<a href="http://www.xcar.com.cn/chezhan/beijing/" target="_blank">北京车展</a>|<a href="http://www.xcar.com.cn/chezhan/guangzhou/" target="_blank">广州车展</a><br>
		  联系地址：北京市朝阳区北四环中路27号盘古大观写字楼A座17F 邮编：100101 电话：010-82616677 传真：010-62556006<a href="http://www.xcar.com.cn/register/terms.htm" target="_blank">用户服务协议</a><a href="http://www.xcar.com.cn/register/yinsi.htm" target="_blank">隐私权声明</a> <br>
		  2002-2017 www.xcar.com.cn All rights reserved. 北京智德典康电子商务有限公司（爱卡汽车） 版权所有.<input id="ICP" value="京ICP证：161398 号" msg="请选择2002" name="other" type="hidden"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802023251" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="http://pic.xcarimg.com/img/07news/2017/04/21/457569f0a77c57f56dbc337a1ead2f68.png" style="float:left;">京公网安备 11010802023251号</a><br>互联网违法和不良信息举报方式：电话：010-82671035  邮箱：complaint@xcar.com.cn
	</div>
</template>

<script>
	import defaultData from '../../mock/mock'
	/**
	 * [定义当前组件初始化数据]
	 * ctype   组件类型：需要和editItem的navData中type相匹配
	 * data    组件数据：seat、css必填格式，其他为自定义属性
	 * seat    统一格式：坐标,宽高
	 * css     自定义样式：css样式
	 * title   自定义属性：标题
	 * logo    自定义属性：logo
	 * xu.qiang  2017.12.14
	 */
	defaultData.add({
        'ctype': 'foot',
        'data': {
	        'seat': {       
		        'x':1,
		        'y':1,
		        'w':920,
		        'h':110,
		        'z':1
	        },
	        'css': {
	          'position':'absolute',
	          'padding':'20px 10px',
	          'margin':'0',
	          'background':'#fff',
	          'line-height':'18px',
	          'box-sizing':'border-box',
	          'font-size':'13px',
	          'color':'#000'
	        }
        } 
    })


	export default {
		name: 'footItem',
		props: {
			cdata: {
				type: Object,
				default: () => {}
			}
		},
		data () {
			return {
				c:this.cdata
			}
		}
	}
</script>

<style scoped>
	.foot-item {
		float: left;
		width: 100%;
		color: #000;
		text-align: center;
	}
	.foot-item a {
		color: #000;
	    margin: 0px 5px;
	    text-decoration: none;
	}
</style>