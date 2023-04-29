import React, {useEffect, useState} from 'react';
import { Col, Row, Button, Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {NavLink} from 'react-router-dom';
import flogo from '../../public/flogo.png';
import './index.less';


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="next" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    }
];

const Menuitems: MenuProps['items'] = [
    {
        key: 'blog',
        label: <NavLink to='blog'>Blog</NavLink>,
    },
    {
        key: 'tool',
        label: <NavLink to='tool'>Tool</NavLink>,
    },
    {
        key: 'shopping',
        label: <NavLink to='shopping'>Shopping</NavLink>,
    },
];
    
export function Header (){


    const [hasLogin, setHasLogin] = useState(false);

    useEffect(()=>{
    }, [])

    return (
        <>
            <Row style={{borderBottom: '1px solid rgb(221 221 221)'}}>
                <Col span={18}></Col>
                <Col span={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button type='text' size='large' className='bold'>About Us</Button>
                    {
                        hasLogin ? 
                        <Dropdown menu={{items}} placement="bottomRight" arrow>
                            <Button type='text' size='large' className='bold'>My Account</Button>
                        </Dropdown>
                            :
                        <Button type='text' size='large' className='bold'>Login</Button>
                    }
                </Col>
            </Row>

            
                

            <Row align={'middle'} style={{boxShadow: '0 2px 2px rgba(33,51,67,.12)'}}>
                <Col span={4} style={{display: 'flex', alignItems: 'center', padding: '16px'}}>
                    <img alt='logo' src={flogo} height='32px'/>
                </Col>
                <Col span={14}>
                    <Menu
                        // selectedKeys={[current]}
                        // theme='dark'
                        className='bold'
                        style={{backgroundColor: 'inherit'}}
                        mode="horizontal"
                        items={Menuitems} />
                </Col>
                <Col span={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button type='text' size='large' className='bold'>Other</Button>
                </Col>
            </Row>
        </>
    );
}