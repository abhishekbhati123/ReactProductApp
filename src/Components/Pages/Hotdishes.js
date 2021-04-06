// import { Button } from 'bootstrap';
import React,{useState} from 'react';
import {Card,Button} from 'react-bootstrap';

const HotDishes=()=>{
    const hotDishesh=[
        {
                  "id": "1",
                  "picture": "./Images/HotDishesh/63362881.jpg",
                  "foodName": "Fiedler",
                  "price": "$2.29",
                  "availablity":"20 available"
                  
        },{
          "id": "2",
                  "picture": "./Images/HotDishesh/7b86a4bff1ea749526c832b074c4969e.jpg",
                  "foodName": "Fiedler",
                  "price": "$3.29",
                  "availablity":"10 available"
        },{
          "id": "3",
                  "picture": "./Images/HotDishesh/download.jpg",
                  "foodName": "Fiedler",
                  "price": "$1.29",
                  "availablity":"03 available"
        },{
          "id": "4",
                  "picture": "./Images/HotDishesh/Hot-food-008.jpg",
                  "foodName": "Fiedler",
                  "price": "$1.10",
                  "availablity":"20 available"
        },{
          "id": "5",
                  "picture": "./Images/HotDishesh/hot-food-8671529.jpg",
                  "foodName": "Fiedler",
                  "price": "$6.00",
                  "availablity":"08 available"
        },{
          "id": "6",
                  "picture": "./Images/HotDishesh/pasta.jpg",
                  "foodName": "Fiedler",
                  "price": "$5.89",
                  "availablity":"01 available"
        }
      ]
      console.log(hotDishesh)

     //here we want to manage state in functional component so we use useState hook,here we set initial hook Value
  const [foodData, setfoodData] = useState(hotDishesh) ;
  console.log(foodData)
    return(
        <div className="Container" style={{"backgroundColor":"black"}}>
        
            {
                hotDishesh.map((element)=>{
                    <Card style={{ width: '18rem'}} key={element.id}>
                    <Card.Img variant="top" src={element.picture}/>
                    <Card.Body>
                      <Card.Title>{element.name}</Card.Title>
                      <Card.Text>
                       {element.price}
                       <br/>
                       {element.availablity}
                      </Card.Text>

                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                    
                    
                  
                })
            }
        
</div>
        
    )

}
export default HotDishes;

