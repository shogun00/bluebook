import React from 'react'
import { Tabs } from 'antd'

import AirTankPanel from './AirTankPanel'
import GearsPanel from './GearsPanel'
import ConditionsPanel from './ConditionsPanel'

const TabPane = Tabs.TabPane

const OptionTabs = ({ getFieldDecorator, value = null }) => (
  <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="エアタンク" key="1">
      <AirTankPanel getFieldDecorator={getFieldDecorator} value={value} />
    </TabPane>
    <TabPane tab="機材" key="2">
      <GearsPanel getFieldDecorator={getFieldDecorator} value={value} />
    </TabPane>
    <TabPane tab="コンディション" key="3">
      <ConditionsPanel getFieldDecorator={getFieldDecorator} value={value} />
    </TabPane>
  </Tabs>
)

export default OptionTabs
