<template>
	<div style="min-height:500px">
	    <div class="tab-item">
	        <el-card class="box-card">
			  <div slot="header" class="clearfix">
			    <span>属性</span>
			    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
			  </div>
			  <div v-for="o in 4" :key="o" class="text item">
			    属性列表
			  </div>
			</el-card>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'controlItem',
		props: {
			controlNav:{
				type: Array,
				default: () => 
				[
					{
						'label': {
							type: String,
							default:'标签'
						},
						'name': {
							type: String,
							default: '索引'
						},
						'text': {
							type: String,
							default: '名称'
						}
					}
				]
			}
		},
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.box-card {
		box-shadow: none;
		border: none;
	}
</style>