<script>

import nav from './nav/nav'
import banner from './banner/banner'
import tab from './tab/tab'
import table from './table/table'
import foot from './foot/foot'
import form from './form/form'
import video from './video/video'

// 新增组件手动添加
let comsList={
    'nav': nav,
    'banner':banner,
    'tab': tab,
    'table': table,
    'foot': foot,
    'form': form,
    'video':video
}

export default {
    functional:true,
    name:'manager',
    props:{
        name: {
            type: String,
            default: null
        },
        cdata: {
        	type: Object,
        	default: () => {}
        },
        select: {
        	type:Function,
        	default: (c,t,e) => {}
        },
        cindex: {
            type:Number,
            default: 0
        }
    },
    render(createElement,context){
        return createElement(
            comsList[context.props.cdata.ctype]
            ,{
        	props:{
                cdata:context.props.cdata.data
            },
        	attrs:{
	        	
        	},
        	nativeOn: {
        		click ($event) {
        			context.props.select(context.props.cdata.data,context.props.cdata.ctype,context.props.cindex,$event)
        		}
        	}
        })
    }
}
</script>
