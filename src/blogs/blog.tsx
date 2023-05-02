import React, { useContext, useEffect } from 'react';
import { useInRouterContext } from 'react-router-dom';
import ModuleContext, {indexType} from '../context/ModuleContext';

const name : indexType = '/blog';

export default function Blog (){

    const isBlog = useInRouterContext();
    const [_blank, setIndex] = useContext(ModuleContext);
    useEffect(()=>{
        isBlog && setIndex(name);
    }, [])
    return(<h1>This is Blog</h1>);
} 