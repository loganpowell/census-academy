import react from 'react'
import { Sider, Menu } from 'antd'
import { Link } from 'react-static'


const MySider = () => {
    return (
        <Sider
            style={{background: "#fff"}}
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
            }}
        >
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to="/" className="nav-text">A</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/upload" className="nav-text">B</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/c" className="nav-text">C</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/d" className="nav-text">D</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
