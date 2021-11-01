import React from 'react';
import './Loader.scss'

interface Props {
  show?: boolean;
}

const Loader = ({show = false}: Props) => <div className={`loader ${!show && 'loader_hide'}`}>
  <div className="loader__animation">
    <div className="loader__center"/>
  </div>
</div>


export default Loader;
