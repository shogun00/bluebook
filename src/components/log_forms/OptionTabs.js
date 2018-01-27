import React from 'react'
import { Tabs } from 'antd'

import AirTunkPanel from './AirTunkPanel'
import GearsPanel from './GearsPanel'
import ConditionsPanel from './ConditionsPanel'

const TabPane = Tabs.TabPane

const OptionTabs = ({ getFieldDecorator }) => (
  <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="AirTunk" key="1">
      <AirTunkPanel getFieldDecorator={getFieldDecorator} />
    </TabPane>
    <TabPane tab="Gear" key="2">
      <GearsPanel getFieldDecorator={getFieldDecorator} />
    </TabPane>
    <TabPane tab="Conditions" key="3">
      <ConditionsPanel getFieldDecorator={getFieldDecorator} />
    </TabPane>
  </Tabs>
)

export default OptionTabs
