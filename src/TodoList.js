import React,{useState} from 'react';
import {Button,form,TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import Listcomp from './Listcomp';
const TodoList = () =>{

    const[item, setItem]=useState();
    const[newitem, setNewItem]=useState([]);

    const itemEvent = (e)=>{
        setItem(e.target.value);
    };
    const ItemAdd = () =>{
        setNewItem((PrevValue)=>{
            return [...PrevValue, item];
        });
        setItem(" ")
    };
    return(
        <>
        <form noValidate autoComplete="off">
            <div className="main_div">
                <div className="subdiv">
                    <br/>
                    <h1>To Do List</h1>
                    <br/>
                    {/* <input type="text" 
                    placeholder="Add an Items"  value={item} onChange={itemEvent}/> */}
                    
                    <TextField id="standard-basic" label="Add an Items"  value={item} onChange={itemEvent} />
                    <Button className="item_add_btn" onClick={ItemAdd}><AddIcon/></Button>
                    <br/>
                    <ol>
                    {
                        newitem.map((val,i) => {
                            return  <Listcomp key={i}  text={val}/>;
                        })
                    }
                       
                    </ol>
                </div>
            </div>
            </form>
        </>
    )
}

export default TodoList