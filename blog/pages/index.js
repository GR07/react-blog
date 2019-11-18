import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
import Header from '../components/Header'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header></Header>
    <div><Button>按钮</Button></div>

  </div>
)

export default Home
