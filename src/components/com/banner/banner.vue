<template>
	<div :style="[c.css,{width:c.seat.w+'px',height:c.seat.h+'px',top:c.seat.y+'px',left:c.seat.x+'px'}]" class="xfocus" @mouseover="stop()" @mouseout="autoplay()">
        <transition-group tag="ul" name='image'>
            <li v-for="(imgUrlItem,index) in c.imgUrl" :key="index" v-show="index===c.mark">
                <a href="javascript:;"><img :src="imgUrlItem.img" alt="" :style="{width:c.seat.w+'px' , height:c.seat.h+'px'}" ></a>
            </li>
        </transition-group>
        <div class="bullet" v-if="c.bulletShow">
            <span class="rect"   v-for="(item,index) in c.imgUrl.length" :key="index" :class="{'circle':c.circleStyle,'active':index===c.mark}" @click="change(index)" :style="{width:c.bulletWidth+'px' , height:c.bulletHeight+'px' , background:c.bulletBgCor}"></span>
        </div> 
        <div class="lrbtn" v-if="c.lrbtnShow">
			<a href="javascipt:;" class="next" @click="next()"></a>
			<a href="javascipt:;" class="left" @click="left()"></a>
	    </div>
	</div>
</template>

<script>
import $ from "jquery"
import defaultData from "../../mock/mock"
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
  ctype: "banner",
  data: {
    seat: {
      x: 1,
      y: 1,
      w: 600,
      h: 360
    },
    css: {
      position: "absolute",
      padding: "0 10px",
      margin: "0",
      "line-height": "20px",
      "box-sizing": "border-box",
      "font-size": "14px"
    },
    mark: 0,
    boxWidth: 1000, //盒子宽度
    boxHeight: 600, //盒子高度
    imgWidth: 1000, //图片宽度
    imgHeight: 600, //图片高度
    bulletWidth: 20, //切换按钮宽度
    bulletHeight: 20, //切换按钮高度
    bulletBgCor: "#000", //切换按钮背景颜色
    bulletBgcorA: "#ffffff", //切换按钮背景激活颜色
    imgNum: 4, //图片数量
    // imgUrl: [
    //   //图片地址
    //   "http://pic.xcarimg.com/img/07news/2017/12/14/68ee8ba3e532496c91c3b8faaf1d9682.jpg",
    //   "http://pic.xcarimg.com/img/07news/2017/12/14/37accb5f2ec608c75b5a07ecaa1e4351.jpg",
    //   "http://pic.xcarimg.com/img/07news/2017/12/14/98a76258267b4148a0e42533b4004036.jpg",
    //   "http://pic.xcarimg.com/img/07news/2017/12/13/0e687c40b3c440395f89eb87e8038d42.jpg"
    // ],
    imgUrl: [
        {
        "img":"http://pic.xcarimg.com/img/07news/2017/12/14/68ee8ba3e532496c91c3b8faaf1d9682.jpg"
    },
    {
        "img":"http://pic.xcarimg.com/img/07news/2017/12/14/37accb5f2ec608c75b5a07ecaa1e4351.jpg"
    },
    {
        "img":"http://pic.xcarimg.com/img/07news/2017/12/14/98a76258267b4148a0e42533b4004036.jpg"
    },
    {
        "img":"http://pic.xcarimg.com/img/07news/2017/12/13/0e687c40b3c440395f89eb87e8038d42.jpg"
    }
    ],
    bulletShow: false, //是否显示切换按钮
    lrbtnShow: false, //是否显示左右切换按钮
    isAutoPlay: false, //是否自动播放
    circleStyle: false, //切换按钮样式（圆），默认（方形）
    time: 5000, //切换时间
    timer: ""
  }
});

export default {

  name: "bannerItem",
  props: {
    cdata: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      c: this.cdata
    };
  },
  created() {
    this.autoplay();
  },
  mounted() {
    $(".bullet span.active").css("background", this.bulletBgcorA);
  },
  methods: {
    change(i) {
      this.mark = i;
      $(".bullet span")
        .eq(i)
        .css("background", this.bulletBgcorA)
        .siblings()
        .css("background", this.bulletBgCor);
    },
    play() {
      this.mark++;
      if (this.mark === this.imgNum) {
        this.mark = 0;
        return;
      }
    },
    autoplay() {
      if (this.isAutoPlay) {
        this.timer = setInterval(this.play, this.time);
      } else {
        return;
      }
    },
    next() {
      this.play();
      $(".bullet span")
        .eq(this.mark)
        .css("background", this.bulletBgcorA)
        .siblings()
        .css("background", this.bulletBgCor);
    },
    left() {
      this.mark--;
      if (this.mark < 0) {
        this.mark = this.imgNum - 1;
      }
      $(".bullet span")
        .eq(this.mark)
        .css("background", this.bulletBgcorA)
        .siblings()
        .css("background", this.bulletBgCor);
    },
    stop() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.clearfix {
  content: "";
  clear: both;
  display: block;
}

.xfocus {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 500px;
  height: 300px;
}

li {
  position: absolute;
}

img {
  width: 500px;
  height: 300px;
  display: block;
}

.bullet {
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
  line-height: 20px;
}

.rect {
  width: 20px;
  height: 5px;
  border: 1px solid;
  background: white;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 50%;
  background: white;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.active {
  background: red;
}

.image-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}

.image-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}

.next {
  position: absolute;
  margin-top: -100px;
  z-index: 999;
  top: 50%;
  display: block;
  right: 0;
  width: 200px;
  height: 200px;
  background: #000;
}
.left {
  position: absolute;
  margin-top: -100px;
  z-index: 999;
  top: 50%;
  display: block;
  left: 0;
  width: 200px;
  height: 200px;
  background: #000;
}
</style>