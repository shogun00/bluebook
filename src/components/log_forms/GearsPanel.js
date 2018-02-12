import React from 'react'
import { Row, Col } from 'antd'

import SuitType from './SuitType'
import SuitThickness from './SuitThickness'
import Weight from './Weight'

const rowStyle = { marginBottom: 0 }

const GearsPanel = ({ getFieldDecorator, log = null }) => (
  <div>
    <Row style={rowStyle}>
      <Col span={12}>
        <SuitType
          getFieldDecorator={getFieldDecorator}
          value={log ? log.suit_type : null}
        />
      </Col>
      <Col span={12}>
        <SuitThickness
          getFieldDecorator={getFieldDecorator}
          value={log ? log.suit_thickness : null}
        />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={12}>
        <Weight
          getFieldDecorator={getFieldDecorator}
          value={log ? log.weight : null}
        />
      </Col>
    </Row>
  </div>
)

export default GearsPanel
