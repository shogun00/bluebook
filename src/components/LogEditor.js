import React from 'react'
import { Form, Row, Col, Button } from 'antd'
import DiveStyle from './log_forms/DiveStyle'
import DiveCount from './log_forms/DiveCount'
import DiveDate from './log_forms/DiveDate'
import EntryTime from './log_forms/EntryTime'
import Location from './log_forms/Location'
import EntryStyle from './log_forms/EntryStyle'
import MaxDepth from './log_forms/MaxDepth'
import Duration from './log_forms/Duration'
import Note from './log_forms/Note'
import OptionTabs from './log_forms/OptionTabs'
import Guide from './log_forms/Guide'
import Buddy from './log_forms/Buddy'
import Publication from './log_forms/Publication'

const rowStyle = { marginBottom: 0 }

const LogEditor = ({ getFieldDecorator, handleSubmit, log }) => (
  <Form onSubmit={handleSubmit} style={{ width: '60%', margin: 'auto' }}>
    <Row style={rowStyle}>
      <Col span={12}>
        <DiveStyle
          getFieldDecorator={getFieldDecorator}
          value={log.dive_purpose}
        />
      </Col>
      <Col span={12}>
        <DiveCount
          getFieldDecorator={getFieldDecorator}
          value={log.dive_count}
        />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Col span={8}>
        <DiveDate getFieldDecorator={getFieldDecorator} value={log.date} />
      </Col>
      <Col span={6}>
        <EntryTime
          getFieldDecorator={getFieldDecorator}
          value={log.entry_time}
        />
      </Col>
      <Col span={10}>
        <Location getFieldDecorator={getFieldDecorator} value={log.location} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <EntryStyle
        getFieldDecorator={getFieldDecorator}
        value={log.entry_type}
      />
    </Row>
    <Row style={rowStyle}>
      <Col span={12}>
        <MaxDepth getFieldDecorator={getFieldDecorator} value={log.max_depth} />
      </Col>
      <Col span={12} style={{ padding: '0 5px' }}>
        <Duration getFieldDecorator={getFieldDecorator} value={log.duration} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Note getFieldDecorator={getFieldDecorator} value={log.note} />
    </Row>
    <Row style={rowStyle}>
      <div style={{ padding: 5 }}>
        <OptionTabs getFieldDecorator={getFieldDecorator} />
      </div>
    </Row>
    <Row style={rowStyle}>
      <Col span={12}>
        <Guide getFieldDecorator={getFieldDecorator} />
      </Col>
      <Col span={12}>
        <Buddy getFieldDecorator={getFieldDecorator} />
      </Col>
    </Row>
    <Row style={rowStyle}>
      <Publication
        getFieldDecorator={getFieldDecorator}
        value={log.publication}
      />
    </Row>
    <Button type="primary" htmlType="submit">
      Save
    </Button>
  </Form>
)

export default LogEditor
