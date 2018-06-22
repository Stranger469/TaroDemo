import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index' scrollY="true">
        <Text className='title'>LOGO</Text>
        <View className='bg-color'></View>
        <div className='top-block'>
            <Text>aaa</Text>
        </div>
        <Text className="discription">Welcome to myapp</Text>
        <View className='box'>

        </View>
        <View className='box'>
            
        </View>
        <View className='box'>
            
        </View>
        <View className='box'>
            
        </View>
        <View className='box'>
            
        </View>
        <View className='box'>
            
        </View>
        <View className='box'>
            
        </View>
      </View>
    )
  }
}

