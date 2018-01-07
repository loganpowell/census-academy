import React from 'react'
import { Link, Router, withRouter } from 'react-static'
import reset from 'styled-reset'
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import 'typeface-roboto'
import 'typeface-roboto-slab'
import 'typeface-roboto-condensed'
import 'typeface-lora'

import theme from 'themes'
import CensusFooter from 'shows/cuts/footers/CensusFooter'

injectGlobal`
  ${reset}
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
  html {
    ${theme.font.sans.regular}
  }
`;

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  ${'' /* margin: 16px 28px 16px 0; */}
  float: left;
`;

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const MenuItemGroup = Menu.ItemGroup;

const CensusHeader = styled(Header)`
  height: auto;
  background-color: #fff;
`

class App extends React.Component {
  state = {
    current: 'mail',
    // collapsed: false,
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Router>
        <Layout>
         <CensusHeader>
           <Logo />
           <Menu
             theme="light"
             mode="horizontal"
             defaultSelectedKeys={['1']}
             style={{ lineHeight: '2em' }}
           >
             <Menu.Item key="1">
               <Link to="/">
                 <Icon type="home" />Home
               </Link>
             </Menu.Item>
             <Menu.Item key="2">
               <Link to="/tutorials">
                 <Icon type="fork" />Tutorials
               </Link>
             </Menu.Item>
             <Menu.Item key="3">
               <Link to="/blog">
                 <Icon type="bars" />Blog
               </Link>
             </Menu.Item>
             <Menu.Item key="4">
               <Link to="/about">
                 <Icon type="pushpin-o" />About
               </Link>
             </Menu.Item>
           </Menu>
         </CensusHeader>
         <Content style={{ padding: '0 50px' }}>
           <Breadcrumb style={{ margin: '16px 0' }}>
             <Breadcrumb.Item>Home</Breadcrumb.Item>
             <Breadcrumb.Item>List</Breadcrumb.Item>
             <Breadcrumb.Item>App</Breadcrumb.Item>
           </Breadcrumb>
           <Layout>
             {/* <Routes /> */}
           </Layout>
         </Content>
         <Footer>
           <CensusFooter />
         </Footer>
       </Layout>
      </Router>
    );
  }
}

export default App
