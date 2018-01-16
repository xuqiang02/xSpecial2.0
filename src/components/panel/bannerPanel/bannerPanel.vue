<template>
    <div class="tab-item">
		<div class="demo-input-suffix" v-if="pdata.seat.x">
		  <label class="el-name" for="">横坐标：</label>
		  <el-input-number v-model.number="pdata.seat.x" :min="0" label="横坐标" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix" v-if="pdata.seat.y">
		  <label class="el-name" for="">纵坐标：</label>
		  <el-input-number v-model.number="pdata.seat.y" :min="0" label="纵坐标" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix" v-if="pdata.seat.w">
		  <label class="el-name" for="">宽：</label>
		  <el-input-number v-model.number="pdata.seat.w" :min="0" label="宽" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix" v-if="pdata.seat.h">
		  <label class="el-name" for="">高：</label>
		  <el-input-number v-model.number="pdata.seat.h" :min="0" label="高" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix">
		  <label class="el-name" for="">层级：</label>
		  <el-input-number v-model.number="pdata.seat.z" label="层级" size="mini"></el-input-number>
		</div>
		
		<div class="demo-input-suffix" >
		  <label class="el-name" for="">图片数量：</label>
		  <el-input
		    placeholder="格式为1"
		    v-model.number="pdata.imgNum" size="mini" >
		  </el-input>
		</div>

		<div class="demo-input-suffix" v-for="item in pdata.imgUrl" > 
			
		  <label class="el-name" for="">图片地址：</label>
		  <el-input
		    placeholder="格式为HTTP://"
		    v-model.trim="item.img" size="mini">
		  </el-input>
		</div>



		<div class="demo-input-suffix" >
		  <label class="el-name" for="">是否显示按钮：</label>
		  <el-checkbox v-model="pdata.bulletShow">显示</el-checkbox>
		</div>
		<div class="demo-input-suffix" v-if="pdata.bulletShow">
		  <label class="el-name" for="">切换按钮默认颜色：</label>
		  <div class="el-input el-input--prefix">
		  	<el-color-picker v-model="pdata.bulletBgCor" size="mini"></el-color-picker>
		  </div>
		</div>
		<div class="demo-input-suffix" v-if="pdata.bulletShow">
		  <label class="el-name" for="">切换按钮激活颜色：</label>
		  <div class="el-input el-input--prefix">
		  	<el-color-picker v-model="pdata.bulletBgCorA" size="mini"></el-color-picker>
		  </div>
		</div>
		<div class="demo-input-suffix" v-if="pdata.bulletShow">
		  <label class="el-name" for="">切换按钮宽：</label>
		  <el-input-number v-model.number="pdata.bulletWidth" :min="0" label="切换按钮宽" size="mini"></el-input-number>
		</div>
		<div class="demo-input-suffix" v-if="pdata.bulletShow">
		  <label class="el-name" for="">切换按钮高：</label>
		  <el-input-number v-model.number="pdata.bulletHeight" :min="0" label="切换按钮高" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix" v-if="pdata.bulletShow">
		  <label class="el-name" for="">按钮样式(圆)：</label>
		  <el-checkbox v-model="pdata.circleStyle">圆形</el-checkbox>
		</div>
		
		<div class="demo-input-suffix" >
		  <label class="el-name" for="">是否显示左右按钮：</label>
		  <el-checkbox v-model="pdata.lrbtnShow">显示</el-checkbox>
		</div>
		<div class="demo-input-suffix" >
		  <label class="el-name" for="">是否自动轮播：</label>
		  <el-checkbox v-model="pdata.isAutoPlay">自动轮播</el-checkbox>
		</div>
		<div class="demo-input-suffix" v-if="pdata.isAutoPlay">
		  <label class="el-name" for="">间隔时间(ms)：</label>
		  <el-input
		    placeholder="格式为1000ms"
		    v-model.trim="pdata.time" size="mini">
		  </el-input>
		</div>


		<div class="demo-input-suffix" v-if="pdata.css['font-size']">
		  <label class="el-name" for="">字号：</label>
		  <el-input
		    placeholder="格式为1px 1px 1px 1px"
		    v-model.trim="pdata.css['font-size']" size="mini">
		  </el-input>
		</div>

		
	</div>
</template>
<script>
export default {
  data() {
    return {
			 pd:this.pdata
		};
  },
	props: ["pdata"],
	computed(){
		 return {
			 imageUrl(){

				 	return this.pdata.imageUrl;
			 }
		 }
	},
  watch: {}
};
</script>

<style scoped>
.demo-input-suffix {
  margin-bottom: 10px;
}
.el-name {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.el-input {
  width: 120px;
}
.el-checkbox {
  width: 120px;
}
</style>
