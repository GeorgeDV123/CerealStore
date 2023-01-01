import { Col, Container, Row } from 'react-bootstrap'
import { StoreItem } from '../Componets/StoreItem'
import storeItems from '../data/Data.json'

export function Store () {
  document.body.style.background = 'ivory'
  // Display store items
  return (
    <>
    <Container className="mb-4 mt-4 p-2" >
      <span className="h-box"><h1 className="h-text">Store</h1></span>
      <Row md={2} xs={1} lg={3} xl={4} className="g-4">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}
