import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'

const Divelog = ({ log }) => {
  const { id, date, location, spot } = log
  return (
    <Card
      title={`${date} ${location} ${spot}`}
      extra={<Link to={{ pathname: `/${id}`, state: { log: log } }}>more</Link>}
    />
  )
}

export default Divelog
