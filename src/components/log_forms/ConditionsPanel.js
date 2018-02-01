import React from 'react'
import { Row, Col } from 'antd'

import Weather from './Weather'
import Wave from './Wave'
import Visibility from './Visibility'

const rowStyle = { marginBottom: 0 }

const ConditionsPanel = ({ getFieldDecorator, value = null }) => (
  <div>
    <Row style={rowStyle}>
      <Col span={8}>
        <Weather getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
      <Col span={8}>
        <Wave getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <Visibility getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
    </Row>
  </div>
)

export default ConditionsPanel
