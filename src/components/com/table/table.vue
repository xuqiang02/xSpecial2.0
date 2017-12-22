<template>
	<div :style="[c.css,{'width':c.seat.w+'px','height':c.seat.h+'px','top':c.seat.y+'px','left':c.seat.x+'px','z-index':c.seat.z}]" class="table-item">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tbody>
			<tr v-for="item in c.tableData">
			    <td :style="{'color':c.css['color'],'font-size':c.css['font-size'],'line-height':c.css['line-height']}" width="168">{{item.name}}</td>
			    <td :style="{'color':c.css['color'],'font-size':c.css['font-size'],'line-height':c.css['line-height']}" width="285">{{item.tel}}</td>
			    <td :style="{'color':c.css['color'],'font-size':c.css['font-size'],'line-height':c.css['line-height']}" width="536">{{item.place}}</td>
			 </tr>
            </tbody>
        </table>
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
        'ctype': 'table',
        'data': {
	        'seat': {       
		        'x':1,
		        'y':1,
		        'w':980,
		        'h':300,
		        'z':1
	        },
	        'css': {
	          'position':'absolute',
	          'padding':'20px',
	          'background':'#fff',
	          'line-height':'36px',
	          'box-sizing':'border-box',
	          'font-size':'14px',
	          'color':'#000'
	        },
	        'tableData': [
	        	{
				'name':'武汉开泰专营店',
				'tel':'027-65660885',
				'place':'武汉市江岸区黄浦科技园特6号'
				},
				{
				'name':'武汉宏信车友专营店',
				'tel':'4001-163-580',
				'place':'武汉市江夏区江夏大道26号庙山新村'
				},
				{
				'name':'武汉三环易通专营店',
				'tel':'027-88870069',
				'place':'武汉市洪山区白沙洲青菱乡红霞村动力产业园(绅宝二手车交易市场内)'
				},
				{
				'name':'武汉三环华通专营店',
				'tel':'027-87677996',
				'place':'武汉市洪山区雄楚大街246号（新公安厅斜对面）'
				},
				{
				'name':'武汉三环诚通专营店',
				'tel':'027-83601991',
				'place':'武汉市硚口区长丰大道常码头428号（武汉爱之家二手车市场内南1-2栋）'
				},
				{
				'name':'武汉三环劲通专营店',
				'tel':'027-84888823',
				'place':'武汉市汉阳区龙阳大道三环工业园特1号（地铁三号线陶家岭C1出口）'
				},
				{
				'name':'武汉三环轩通专营店',
				'tel':'027-59595818',
				'place':'武汉市光谷大道藏龙岛九凤街1号（武汉铁路学院旁）'
				},
				{
				'name':'武汉裕信专营店',
				'tel':'027-83089696',
				'place':'武汉市硚口区工农路特1号（轻轨沿线宜家斜对面）'
				},
				{
				'name':'鄂州三环劲通江碧专营店',
				'tel':'0711-3358858',
				'place':'鄂州市花园路汽车综合市场7号楼'
				},
				{
				'name':'黄冈恒信德龙专营店',
				'tel':'0713-8810666',
				'place':'黄冈市明珠大道86号（鄂东职业技术学院斜对面）'
				},
				{
				'name':'黄石乾通黄金山专营店',
				'tel':'0741-8668998',
				'place':'黄石市黄金山开发区大棋路汽车市场'
				},
				{
				'name':'黄石恒信东顺专营店',
				'tel':'0714-6386666',
				'place':'黄石市团城山开发区大泉路149号'
				},
				{
				'name':'咸宁恒信南星专营店',
				'tel':'0715-8388111',
				'place':'咸宁市咸安区京珠连结线桂乡大道特9号（顺通驾校斜对面）'
				},
				{
				'name':'孝感裕丰专营店',
				'tel':'0712-2586666',
				'place':'孝感市孝南经济开发区107国道复线仙女湖东路'
				},
				{
				'name':'随州东盛专营店',
				'tel':'0722-3285555',
				'place':'随州市经济开发区季梁大道东风日产东盛专营店'
				},
				{
				'name':'恩施麟觉专营店',
				'tel':'0718-8028818',
				'place':'恩施市金桂大道汽车商贸城127号'
				},
				{
				'name':'荆门风雅专营店',
				'tel':'0724-2223456',
				'place':'荆门市月亮湖路与江山路交汇处西南角'
				},
				{
				'name':'荆州恒信星龙专营店',
				'tel':'0716-8490966',
				'place':'荆州市荆沙大道马河渔场内'
				},
				{
				'name':'潜江三环劲通天驰专营店',
				'tel':'0728-6271333',
				'place':'潜江市潜阳西路39号天驰汽车大市场'
				},
				{
				'name':'十堰东贸专营店',
				'tel':'0719-8875906',
				'place':'十堰市茅箭区朝阳南路15号'
				},
				{
				'name':'十堰轩威专营店',
				'tel':'0719-8580366',
				'place':'十堰市张湾工业新区凯迪拉克大街9号'
				},
				{
				'name':'襄阳车城专营店',
				'tel':'0710-3311113',
				'place':'襄阳市襄州区钻石大道69号义乌路西200米'
				},
				{
				'name':'襄阳樊城专营店',
				'tel':'0710--3113311',
				'place':'襄阳市樊城区邓城大道高速公路西出口西行500米'
				},
				{
				'name':'仙桃三环劲通仙桃专营店',
				'tel':'0728-3321612',
				'place':'仙桃市复州大道126号（原八一修造厂）'
				},
				{
				'name':'宜昌交运专营店',
				'tel':'0717-6906568',
				'place':'宜昌市东山开发区发展大道59号'
				},
				{
				'name':'宜昌交运麟汇专营店',
				'tel':'0717-6916518',
				'place':'宜昌市港窑路5号'
				}
	        ]
        } 
    })


	export default {
		name: 'tableItem',
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
	.table-item {
		float: left;
		width: 100%;
		text-align: right;
	    height: 300px;
   		overflow-y: scroll;
	}
	.table-item table tr td {
		color: #676767;
		line-height: 36px;
		text-align: left;
	}
</style>