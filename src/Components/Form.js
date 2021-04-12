import React,{useContext} from 'react'
import AddIcon from '@material-ui/icons/Add';
import {DataContext} from '../Context/context'
 const Form = ({inputText,setInputText}) => {
     const [todo,setTodo] = useContext(DataContext)
     const handleChangeInput = (e)=>{
        setInputText(e.target.value)
     }
     const onClickButtonAdd = (event)=>{
        event.preventDefault();
        setTodo([
            ...todo,
            {text: inputText, complete: false, id: Math.random() * 1000}
        ])
        setInputText("")
     }
    return (
        <div className="form-main">
            <form>
            
            <div className="input-main">
                <button type="button" onClick={onClickButtonAdd}><AddIcon/></button>
                <input value={inputText} onChange={handleChangeInput}/>
            </div>
       
            </form>
           
        </div>
    )
}

export default Form