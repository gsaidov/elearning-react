import React from 'react'
import { Card, CardImg, CardText, CardBody,CardTitle,Button} from 'reactstrap';
import './Home.css';


const Home = () =>{

    const cardInfo = [
    {
        id: 0,
        name: "React Lake Campground",
        image: "/assets/images/img1.jpg",
        elevation: 1233,
        featured: false,
        description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
    },
    {
        id: 1,
        name:"Chrome River Campground ",
        image: "/assets/images/img2.jpg",
        elevation: 877,
        featured: false,
        description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
    },
    {
        id: 2,
        name:"Breadcrumb Trail Campground",
        image: "/assets/images/img3.jpg",
        elevation: 2901,
        featured: false,
        description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
    }
    
];
const renderCard =(card,index)=>{
    return(
        <Card key={index} className="box d-none d-sm-block" >
            <CardImg src={card.image} alt={card.name} />
            <CardBody>
                <CardTitle>{card.name}</CardTitle>
                <CardText>{card.description}</CardText>
            </CardBody>
        </Card>
    );
}

    return (
      <>
        <div className="first">
        <div className="row">
            <div className="col features" >
                <h1>Main/Features</h1>
                <p>nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.</p>
            </div>
        </div>
        <div className="row" >
            <div className="col sm12 m3 ml-4">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">pyhton</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                   
                    </div>
                </div>
           </div>
           <div class="col sm12 m6 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title"><i className="fa fa-pencil fa-lg"></i>javascript</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                   
                    </div>
                </div>
           </div>
           <div class="col sm12 m6 mr-4">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">java</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    
                    </div>
                </div>
           </div>
        </div>  
        <Button className="mb-3 mt-4" type="submit" value="submit" color="primary">Join CloudLearn</Button>
        </div>
      <div className="container">
        <div className="row">   
            <div className="col">
                    <div className="render">   
                     {cardInfo.map(renderCard)}
                    </div> 
             </div> 
           </div>
        </div>
    </>
    );
}

export default Home;