import { Col, Container, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/Data.json'

export function Store () {
  document.body.style.background = 'ivory'
  return (
    <>
    <Container className="mb-4 mt-4 p-2" >
      <span className="store-box"><h1 className="store-head">Store</h1></span>
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
