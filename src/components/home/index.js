import React from 'react';
import Main from '../Main';
import Sofa from './Sofa';
import Blogs from './Blogs';
import Instragram from './Instragram';
import Seater from './Seater';
const Homepage = (props) => {
    return(
        <> 
     <Seater/>
    <Main {...props}/>
    <Sofa/>
    <Blogs />
    <Instragram/>
        </>
    )
};
export default Homepage;