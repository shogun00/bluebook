import React from 'react'
import { Form, Row, Col, Button } from 'antd'
import DivePurpose from './log_forms/DivePurpose'
import DiveCount from './log_forms/DiveCount'
import DiveDate from './log_forms/DiveDate'
import EntryTime from './log_forms/EntryTime'
import Location from './log_forms/Location'
import EntryType from './log_forms/EntryType'
import MaxDepth from './log_forms/MaxDepth'
import Duration from './log_forms/Duration'
import Note from './log_forms/Note'
import OptionTabs from './log_forms/OptionTabs'
import Instructor from './log_forms/Instructor'
import Buddy from './log_forms/Buddy'
import Publication from './log_forms/Publication'

const rowStyle = { marginBottom: 0 }

const LogCreator = ({ getFieldDecorator, handleSubmit }) => (
  <Form onSubmit={handleSubmit} style={{ width: '60%', margin: 'auto' }}>
    <Row style={rowStyle}>
      <Col span={12}>
        <DivePurpose getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={12}>
        <DiveCount getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <DiveDate getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={6}>
        <EntryTime getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={10}>
        <Location getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <EntryType getFieldDecorator={getFieldDecorator} />
    </Row>
    <Row style={rowStyle}>
      <Col span={12}>
        <MaxDepth getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={12} style={{ padding: '0 5px' }}>
        <Duration getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Note getFieldDecorator={getFieldDecorator} />
    </Row>
    <Row style={rowStyle}>
      <div style={{ padding: 5 }}>
        <OptionTabs getFieldDecorator={getFieldDecorator} />
      </div>
    </Row>
    <Row style={rowStyle}>
      <Col span={12}>
        <Instructor getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={12}>
        <Buddy getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Publication getFieldDecorator={getFieldDecorator} />
    </Row>
    <Button type="primary" htmlType="submit">
      Save
    </Button>
  </Form>
)

export default LogCreator
