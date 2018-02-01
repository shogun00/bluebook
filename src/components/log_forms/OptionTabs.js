import React from 'react'
import { Tabs } from 'antd'

import AirTankPanel from './AirTankPanel'
import GearsPanel from './GearsPanel'
import ConditionsPanel from './ConditionsPanel'

const TabPane = Tabs.TabPane

const OptionTabs = ({ getFieldDecorator, log = null }) => (
  <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="エアタンク" key="1">
      <AirTankPanel getFieldDecorator={getFieldDecorator} log={log} />
    </TabPane>
    <TabPane tab="機材" key="2">
      <GearsPanel getFieldDecorator={getFieldDecorator} log={log} />
    </TabPane>
    <TabPane tab="コンディション" key="3">
      <ConditionsPanel getFieldDecorator={getFieldDecorator} log={log} />
    </TabPane>
  </Tabs>
)

export default OptionTabs
