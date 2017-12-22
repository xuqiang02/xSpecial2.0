/**
 * [cmpData 初始化数据]
 * add(defaultJson)  {添加组件定义初始化数据函数:defaultJson -->组件数据object}
 * getByType(ctype)  {从全部组件初始化数据中获取相应组件的json数据}
 * xu.qiang
 * 2017.12.14
 */
let cmpData={};


export default {
    add(defaultJson){
        cmpData[defaultJson.ctype]=defaultJson
    },
    getByType(ctype){
        return  JSON.parse(JSON.stringify(cmpData[ctype]))
    }
}
