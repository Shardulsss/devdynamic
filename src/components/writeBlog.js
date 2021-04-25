import {useState} from 'react';
import { FaAngleRight } from 'react-icons/fa';


const WriteBlog = () => {

    const [author,setAuth] = useState({"isloged":false,
                                    "username":'',
                                    "password":''
                                    })

    const handleInput = (e)=>{
        var inp = e.target.value
        
        setAuth({
            "isloged":author.isloged,
            "username":inp,
            "password":''
        })
    }

    const handlePass = (e)=>{
        var inp = e.target.value

        setAuth({
            "isloged":author.isloged,
            "username":author.username,
            "password":inp
        })
        
    }
    
    const handleClick = () =>{
        if(author.username==="bala" && author.password==="123456"){
            setAuth({
                isloged:true,
                "username":author.username,
                "password":author.password,
                "title":'',
                "description":'',
                "content":'',
                "date":''
            })
            
        }
        else{
            alert("incorrect credentials")
        }
        console.log(author)
    }

    const handleTitle = (e)=>{
        var inp = e.target.value

        setAuth({
            isloged:true,
            "username":author.username,
            "password":author.password,
            "title":inp,
            "description":'',
            "content":'',
            "date":''
        })
        
    }

    const handleDesc = (e)=>{
        var inp = e.target.value

        setAuth({
            isloged:true,
            "username":author.username,
            "password":author.password,
            "title":author.title,
            "description":inp,
            "content":'',
            "date":''
        })
        
    }

    const handleContent = (e)=>{
        var inp = e.target.value

        setAuth({
            isloged:true,
            "username":author.username,
            "password":author.password,
            "title":author.title,
            "description":author.description,
            "content":inp,
            "date":''
        })
        
    }

    const handleDate = (e)=>{
        var inp = e.target.value

        setAuth({
            isloged:true,
            "username":author.username,
            "password":author.password,
            "title":author.title,
            "description":author.description,
            "content":author.content,
            "date":inp
        })
        
    }

    const handlePost = () => {
        console.log(author)
    }

    
    

    return (
        <div>
            {!author.isloged && <div>
                <form>
                <label>username</label>
                    <input type="text" onChange={handleInput} required></input>
                <label>Password</label>
                    <input type="text" onChange={handlePass} required></input>
                
                </form>
                <button onClick={handleClick}>login</button>
            </div>}
            
            {author.isloged && 
            <div>
                <form>
                    <label>Title</label>
                    <input type="text" onChange={handleTitle} required></input>
                    <label>description</label>
                    <input type="text" onChange={handleDesc} required></input>
                    <label>Content</label>
                    <input type="text" onChange={handleContent} required></input>
                    <label>date</label>
                    <input type="text" onChange={handleDate} required></input>
                </form>
                <button onClick={handlePost}>post</button>
            </div>
            }

        </div>
    )
}

export default WriteBlog;