import React from 'react'
import '../public/style/components/header.css'

import {Row, Col, Menu, Icon} from 'antd' // 24栅格布局

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="header-logo">GR07</span>
        <span className="header-txt">设计转前端的菜鸟 github.com/GR07</span>
      </Col>
        
      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu  mode="horizontal">
          <Menu.Item key="home">
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <Icon type="youtube" />
            笔记
          </Menu.Item>
          <Menu.Item key="life">
            <Icon type="smile" />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header