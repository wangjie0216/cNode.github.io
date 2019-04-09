import Taro, { Component } from '@tarojs/taro'
import { View,   } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd() {
        dispatch(asyncAdd())
    }
}))
class Content extends Component {

    //     config = {
    //     navigationBarTitleText: '首页'
    //   }
    state = {
        list: [
            {
                value: '美国',
                text: '全部',
                checked: false
            },
            {
                value: '中国',
                text: '精华',
                checked: true
            },
            {
                value: '巴西',
                text: '分享',
                checked: false
            },
            {
                value: '日本',
                text: '问答',
                checked: false
            },
            {
                value: '英国',
                text: '招聘',
                checked: false
            }
        ]
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View>
                <View className='header'>
                  {this.state.list.map(item =>{
                      return(
                         <View key={item.value} className='text'>{item.text}</View>
                      )
                  })}
                  
                </View>
            </View>
        )
    }
}

export default Content
