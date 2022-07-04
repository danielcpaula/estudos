import { FiStar } from 'react-icons/fi'
import { Rating } from '../Rating'
import { Container } from './styles'


export function Film({data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="stars">
        <Rating rating={data.stars} />
      </div>
      <p>{data.description}</p>
    </Container>
  )
}