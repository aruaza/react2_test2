import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetPosts} from "../features/postSlice/getSlice";

const MainPage = () => {
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.post)
    useEffect(() => {
        dispatch(asyncGetPosts(counter))
    }, [counter]);
    console.log(counter)
    const plus = () => {
        setCounter(counter + 1)
    }
    const minus = () => {
        if (counter > 1){
            setCounter(counter -1)
        }
    }
    return (
        <div style={{display:'flex'}}>
            <button onClick={minus}>-</button>
            <div>
                {
                    posts?(
                        <div>
                            <h1>{posts.id}</h1>
                            <span>{posts.title}</span>
                        </div>
                    ):(
                        <div>
                            <h1>ЗАРГУЗКА...</h1>
                        </div>
                    )
                }
            </div>
            <button onClick={plus}>+</button>
        </div>
    );
};

export default MainPage;