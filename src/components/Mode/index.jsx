import React from "react";
import './index.css';
import {useDispatch,useSelector} from 'react-redux';
import {switchMode} from  '../../helpers/reducer';
import sun from './sun.png';
import moon from './moon.png';
function Mode(){
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.value);
    return (
      <div>
        {/* <label className="switch">
          <input type="checkbox" onChange={() => dispatch(switchMode())} />
          <span className="slider round"></span>
        </label> */}
        {mode && <img src={moon} alt="moon" style={{cursor:'pointer'}} className="moon" onClick={() => dispatch(switchMode())} width="30px" height="30px"/>}
        {mode || <img src={sun} alt="sun" style={{cursor:'pointer'}} className="sun" onClick={() => dispatch(switchMode())} width="30px" height="30px"/>}
      </div>
    );
}
export default Mode