import React from "react";
import './index.css';
import {useDispatch} from 'react-redux';
import {switchMode} from  '../../helpers/reducer'
function Mode(){
    const dispatch = useDispatch();
    return (
      <div>
        <label className="switch">
          <input type="checkbox" onChange={() => dispatch(switchMode())} />
          <span className="slider round"></span>
        </label>
      </div>
    );
}
export default Mode