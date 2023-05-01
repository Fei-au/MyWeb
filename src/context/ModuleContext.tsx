import {createContext, useState} from 'react';

export type indexType = null | '/blog' | '/tool' | '/shopping'

const ModuleContext = createContext(null);

export default ModuleContext;