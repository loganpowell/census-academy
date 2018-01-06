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
  margin: 16px 28px 16px 0;
  float: left;
`;

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const MenuItemGroup = Menu.ItemGroup;

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
         <Header className="header">
           <Logo />
           <Menu
             theme="dark"
             mode="horizontal"
             defaultSelectedKeys={['2']}
             style={{ lineHeight: '64px' }}
           >
             <Menu.Item key="1">
               <Link to="/">
                 <Icon type="home" />Home
               </Link>
             </Menu.Item>
             <Menu.Item key="2">
               <Link to="/tutorials">
                 <Icon type="home" />Tutorials
               </Link>
             </Menu.Item>
             <Menu.Item key="3">
               <Link to="/blog">
                 <Icon type="book" />Blog
               </Link>
             </Menu.Item>
           </Menu>
         </Header>
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
         <Footer style={{ textAlign: 'center' }}>
           Ant Design ©2016 Created by Ant UED
         </Footer>
       </Layout>



      {/* <Layout>

        <Sider
          style={{backgroundColor: "#404040"}}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                <Icon type="home" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/blog" style={{color: "inherit", textDecoration: "none"}}>
                <Icon type="bars" />
                <span>Blog</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about" style={{color: "inherit", textDecoration: "none"}}>
                <Icon type="pushpin-o" />
                <span>About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Trigger
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '32px 32px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Routes/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React Static — Example with ant design UI & TypeScript / LESS loaders
          </Footer>
        </Layout>
      </Layout> */}
      </Router>
    );
  }
}

export default App
