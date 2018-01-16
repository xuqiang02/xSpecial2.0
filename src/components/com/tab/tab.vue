<template>
	<div class="tab-item"  :style="[c.css,{'width':c.seat.w+'px','top':c.seat.y+'px','left':c.seat.x+'px','z-index':c.seat.z}]">
		<div style="pointer-events:none;">
		  <el-carousel :interval="4000" :autoplay="false" type="card" height="c.seat.w+'px'">
		    <el-carousel-item v-for="item in c.bannerArr" :key="item.img">
		      <h3><img v-bind:src="item.img" width="100%"></h3>
		    </el-carousel-item>
		  </el-carousel>
		</div>
	</div>
</template>


<script>
	import defaultData from '../../mock/mock'
		/**
	 * [定义当前组件初始化数据]
	 * ctype     组件类型：需要和editItem的navData中type相匹配
	 * data      组件数据：seat、css必填格式，其他为自定义属性
	 * seat      统一格式：坐标,宽高
	 * css       自定义样式：css样式
	 * interval  自定义属性：自动切换的时间间隔，单位为毫秒
	 * bannerArr 自定义属性：轮播图图片数据
	 * xu.qiang  2017.12.20
	 */
	defaultData.add({
        'ctype': 'tab',
        'data': {
	        'seat': {       
		        'x':1,
		        'y':1,
		        'w':900,
		        'h':406,
		        'z':1
	        },
	        'css': {
	          'position':'absolute',
	          'padding':'40px',
	          'background':'#fff',
	          'box-sizing':'border-box'
	        },
	        'bannerArr': [
	        {
	        	'img':'http://pic.xcarimg.com/img/07news/2017/09/14/de786478a8df2dec4facbd24daeb8a69.jpg'
	        },
	        {
	        	'img':'http://pic.xcarimg.com/img/07news/2017/09/14/f069360e9a95e34b19bddd3fcaa9f2f9.jpg'
	        },
	        {
	        	'img':'http://pic.xcarimg.com/img/07news/2017/09/14/55384c0b418fd83fb1f36cce68d2472c.jpg'
	        },
	        {
	        	'img':'http://pic.xcarimg.com/img/07news/2017/09/14/71ae424c645f8f5811d3622bfe8a8368.jpg'
	        },
	        {
	        	'img':'http://pic.xcarimg.com/img/07news/2017/09/14/6130b37301483b0a358bcf69166a181f.jpg'
	        }
	        ]
	        
        } 
    })
	export default {
		name: 'tabItem',
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    line-height: 200px;
    margin: 0;
    background: #fff;
  }
</style>