import { FiStar } from 'react-icons/fi'
import { PositiveRatings, NegativeRatings } from '../Rating'
import { Container } from './styles'


export function Film({data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="stars">
        <PositiveRatings rating={data.stars} />
        <NegativeRatings rating={data.stars} />
      </div>
      <p>{data.description}</p>
    </Container>
  )
}