<template>
	<el-footer height="20px">
        <div class="footer-item">
          <span>{{version}}</span>
        </div>
    </el-footer>
</template>

<script>
export default {
	name: 'footerItem',
	props: {
		version:  {
	      type: String,
	      default: 'xSpecial Version'
	    }
	},
	data () {
		return {
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-footer {
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 19px;
  right: 0px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
  z-index: 1;
}
.footer-item {
  float: left;
  width: 100%;
}
.footer-item span {
  display: block;
  color: #515151;
  line-height: 19px;
  float: right;
  margin: 0 30px;
  font-size: 12px;
}
</style>