import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const OutBlog = styled.div`
    box-shadow: 0px 0px 5px 0px;
    padding -bottom:30px;
    width:1160px;
    padding-right: 60px;
    
    
    margin-left:90px;
    margin-bottom:30px
`

const Blogdiv = styled.div`
    display:flex;
    align-items:center;
    
    
`
const Title = styled.div`
    overflow:hidden;
    text-align:center;
`

const Content = styled.div`
    overflow:hidden;
    align-items:center;
    height:150px
`
const Content_data = styled.div`
    text-align:center;
    width:700px;
`   

const Blog = (props)=>{

    const [readMore, setReadMore] = useState(false)



    const handleReadMore = () =>{
        setReadMore(true)
    }

    const handleReadLess = () =>{
        setReadMore(false)
    }

    return (
        <div>
        <OutBlog>
            <Blogdiv>
                <div className="blog-img-container" >
                    <img src="https://wallpaperaccess.com/full/2040750.jpg"></img>
                </div>
                <div>
                    <Title><h2>{props.post.title}</h2></Title>
                    
                    <Content>
                        <Content_data><p>{props.post.content}</p></Content_data>
                        
                    </Content>
                </div>

                {!readMore && <button onClick={handleReadMore}>read more</button>}
                
                
               
            </Blogdiv>
            {readMore && <div>
                <Content_data>{props.post.content}</Content_data>
                <button onClick={handleReadLess}>read less</button>
                </div>
            }
        </OutBlog>
        </div>
        
    );
}

export default Blog;