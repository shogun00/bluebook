import React from 'react'
import { Row, Col } from 'antd'

import TankMaterial from './TankMaterial'
import Capacity from './Capacity'
import AirStarting from './AirStarting'
import AirEnding from './AirEnding'

const rowStyle = { marginBottom: 0 }

const AirTankPanel = ({ getFieldDecorator, log = null }) => (
  <div>
    <Row style={rowStyle}>
      <Col span={12}>
        <TankMaterial
          getFieldDecorator={getFieldDecorator}
          value={log ? log.tank_material : null}
        />
      </Col>
      <Col span={12}>
        <Capacity
          getFieldDecorator={getFieldDecorator}
          value={log ? log.tank_capacity : null}
        />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <AirStarting
          getFieldDecorator={getFieldDecorator}
          value={log ? log.air_starting : null}
        />
      </Col>
      <Col span={8}>
        <AirEnding
          getFieldDecorator={getFieldDecorator}
          value={log ? log.air_ending : null}
        />
      </Col>
    </Row>
  </div>
)

export default AirTankPanel
