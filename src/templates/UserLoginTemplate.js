import { Button, Slider } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default function UserLoginTemplate() {
  return (
    <div>
        <Layout>
            <Sider width={window.innerWidth/2} style={{height:window.innerHeight}}>
              slider
            </Sider>
            <Content>
              <Outlet/>
            </Content>
        </Layout>
    </div>
  )
}
