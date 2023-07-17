import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import oc from 'open-color';
// import '../CSS/Range.css'

import React from 'react'

export default  ()=>({min,max,value,defaultValue,pushable,allowCross, ariaLabelGroupForHandles,ariaLabelledByGroupForHandles,tabIndex,tipFormatter,onChange}) => (
  <>
    <Slider.range 
   
    className='t-slider'
    min={min}
    max={max}
     value={value}
     defaultValue={defaultValue}
     pushable={pushable}
     allowCross={allowCross}
     tipFormatter={tipFormatter}
     ariaLabelGroupForHandles={ariaLabelGroupForHandles}
     ariaLabelledByGroupForHandles={ariaLabelledByGroupForHandles}
     tabIndex={tabIndex}
     tipFormatter={value => `${value}%`}
     count={1}
    onChange={onChange}
    />
    <Slider.range 
   
   className='t-slider'
   min={min}
   max={max}
   value={value}
    defaultValue={defaultValue}
    pushable={pushable}
    allowCross={allowCross}
    tipFormatter={tipFormatter}
    ariaLabelGroupForHandles={ariaLabelGroupForHandles}
    ariaLabelledByGroupForHandles={ariaLabelledByGroupForHandles}
    tabIndex={tabIndex}
    tipFormatter={value => `${value}%`}
    count={1}
   onChange={onChange}
   />

  </>
);