import React, { useState } from 'react'
import Head from 'next/head'

import {Row, Col, List, Icon} from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'

import '../public/style/pages/index.css'

const Home = () => {

  const [mylist, setMylist] = useState(
    [
      {title: '我是标题', context: '我是内容'},
      {title: '我是标题', context: '我是内容'},
      {title: '我是标题', context: '我是内容'},
    ]
  )

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> 2019-11-11</span>
                  <span><Icon type="folder" /> 文章</span>
                  <span><Icon type="fire" /> 1111人</span>
                </div>
                <div className="list-context">{item.context}</div>  
              </List.Item>
            )}
          />    

        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
        </Col>
      </Row>

      <Footer/>

    </div>
  )
  
}

export default Home
