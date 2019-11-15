import { showOrnot } from './../template/template'
Page({
    data:{
        showOrnot: true,
        title: '在武大',
        index:[0,1,2,3],
        pubValue:['发布时间','评论时间','喜欢热度','评论热度'],
        publish: '发布时间'
    },
    onLoad(){

    },
    searchMain(){
        console.log(1)
        this.setData({
            showOrnot: false,
            title: ''
        })
    },
    searchInput(){
        
    },
    publish(res){
        // let that = this;
        // console.log(res)
        // console.log(that.data.pubValue[res.detail])
        
    },
    hidePicker(res){
          let that = this;
        //  console.log(that.data.pubValue[res.detail.value])
         that.setData({
            'publish': that.data.pubValue[res.detail.value]
        })
    }
})
