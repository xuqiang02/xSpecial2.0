<template>
	<el-header height="60px">
        <el-row class="handle-item">
          <el-col :span="2">
            <h3 class="logo-item"><a href="/"></a></h3>
          </el-col> 
          <el-col :span="16" :offset="1">
            <el-menu
              :default-active="tabIndex"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item v-for="item in menu" :index="item.index" :key="item.index" :type="item.type" @click="addContainer(item.type)">{{item.name}}</el-menu-item> 
            </el-menu>
          </el-col>
          <el-col :span="5" class="btn-item">
          	<el-button type="primary" @click="delCt" icon="el-icon-delete" size="mini">删除容器</el-button>
			<el-button type="danger" @click="delCo" icon="el-icon-delete" size="mini">删除组件</el-button>
			<!-- <el-button :plain="true" @click="save" size="mini">保存</el-button>
			<el-button type="primary" :plain="true" @click="outHtml" size="mini">生成</el-button> -->
          </el-col>
        </el-row>
	</el-header>
</template>

<script>
export default {
	name: 'headerItem',
	props: {
		menu:  {
	      type: Array,
	      required: true,
	      default: () => 
	      [
			{
		      	'index': {
					type: String,
					default: 0,
					required: true
				},
				'name':{
					type: String,
					default: '名称',
					required: true
				},
				'type':{
					type: String,
					default: '类型',
					required: true
				}
	  		}
	      ]
	    }
	},
	data () {
		return {
			tabIndex: '0'
		}
	},
	methods: {
		addContainer: function (type) {
			// console.log(type)
			this.$emit('addCom',type)
		},
		delCt: function () {
			this.$emit('delCot')
		},
		delCo: function () {
			this.$emit('delComp')
		},
		save () {
	      this.$message({
	        message: '恭喜你，这是一条成功消息',
	        type: 'success'
	      })
	    },
	    outHtml () {
	      this.$message({
	        message: '警告哦，这是一条警告消息',
	        type: 'warning'
	      })
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: #545c64;
}
.logo-item {
  float: right;
  width: 122px;
  height: 60px;
  line-height: 60px;
  margin: 0;
  background: url('images/logo.png') no-repeat center;
}
.logo-item a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
/*页眉*/
.el-menu--horizontal {
  border-bottom: none;
}
.handle-item {
  background: #545c64;
}
.btn-item {
  line-height: 60px;
}
</style>