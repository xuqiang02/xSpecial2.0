<template>
  <el-container>
      <headerItem :menu="navData" @delCot="delCom" @delComp="delComponent" @addCom="addTypeCom" @save="saveData" @see="seeHtml" @outHtml="outJson"></headerItem> 
      <el-container class="edit-container">
        <el-main>
          <div class="edit-item">
            <div class="edit-area" id="editArea" >
              
              <div v-for="item in containerList" class="container" :style="{'background':'url('+item.attrs.background+') no-repeat center'}" :class="{ active : item.isActive }" :data-id="item.id">
                <div class="content" :style="[item.attrs,{'background':'url('+item.attrs.background+') no-repeat center'}]" @click="selectContainer" :id="item.id">

                  <coms v-for="(c,index) in item['coms']" :cindex="index" :key="c.name" :cdata="c" :select="selectCom" ></coms>

                </div>
                  

              </div>

              <keep-alive>
                <div  style="position: absolute; pointer-events: none;left:0;" :style="{top:proxyParent.t+'px',width:proxyParent.w+'px',height:proxyParent.h+'px','z-index':proxyParent.z,left:'50%','margin-left':'-'+proxyParent.w/2+'px'}">
                  
                <vue-draggable-resizable :w="proxy.w" :h="proxy.h" @resizestop="moveDrag" :x="proxy.x" :y="proxy.y" :z="proxy.z" @dragstop="stopDrag" :parent="false" :resizable="true" :active.sync="proxy.active" :enabled.sync="proxy.active">
                </vue-draggable-resizable>

                </div>
              </keep-alive>
            </div>
          </div>
        </el-main>
        <el-aside width="280px" class="control-aside">
          <div class="control-item">
              <panel :pdata="panelData.data" v-if="panelData.isShow"></panel>
          </div>
        </el-aside>
        <footerItem :version="verText"></footerItem>
      </el-container>
    </el-container>
  
</template>

<script>

import VueDraggableResizable from '../common/vue-draggable-resizable'
import headerItem from '../header/header'
import footerItem from '../footer/footer'
import controlItem from '../control/control'
import coms from '../com/manege'
import panel from '../panel/panel'
import defaultData from '../mock/mock'

