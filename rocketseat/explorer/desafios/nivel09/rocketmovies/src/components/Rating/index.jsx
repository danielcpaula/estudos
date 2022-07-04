import { Container } from './styles'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai';

function PositiveRatingsPlot(){
  return(
    <Container >
      <AiFillStar/>
    </Container>
  );
};

 function NegativeRatingsPlot(){
  return(
    <Container >
      <AiOutlineStar/>
    </Container>
  );
};

export function Rating({ rating }) {
  let ratingStarsPositive = []
  let ratingStarsNegative = []
  for (let i = 0; i <= 4; i++) {
    if (i < rating) {
      ratingStarsPositive.push(i)
    } else {
      ratingStarsNegative.push(i)
    }
  }
  
}