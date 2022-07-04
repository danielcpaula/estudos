import { Container } from './styles'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai';

function PositiveRatingsPlot(){
  return(
    <Container >
      <AiFillStar/>
    </Container>
  )
}

 function NegativeRatingsPlot(){
  return(

    <Container >
      <AiOutlineStar/>
    </Container>
  )
}

export function PositiveRatings({rating}){
  let starPositive = rating 
  let starPositiveArray = []
 
  for( let i = 0; i < starPositive; i++)
  { 
    starPositiveArray.push(i)
  }
  return(
    starPositiveArray.map(dat => PositiveRatingsPlot()) 
  )
}

export function NegativeRatings({rating}){
    let starNegative = 5 - rating
    let starNegativeArray = []

  for( let i = 0; i < starNegative; i++)
  { 
    starNegativeArray.push(i)
  }
  return(
    starNegativeArray.map(dat => NegativeRatingsPlot()) 
  );

};
