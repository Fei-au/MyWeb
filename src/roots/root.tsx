import React, {useState} from 'react';
import {Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import { Layout, Divider } from 'antd';
import {Header as MyHeader} from '../header';
import {Footer as MyFooter} from '../footer';


const { Header, Footer, Sider, Content } = Layout;


export default function Root(){
    return (
        <Layout className='normal-width'>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, height: 'fit-content', padding: 0, backgroundColor: 'rgb(251 231 207 / 20%)'}}>
                <MyHeader/>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer style={{padding: '48px 32px', backgroundColor: '#2e475d', color: 'white'}}>
                <MyFooter/>
            </Footer>
        </Layout>
    );
}