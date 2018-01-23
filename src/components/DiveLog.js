import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd'

const Divelog = ({ log }) => {
  const { id, date, location, spot, dive_count } = log
  return (
    <Card
      title={`Date: ${date} Location: ${location} Dive Count: ${dive_count}`}
      extra={<Link to={{ pathname: `/${id}`, state: { log: log } }}>more</Link>}
    />
  )
}

export default Divelog
