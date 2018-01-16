<template>
	<div :style="[c.css,{'width':c.seat.w+'px','height':c.seat.h+'px','top':c.seat.y+'px','left':c.seat.x+'px','z-index':c.seat.z}]" class="video-item">
		<iframe width="100%" height="100%" scrolling="no" allowtransparency="yes" frameborder="0" marginwidth="0" marginheight="0" v-bind:src="c.video+'&width='+(c.seat.w-20)+'&height='+(c.seat.h-20)"></iframe>
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
        'ctype': 'video',
        'data': {
	        'seat': {       
		        'x':1,
		        'y':1,
		        'w':547,
		        'h':366,
		        'z':1
	        },
	        'video':'http://xtv.xcar.com.cn/player.php?vid=XMjk3ODczNTU5Ng==',
	        'css': {
	          'position':'absolute',
	          'padding':'10px',
	          'margin':'0',
	          'background':'#fff',
	          'box-sizing':'border-box'
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
	.video-item {
		float: left;
		width: 100%;
		text-align: right;
	}
	.video-item iframe{
		pointer-events:none;
	}
</style>