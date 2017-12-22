<script>

import navPanel from './navPanel/navPanel'
import containerPanel from './containerPanel'
import bannerPanel from './bannerPanel/bannerPanel'
import tablePanel from './tablePanel/tablePanel'
import tabPanel from './tabPanel/tabPanel'
import footPanel from './footPanel/footPanel'
import formPanel from './formPanel/formPanel'
import videoPanel from './videoPanel/videoPanel'

// 新增组件手动添加
let panelList={
    'nav': navPanel,
    'container': containerPanel,
    'banner': bannerPanel,
    'table': tablePanel,
    'tab': tabPanel,
    'foot': footPanel,
    'form': formPanel,
    'video': videoPanel
}

export default {
    functional:true,
    name:'panel',
    props:{
        name: {
            type: String,
            default: null
        },
        pdata: {
        	type: Object,
        	default: () => {}
        }
    },
    render: (createElement,context) => {
        return createElement(panelList[context.props.pdata.ctype],{
        	props:{
                pdata:context.props.pdata
            }
        })
    }
}
</script>
