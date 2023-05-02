import React, { useCallback, useLayoutEffect, useContext, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import {NavLink, useNavigate, useInRouterContext } from 'react-router-dom';
import ModuleContext from '../context/ModuleContext';
import {indexType} from '../context/ModuleContext';

export default function Home (){

    const navigate = useNavigate();
    const isHome = useInRouterContext();
    const [_blank, setIndex] = useContext(ModuleContext);
    
    useEffect(()=>{
        isHome && setIndex(null);
    }, [])

    useEffect(()=>{
        console.log()
    })

    const handleNavClick = useCallback((addr: indexType)=>{
        navigate(addr);
        setIndex(addr);
    }, [])

    return (
        <div className='home-container'>
            <section className='improve'>
                <Row className='home-row'>
                    <Col span={10} className='center-col' style={{flexDirection: 'column'}}>
                        <h2>
                            Improve Yourself!
                        </h2>
                        <Button size='large' type='primary' ghost style={{fontWeight: 'bold'}}
                            onClick={()=>handleNavClick('/blog')}
                        >
                            {/* <NavLink to='blog'>BLOG</NavLink> */}
                            BLOG
                        </Button>
                    </Col>
                    <Col span={14}></Col>
                </Row>
            </section>

            <section className='time'>
                <Row className='home-row'>
                    <Col span={12} className='center-col' style={{flexDirection: 'column'}}>
                        <h2 style={{color:'#72d8ff'}}>
                            Save Time Now!
                        </h2>
                        <span>
                            We have many tools that can save your plenty of time!
                        </span>
                        
                    </Col>
                    <Col span={12} className='center-col' style={{flexDirection: 'column'}}>
                        <h2 style={{color: '#e97600'}}>
                            Excel Handler
                        </h2>
                        <span>
                            Import excel data, 
                            and export what you want after magic operation!
                        </span>
                        {/* <NavLink to='tool'> */}
                            <Button size='large' type='primary' ghost style={{fontWeight: 'bold'}}
                                onClick={()=>handleNavClick('/tool')}
                            >
                                TOOL
                            </Button>
                        {/* </NavLink> */}
                    </Col>
                </Row>
            </section>

        </div>
    );
}