import React from 'react'
import { Row, Col } from 'antd'

import TankMaterial from './TankMaterial'
import Capacity from './Capacity'
import AirStarting from './AirStarting'
import AirEnding from './AirEnding'

const rowStyle = { marginBottom: 0 }

const AirTankPanel = ({ getFieldDecorator, value = null }) => (
  <div>
    <Row style={rowStyle}>
      <Col span={12}>
        <TankMaterial getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
      <Col span={12}>
        <Capacity getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <AirStarting getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
      <Col span={8}>
        <AirEnding getFieldDecorator={getFieldDecorator} value={value} />
      </Col>
    </Row>
  </div>
)

export default AirTankPanel
