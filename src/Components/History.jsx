import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaDonate, FaHistory } from "react-icons/fa";
import data from './data'

const History = () => {
    const [history, setHistory] = useState(data);
    const [index, setIndex] = useState(0);
    const [showless, setshowless] = useState(true);
    
    const nextIndex = () => {
        if (index < history.length - 1) {
            setIndex(index+1)
        }
        else{
            setIndex(0)
        }
    }
    const prevIndex = () => {
        if (index > 0) {
            setIndex(index-1)
        }
        else{
            setIndex(history.length -1)
        }
    }

    if(history.length != 0){
        const {id, name, price, image, text} = history[index]
        return(
            <article className='review'>
                {/* <span className='history'> history </span> */}
                    {/* <img src={image} alt={name} className='person-img'/> */}
                <FaDonate className='shape-img'/>
                <h4 className='author'>  <span>{name} </span></h4>
                <p className='price'>  Donated by: {price} </p>
                <p className='info'>
                    {showless? text.substring(0, 70) : text}
                    <button onClick={ () => {setshowless(!showless)} } className='showless-btn'>
                        {showless? <MdOutlineKeyboardDoubleArrowDown  className='showless-btn'/>:
                        <MdOutlineKeyboardDoubleArrowUp className='showless-btn'/>}
                    </button>
                </p>   
                <div className='btn-next'>
                    <button className='next' onClick={nextIndex}>
                        <GrFormPrevious />
                    </button>
                    <button className='next' onClick={prevIndex}>
                        <GrFormNext />
                    </button>
                </div>     
            </article>  
        );
    }

}

export default History;