import Taro, { Component } from '@tarojs/taro'
import { View, Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Header extends Component {

//     config = {
//     navigationBarTitleText: '首页'
//   }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Image
          className='image'
          src='https://static2.cnodejs.org/public/images/cnodejs_light.svg' 
        />
      </View>
    )
  }
}

export default Header
