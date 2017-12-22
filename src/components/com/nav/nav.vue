<template>
	<div :style="[c.css,{'width':c.seat.w+'px','height':c.seat.h+'px','top':c.seat.y+'px','left':c.seat.x+'px','z-index':c.seat.z}]" class="nav-item">
		<h3><img :src="c.logo"></h3>
		{{c.title}}
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
        'ctype': 'nav',
        'data': {
	        'seat': {       
		        'x':1,
		        'y':1,
		        'w':400,
		        'h':80,
		        'z':1
	        },
	        'title':'导航LOGO-1',
	        'logo':'//p02czd3xc.bkt.clouddn.com/logo.png',
	        'css': {
	          'position':'absolute',
	          'padding':'0 10px',
	          'margin':'0',
	          'background':'#fff',
	          'line-height':'80px',
	          'box-sizing':'border-box',
	          'font-size':'14px',
	          'color':'#000'
	        }
        } 
    })


	export default {
		name: 'navItem',
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
	.nav-item {
		float: left;
		width: 100%;
		text-align: right;
	}
	.nav-item h3 {
		float:left;
		margin: 0;
	}
	.nav-item h3 img {
		vertical-align: middle;
	}
</style>