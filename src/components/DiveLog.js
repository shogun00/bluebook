import React from 'react'
import { Card, Row, Col } from 'antd'

const DiveLog = props => {
  const {
    id,
    location,
    spot,
    date,
    weather,
    wind_direction,
    wind_level,
    air_temperature,
    surface_temperature,
    bottom_temperature,
    suit,
    tank_size,
    tank_category,
    weight,
    dive_count,
    entry_time,
    exit_time,
    dive_time,
    start_air,
    finish_air,
    max_depth,
    average_depth,
    visibility,
    comment,
    buddy,
  } = props.log
  return (
    <Card
      title={`Date: ${date} Location: ${location} Total Dive: ${dive_count}`}
    >
      <Row>
        <Col span={12}>
          <h4>Spot</h4>
          {spot}
        </Col>
        <Col span={12}>
          <h4>Weather</h4>
          {weather} Wind: {wind_direction} {wind_level}
        </Col>
      </Row>
      <Row>
        <h3>Temperature</h3>
        <Col span={8}>
          <dl>
            <dt>
              <strong>Air</strong>
            </dt>
            <dd>{air_temperature} ℃</dd>
          </dl>
        </Col>
        <Col span={8}>
          <dl>
            <dt>
              <strong>Surface</strong>
            </dt>
            <dd>{surface_temperature} ℃</dd>
          </dl>
        </Col>
        <Col span={8}>
          <dl>
            <dt>
              <strong>Bottom</strong>
            </dt>
            <dd>{bottom_temperature} ℃</dd>
          </dl>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div>
            <h4>Suit</h4>
            {suit}
          </div>
          <div>
            <h4>Weight</h4>
            {weight} kg
          </div>
        </Col>
        <Col span={12}>
          <div>
            <h4>Tank</h4>
            {tank_category} {tank_size} L
          </div>
          <div>
            <ul>
              <li>start: {start_air}</li>
              <li>finish: {finish_air}</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <dl>
            <dt>
              <strong>entry time</strong>
            </dt>
            <dd>{entry_time}</dd>
          </dl>
        </Col>
        <Col span={8}>
          <dl>
            <dt>
              <strong>exit time</strong>
            </dt>
            <dd>{exit_time}</dd>
          </dl>
        </Col>
        <Col span={8}>
          <dl>
            <dt>
              <strong>dive time</strong>
            </dt>
            <dd>{dive_time}</dd>
          </dl>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <dl>
            <dt>
              <strong>max depth</strong>
            </dt>
            <dd>{max_depth} m</dd>
          </dl>
        </Col>
        <Col span={8}>
          <dl>
            <dt>
              <strong>average depth</strong>
            </dt>
            <dd>{average_depth} m</dd>
          </dl>
        </Col>
        <Col span={8}>
          <dl>
            <dt>
              <strong>visibility</strong>
            </dt>
            <dd>{visibility} m</dd>
          </dl>
        </Col>
      </Row>
      <dl>
        <dt>
          <strong>comment</strong>
        </dt>
        <dd>{comment}</dd>
      </dl>
      <Row>
        <dl>
          <dt>
            <strong>buddy</strong>
          </dt>
          <dd>{buddy}</dd>
        </dl>
      </Row>
    </Card>
  )
}

export default DiveLog
