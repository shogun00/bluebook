import React from 'react'
import { Row, Col } from 'antd'

import Weather from './Weather'
import Wave from './Wave'
import Visibility from './Visibility'
import Temperature from './Temperature'
import WaterTemperature from './WaterTemperature'

const rowStyle = { marginBottom: 0 }

const ConditionsPanel = ({ getFieldDecorator, log = null }) => (
  <div>
    <Row style={rowStyle}>
      <Col span={8}>
        <Weather
          getFieldDecorator={getFieldDecorator}
          value={log ? log.weather : null}
        />
      </Col>
      <Col span={8}>
        <Wave
          getFieldDecorator={getFieldDecorator}
          value={log ? log.wave : null}
        />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <Visibility
          getFieldDecorator={getFieldDecorator}
          value={log ? log.visibility : null}
        />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={12}>
        <Temperature
          getFieldDecorator={getFieldDecorator}
          value={log ? log.temperature : null}
        />
      </Col>
      <Col span={12}>
        <WaterTemperature
          getFieldDecorator={getFieldDecorator}
          value={log ? log.water_temperature : null}
        />
      </Col>
    </Row>
  </div>
)

export default ConditionsPanel
