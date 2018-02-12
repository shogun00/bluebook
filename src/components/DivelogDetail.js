import React from 'react'
import moment from 'moment'
import { compose, withProps } from 'recompose'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'antd'

const DivelogDetail = ({ log }) => {
  const {
    id,
    dive_count,
    location,
    spot,
    date,
    entry_style,
    dive_style,
    note,
    entry_time,
    duration,
    max_depth,
    average_depth,
    tank_material,
    tank_capacity,
    air_starting,
    air_ending,
    suit_type,
    suit_thickness,
    weight,
    weather,
    temperature,
    water_temperature,
    wave,
    visibility,
    guide,
    buddy,
  } = log

  const diveDate = moment(date).format('YYYY年MM月DD日')
  const entryTime = moment(entry_time).format('HH:mm')

  return (
    <div>
      <Card
        title={`${diveDate} エリア ${location}  ポイント ${spot}`}
        extra={
          <Link to={{ pathname: `/${id}/edit`, state: { log: log } }}>
            Edit
          </Link>
        }
      >
        <Row>
          <Col span={4}>
            <p>ダイブスタイル</p>
            <p style={{ fontSize: 20 }}>{dive_style}</p>
          </Col>
          <Col span={4}>
            <p>エントリー</p>
            <p style={{ fontSize: 20 }}>{entry_style}</p>
          </Col>
          <Col span={4}>
            <p>最大深度</p>
            <p style={{ fontSize: 20 }}>{max_depth} m</p>
          </Col>
          <Col span={4}>
            <p>潜水開始</p>
            <p style={{ fontSize: 20 }}>{entryTime}</p>
          </Col>
          <Col span={4}>
            <p>潜水時間</p>
            <p style={{ fontSize: 20 }}>{duration} min</p>
          </Col>
          <Col span={4}>
            <p>ダイブ本数</p>
            <p style={{ fontSize: 20 }}>{dive_count} 本</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={5}>
            <p>天候</p>
            <p style={{ fontSize: 20 }}>{weather}</p>
          </Col>
          <Col span={5}>
            <p>波</p>
            <p style={{ fontSize: 20 }}>{wave}</p>
          </Col>
          <Col span={5}>
            <p>気温</p>
            <p style={{ fontSize: 20 }}>{temperature} ℃</p>
          </Col>
          <Col span={5}>
            <p>水温</p>
            <p style={{ fontSize: 20 }}>{water_temperature} ℃</p>
          </Col>
          <Col span={4}>
            <p>透明度</p>
            <p style={{ fontSize: 20 }}>{visibility} m</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={5}>
            <p>スーツ</p>
            <p style={{ fontSize: 20 }}>
              {suit_type} {suit_thickness} mm
            </p>
          </Col>
          <Col span={5}>
            <p>ウェイト</p>
            <p style={{ fontSize: 20 }}>{weight} kg</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={5}>
            <p>タンク</p>
            <p style={{ fontSize: 20 }}>
              {tank_material} {tank_capacity} L
            </p>
          </Col>
          <Col span={5}>
            <p>開始残圧</p>
            <p style={{ fontSize: 20 }}>{air_starting} bar</p>
          </Col>
          <Col span={5}>
            <p>終了残圧</p>
            <p style={{ fontSize: 20 }}>{air_ending} bar</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={24}>
            <p>メモ</p>
            <p style={{ fontSize: 20 }}>{note}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={4}>
            <p>ガイド</p>
            <p style={{ fontSize: 20 }}>{guide}</p>
          </Col>
          <Col span={4}>
            <p>バディ</p>
            <p style={{ fontSize: 20 }}>{buddy}</p>
          </Col>
        </Row>
      </Card>
      <div style={{ marginTop: 5 }}>
        <Link to="/">back</Link>
      </div>
    </div>
  )
}

const enhance = compose(
  withProps(({ location: { state } }) => ({
    log: state.log,
  }))
)

export default enhance(DivelogDetail)
