<template>
	<div class="tab-item">

		<div class="demo-input-suffix">
		  <label class="el-name" for="">宽度：</label>
		  <el-input
		    placeholder="请输入内容"
		    autosize
		    v-model.trim="pdata.css.width" size="mini">
		  </el-input>
		</div>

		<div class="demo-input-suffix">
		  <label class="el-name" for="">高度：</label>
		  <el-input
		    placeholder="请输入内容"
		    autosize
		    v-model.trim="pdata.css.height" size="mini">
		  </el-input>
		</div>
		
		<div class="demo-input-suffix">
		  <label class="el-name" for="">背景图：</label>
		  <el-input
		    placeholder="请输入内容"
		    autosize
		    v-model.trim="pdata.css.background" size="mini">
		  </el-input>
		</div>

	</div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        props:['pdata']
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