export default {
  name: 'EditItem',
  data () {
    return {
      comIndex: -1,
      verText: 'xSpecial Version 2.0',
      navData: [
        {
          index: '1',
          name: '容器',
          type: 'container'
        }, {
          index: '2',
          name: '导航',
          type: 'nav'
        }, {
          index: '3',
          name: '轮播图',
          type: 'banner'
        }, {
          index: '6',
          name: '报名',
          type: 'form'
        }, {
          index: '7',
          name: '经销商',
          type: 'table'
        }, {
          index: '8',
          name: '车系',
          type: 'tab'
        }, {
          index: '9',
          name: '页脚',
          type: 'foot'
        }, {
          index: '10',
          name: '视频',
          type: 'video'
        }
      ],
      panelData:{
        'isShow':false,
        'data':{}
      },
      proxyParent:{
          t:0,
          w:1000,
          h:100,
          z:-1
      },
      proxy: {
        x:0,
        y:0,
        w:0,
        h:0,
        z:0,
        ctype:null,
        active:false
      },
      containerList: [
        {
          id: 'container_0',
          isActive: true,
          attrs: {
            width:'1000px',
            height:'300px',
            background:'//p02czd3xc.bkt.clouddn.com/wbg.jpg'
          },
          coms: []
        }
      ]
    }
  },
  components: {
    VueDraggableResizable,
    headerItem,
    footerItem,
    controlItem,
    coms,
    panel
  },
  methods: {
    addTypeCom (type) {

      if (type === 'container') {
        this.containerList.forEach((item, index) => item.isActive = false)
        this.containerList.push({
          id:'container_'+this.containerList.length,
          isActive:true,
          attrs: {
            width:'1000px',
            height:'300px',
            background:'//p02czd3xc.bkt.clouddn.com/wbg.jpg'
          },
          coms:[]
        })
        this.panelData = {
            'isShow':true,
            'data':{
              'ctype': 'container',
              'css': this.containerList[this.getActiveContainerIndex()].attrs
            }
          }

      } else {
        //判断编辑区域是否有容器组件
        if (this.getActiveContainerIndex() === -1) {

          this.$notify.error('错了哦，请先添加容器组件');

        } else {

          let isTypeJson = defaultData.getByType(type)

          if(!isTypeJson) {
            this.$notify({
              message: '暂无此组件，敬请期待！',
              type: 'warning'
            })

          } else {

             let activeContainer=this.getActiveContainer()
             activeContainer.coms.push(Object.assign({},isTypeJson))

          }

        }

      }
    },
    getActiveContainerIndex(){
      let activeIdx=-1

      this.containerList.forEach(function(obj,idx){
         if(obj.isActive){

             activeIdx=idx
             return
         }
      })

      return activeIdx
    },
    getActiveContainer(){
        let idx=this.getActiveContainerIndex()

        return idx === -1 ? this.containerList[this.containerList.length-1] : this.containerList[idx]
    },
    selectContainer (e) {
      this.containerList.forEach((item, index) =>  {
        if((e.target.id?e.target.id:e.target.parentNode.id) == item.id) {
          item.isActive = true
          this.panelData = {
            'isShow':true,
            'data':{
              'ctype': 'container',
              'css': item.attrs
            }
          }
        } else {
          item.isActive = false
        }

      })

    },
    moveDrag (x, y, w, h) {
      this.targetCom.seat.x = x
      this.targetCom.seat.y = y
      this.targetCom.seat.w = w
      this.targetCom.seat.h = h
    },
    stopDrag (x, y, e) {
      
      this.targetCom.seat.x = x
      this.targetCom.seat.y = y
    },
    selectCom (c, t, i, e) {
      let el=e.target || e.srcElement
      this.proxyParent.t = el.parentNode.offsetTop
      this.proxyParent.w = el.parentNode.offsetWidth
      this.proxyParent.h = el.parentNode.offsetHeight
      this.proxyParent.z = 100
      this.comIndex = i
      this.targetCom = c
      this.proxy = c.seat
      this.proxy.active = true
      this.panelData.data = c
      this.panelData.data.ctype = t
      this.panelData.isShow = true
      if (e.stopPropagation) e.stopPropagation()
    },
    delCom () {
      if (this.getActiveContainerIndex() ==-1) {
        this.$notify.error({
            title: '提示',
            message: '请选择要删除的容器！',
            position: 'bottom-right'
          });
      } else {
        this.$delete(this.containerList,this.getActiveContainerIndex())

        this.containerList.forEach((item, index) => {
          item.id = 'container_' + index
        })
        
        this.$notify({
          message: '容器删除成功！',
          type: 'success',
          position: 'bottom-right'
        })

      }

    },
    delComponent () {
      if (this.getActiveContainerIndex() ==-1) {
        this.$notify.error({
            title: '提示',
            message: '请先选择要删除组件所在的容器！',
            position: 'bottom-right'
          });
      } else {
        if (this.comIndex == -1) {
          this.$notify.error({
            title: '提示',
            message: '请先选择要删除的组件！',
            position: 'bottom-right'
          });

        } else {

          let co = this.getActiveContainer()
          co.coms.splice(this.comIndex,1)
          this.proxy.active = false
          this.proxy.w =0 
          this.proxy.h =0 
          this.proxy.x =0 
          this.proxy.y =0 
          this.comIndex = -1
          this.$notify({
            message: '组件删除成功！',
            type: 'success',
            position: 'bottom-right'
          })
          
        }

      }
     
    },
    saveData () {
      this.$notify.info({
        title: '提示',
        message: '暂无此功能，需要后端配合联调接口！',
        position: 'bottom-right'
      });
    },
    seeHtml () {
      this.$notify.info({
        title: '提示',
        message: '暂无此功能，需要后端配合联调接口！',
        position: 'bottom-right'
      });
    },
    outJson () {
      this.$notify.info({
        title: '提示',
        message: '暂无此功能，需要后端配合联调接口！',
        position: 'bottom-right'
      });
    },
  }
}
</script>

<style scoped>
.el-header, .el-main, .el-footer {
  padding: 0;
}

.edit-container {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 1;
}
.el-main {
  position: absolute;
  top: 0;
  left: 0;
  right: 280px;
  bottom: 0;
  z-index: 1;
}

.panel-aside {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #DDD;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 1;
}
.control-aside {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-left: 1px solid #DDD;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 1;
}
.control-item {
  min-height: 500px;
  padding:10px 20px;
  box-sizing: border-box;
}
.draggable.resizable{
  pointer-events: all;
}
.draggable.resizable.active{
  border: 2px dashed #56e1bb;
}
.handle{
  background: #56e1bb;
  border: 1px solid #56e1bb;
}

/*组件容器*/
.container {
  float: left;
  width: 100%;
  min-height: 150px;
  border: 1px dashed #919191;
  box-sizing: border-box;
}
.container.active {
  border: 1px solid #ff8533;
}
.container .content {
  position: relative;
  margin: 0 auto;
}
/*编辑区域*/
.edit-item {
  display: inline-block;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  position: relative;
}
.edit-item .edit-area {
  display: inline-block;
  width: 100%;
  max-width: 1100px;
  min-height: 800px;
  margin: 0 auto;
  background: url('./images/bg.jpg') repeat;
  box-shadow: 0 0 10px rgba(0,0,0,.4);
  position: relative;
}


</style>
