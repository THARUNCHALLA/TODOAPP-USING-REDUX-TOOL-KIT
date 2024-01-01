import {useSelector,useDispatch} from "react-redux"

import { AddTodo,Delete} from "./Store"
import { useState } from "react"

const Todo=()=>{
    const [CHANGE,setChange]=useState("")
    const [Details,setDetails]=useState("")
    const data=useSelector((s)=>s.user)
    const dispatch=useDispatch()

    const onDelete=(Id)=>{
            const final = data.filter(each=>each.id!==Id)
            dispatch(Delete(final))
    }

    return(
        <div>
            <h1 className="text-primary Heading">Project: TODO App UI</h1>
            <div className="TODO">
            <input type="text" placeholder="Enter Todo here" value={CHANGE} onChange={(e)=>setChange(e.target.value)}/>
            <input type="date" value={Details} onChange={(e)=>setDetails(e.target.value)}/>
            <button className="btn btn-success BUTTON" onClick={()=> {
                if (CHANGE!=="" && Details!==""){
                dispatch(
                AddTodo({
                name:CHANGE,
                time:Details,
                id:new Date().getTime().toString()
            }))
            setChange("")
            setDetails("")
            }}}>Add</button>
            </div>
            {data.length>0 && data.map(each=>{
                return(
            <div key={each.id} className="THARUN">
                <h1 className="Heading12">{each.name}</h1>
                <h1 className="Heading12">{each.time}</h1>
                <button className="btn btn-danger BUTTON" onClick={()=>onDelete(each.id)}>Delete</button>
            </div>   
            )
        })
        }
    </div>
    )
}

export default Todo