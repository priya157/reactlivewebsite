import React, {useState} from 'react';
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';
const Listcomp = (Props) =>{

    const [line, setLine] = useState(false);

    const cutIt = () =>{
        setLine(true);
    };


    return(
        <>
        <div className="todolistname">
            <span onClick={cutIt}><DeleteIcon/></span>
            <li style={{ textDecoration: line? "line-through": "none"}} className="List_item">{Props.text}</li>
            </div>
          
        </>
    )
}

export default Listcomp