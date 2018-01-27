import React from 'react'
import { Row, Col } from 'antd'

import TunkMaterial from './TunkMaterial'
import Capacity from './Capacity'
import AirStarting from './AirStarting'
import AirEnding from './AirEnding'

const rowStyle = { marginBottom: 0 }

const AirTunkPanel = ({ getFieldDecorator }) => (
  <div>
    <Row style={rowStyle}>
      <Col span={12}>
        <TunkMaterial getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={12}>
        <Capacity getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <AirStarting getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={8}>
        <AirEnding getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
  </div>
)

export default AirTunkPanel
