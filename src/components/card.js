const Card = (props) =>{

    return (
        <div className="card-container">
            <div className="img-container">
                <img style={{objectFit:"cover"}} src={props.imageuri}></img>
            </div>
            <div className="card-title">
                <h4>{props.title}</h4>
            </div>
            <div className="card-body">
                <p>{props.body}</p>
            </div>



            <div className="section" >

            <div className="titles">
                <h1>What We Do</h1>
            </div>
            <div className="content">
                <h3>We are bunch of guys who love to design and develop on web, tech enthusiasts you can say.
                Our strengths include</h3>
                <div className="card-flex">
                    <Card title="Web Development" body="xyz" imageuri="https://wallpaperaccess.com/full/2040750.jpg"></Card>
                    <Card title="Android App Development" body="xyz" imageuri="https://wallpaperaccess.com/full/2040750.jpg"></Card>
                    <Card title="Graphics Designing" body="xyz" imageuri="https://wallpaperaccess.com/full/2040750.jpg"></Card>

                </div>
                
                <br></br>
                
                <h3>We are here to make this process simpler and cheaper for you
                It would be pleasure to work with new projects and understand your concerns.</h3>
            </div>
        
        </div>
        </div>
    )
}

export default Card;