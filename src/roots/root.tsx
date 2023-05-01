import React, {useState} from 'react';
import {Route, Routes, Link, NavLink, Outlet} from 'react-router-dom';
import { Layout, Divider } from 'antd';
import {Header as MyHeader} from '../header';
import {Footer as MyFooter} from '../footer';
import ModuleContext, {indexType} from '../context/ModuleContext';

const { Header, Footer, Sider, Content } = Layout;


export default function Root(){

    const [index, setIndex] = useState<indexType>(null);
    return (
        <ModuleContext.Provider value={[index, setIndex]}>
            <Layout>
                <Header style={{ position: 'sticky', top: 0, zIndex: 1, height: 'fit-content', padding: 0, backgroundColor: 'white'}}>
                    <MyHeader/>
                </Header>
                <Content>
                    <Outlet/>
                </Content>
                <Footer style={{padding: '48px 32px', backgroundColor: '#2e475d', color: 'white'}}>
                    <MyFooter/>
                </Footer>


                {/* <div>
                    <header>
                        <div>
                            this is header
                        </div>
                    </header>
                    <main>
                        
                    </main>
                    <footer>

                    </footer>
                </div> */}
            </Layout>
        </ModuleContext.Provider>


    );
}