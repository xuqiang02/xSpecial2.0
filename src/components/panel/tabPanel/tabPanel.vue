<template>
    <div class="tab-item">
    	
		<div class="demo-input-suffix">
		  <label class="el-name" for="">横坐标：</label>
		  <el-input-number v-model.number="pdata.seat.x" label="横坐标" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix">
		  <label class="el-name" for="">纵坐标：</label>
		  <el-input-number v-model.number="pdata.seat.y" label="纵坐标" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix">
		  <label class="el-name" for="">宽：</label>
		  <el-input-number v-model.number="pdata.seat.w" :min="0" label="宽" size="mini"></el-input-number>
		</div>

		<div class="demo-input-suffix">
		  <label class="el-name" for="">高：</label>
		  <el-input-number v-model.number="pdata.seat.h" :min="0" label="高" size="mini"></el-input-number>
		</div>
		<div class="demo-input-suffix">
		  <label class="el-name" for="">层级：</label>
		  <el-input-number v-model.number="pdata.seat.z" label="层级" size="mini"></el-input-number>
		</div>
		
		<div class="demo-input-suffix" v-for="item in pdata.bannerArr">
		  <label class="el-name" for="">轮播图地址：</label>
		  <el-input
		    placeholder="请输入内容"
		    v-model.trim="item.img" size="mini">
		  </el-input>
		</div>

		<div class="demo-input-suffix">
		  <label class="el-name" for="">背景：</label>
		  <div class="el-input el-input--prefix">
		  	<el-color-picker v-model="pdata.css['background']" size="mini"></el-color-picker>
		  </div>
		</div>
		<!-- <div class="demo-input-suffix">
			<label class="el-name" for="">操作：</label>
			<div class="el-input el-input--prefix">
				<el-button type="danger" size="mini" @click="delHandle">删除</el-button>
			</div>
		</div> -->
	</div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        props:['pdata'],
        methods: {
        	delHandle: function () {
        		this.$emit('delCom')
        	}
        }
    }
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
.el-input{
	width: 120px;
}
</style>
