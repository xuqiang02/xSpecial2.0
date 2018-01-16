<template>
	<div :style="[c.css,{'width':c.seat.w+'px','height':c.seat.h+'px','top':c.seat.y+'px','left':c.seat.x+'px','z-index':c.seat.z}]" class="form-item">
		<form method="post" action="data/form/save1.php" id="form1" ajax="1">
		<div class="form">
			<div class="item">
				<span>姓名</span><input class="txt" msg="请输入姓名" name="name" type="text">
			</div>
			<div class="item">
				<span>电话</span><input class="txt" _type="phone" msg="请输入电话" name="mobile" type="text">
			</div>
			<div class="item">
				<select class="select1" msg="请选择省份" id="p" _type_="linkage" keys="jxcQQ" next="$('#p,#c,#j')" name="province">
					<option value="">-请选择-</option>
					<option value="湖北省">湖北省</option>
				</select>
				<select class="select2" msg="请选择城市" id="c" name="city" _type_="city">
					<option value="">--城市--</option>
				</select>
			</div>
			<div class="item">
				<span style="width: 92px;">购车时间</span>
				<select class="select4" name="buy_time" msg="请选择购车时间" _type_="[-请选择-,一个月,三个月,半年,一年内]">
					<option value="">-请选择-</option>
					<option value="一个月">一个月</option>
					<option value="三个月">三个月</option>
					<option value="半年">半年</option>
					<option value="一年内">一年内</option>
				</select>
			</div>
			<input type="hidden" name="car_xh" value="">
			<div class="item">
				<span style="width: 75px; text-align: right">经销商</span>
				<select class="select3" msg="请选择经销商" name="other" id="j">
					<option value="">-请选择-</option>
				</select>
			</div>
			<div class="item">
				<span style="width: 92px;">意向车型</span>
				<select class="select4" msg="请选择意向车型" name="car_type" _type_="[-请选择-,劲客,玛驰,蓝鸟,新楼兰,全新逍客,骊威,西玛,新生代TIIDA,全新天籁,全新天籁公爵,新奇骏,轩逸经典,阳光,新骐达,全新轩逸]">
					<option value="">-请选择-</option>
					<option value="劲客">劲客</option>
					<option value="玛驰">玛驰</option>
					<option value="蓝鸟">蓝鸟</option>
					<option value="新楼兰">新楼兰</option>
					<option value="全新逍客">全新逍客</option>
					<option value="骊威">骊威</option>
					<option value="西玛">西玛</option>
					<option value="新生代TIIDA">新生代TIIDA</option>
					<option value="全新天籁">全新天籁</option>
					<option value="全新天籁公爵">全新天籁公爵</option>
					<option value="新奇骏">新奇骏</option>
					<option value="轩逸经典">轩逸经典</option>
					<option value="阳光">阳光</option>
					<option value="新骐达">新骐达</option>
					<option value="全新轩逸">全新轩逸</option>
				</select>
			</div>
			<a href="javascript:void(0);" class="but"></a>
		</div>
	</form>
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
        'ctype': 'form',
        'data': {
	        'seat': {       
		        'x':1,
		        'y':1,
		        'w':370,
		        'h':460,
		        'z':1
	        },
	        'css': {
	          'position':'absolute',
	          'margin':'0',
	          'padding':'20px',
	          'background':'#fff',
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
	.form-item {
		position: absolute;
		width: 100%;
		text-align: right;
	}
	.form {
		width: 330px;
		float: right;
		display: inline;
		pointer-events:none;
	}

	.form .item {
		width: 100%;
		height: 49px;
		padding-bottom: 11px;
		float: left;
		display: inline
	}

	.form .item span {
		width: 55px;
		text-align: right;
		float: left;
		display: inline;
		font: 18px/49px 'Microsoft YaHei';
		color: #000
	}

	.form .item .txt {
		width: 215px;
		float: left;
		margin-left: 10px;
		height: 49px;
		font: 18px/49px 'Microsoft YaHei';
		color: #000;
		background: none;
		border: 0
	}

	.form .item .txt1 {
		width: 174px
	}

	.form .item .select1 {
		width: 117px;
		height: 49px;
		float: left;
		display: inline;
		background: none;
		font-size: 18px;
		text-indent: 15px;
		border: none;
		outline: none;
	}

	.form .item .select2 {
		width: 105px;
		height: 49px;
		float: left;
		display: inline;
		margin-left: 59px;
		background: none;
		font-size: 18px;
		text-indent: 15px;
		border: none;
		outline: none;
	}

	.form .item .select3 {
		width: 206px;
		height: 49px;
		float: left;
		display: inline;
		border: none;
		background: none;
		font-size: 18px;
		text-indent: 15px;
		outline: none;
		border: none;
	}

	.form .item .select4 {
		width: 186px;
		height: 49px;
		float: left;
		display: inline;
		background: none;
		font-size: 18px;
		text-indent: 15px;
		border: none;
		outline: none;
	}

	.form .but {
		background: url("http://topic.xcar.com.cn/201709/rctgh/images/but.jpg") no-repeat;
		width: 330px;
		height: 50px;
		float: left;
		display: inline;
		overflow: hidden;
		margin-top: 10px;
		outline: none;
	}

</style>