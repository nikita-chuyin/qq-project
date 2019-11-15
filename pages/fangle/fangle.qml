<view class="navigation_grounp">
    <view class="navigation" hover-stop-propagation="false">
        <block>
            <input type="text" placeholder="请输入关键字..." focus class="{{showOrnot?'input_hidden':''}}" bindinput="searchInput" />
            <view class="nav_search">
                <text class="iconfont icon-icon-test4" bindtap="searchMain"></text>
            </view>
        </block>
        <text class="nav_title">{{title}}</text>
    </view>
</view>
<view class="header">
    <button size="mini" type="primary" plain="false">全部</button>
    <button size="mini">通知公告</button>
    <button size="mini">个人发布</button>
    <view class="header_block" bindtap="publish">
        <picker value="{{index}}" range="{{pubValue}}" bindchange="hidePicker">
            <view class="picker">
                <view class="header_block" bindtap="publish">
                    <text>{{publish}}</text>
                    <text class="iconfont icon-icon-test1"></text>
                </view>
                {{pubValue[index]}}
            </view>
        </picker>
    </view>
</view>
<view class="body" wx:for="{{[0,1,2,3]}}">
    <view class="main">
        <view class="main_title">
            <image src="../images/index.png" style="width:45px;height:45px;border-radius:5px;" />
            <view class="title_name">
                <text style="font-weight:bold;">柚子茶</text>
                <text class="iconfont icon-icon-test3"></text>
                <view>13小时前</view>
            </view>
        </view>
        <view class="main_content">
            想想看的路上看到了
        </view>
        <view class="main_comment">
            <view>
                <text class="iconfont icon-icon-test2"></text>
                <text>188</text>
            </view>
            <view>
                <text class="iconfont icon-icon-test"></text>
                <text>1</text>
            </view>
            <view>
                <text class="iconfont icon-icon-test3"></text>
            </view>
        </view>
    </view>
</view>
