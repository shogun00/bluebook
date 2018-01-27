import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, withHandlers } from 'recompose'
import {
  Form,
  DatePicker,
  TimePicker,
  Select,
  InputNumber,
  Input,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Tabs,
  Row,
  Col,
} from 'antd'
import { requestCreateLog } from '../actions/divelog'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const TabPane = Tabs.TabPane
const { TextArea } = Input

const rowStyle = { marginBottom: 0 }

const LogCreatorContainer = ({ getFieldDecorator, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} style={{ width: '60%', margin: 'auto' }}>
      <Row style={rowStyle}>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('divePurpose', {
              initialValue: 'fun',
            })(
              <RadioGroup>
                <RadioButton value="fun">Fun Diving</RadioButton>
                <RadioButton value="free">Free Diving</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('diveCount', {
              rules: [{ required: true, message: 'Please input dive count!' }],
            })(
              <InputNumber
                min={0}
                step={1}
                placeholder="dive count"
                style={{ width: '100%' }}
              />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col span={8}>
          <FormItem>
            {getFieldDecorator('date', {
              rules: [{ required: true, message: 'Please input date!' }],
            })(
              <DatePicker
                placeholder="ダイビング日付"
                style={{ width: '100%' }}
              />
            )}
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem>
            {getFieldDecorator('startTime', {
              rules: [{ required: true, message: 'Please input start time!' }],
            })(
              <TimePicker
                format="HH:mm"
                style={{ padding: '0 5px', width: '100%' }}
                placeholder="エントリー開始"
              />
            )}
          </FormItem>
        </Col>
        <Col span={10}>
          <FormItem>
            {getFieldDecorator('location', {
              rules: [{ required: true, message: 'Please input location!' }],
            })(<Input placeholder="Location" style={{ width: '100%' }} />)}
          </FormItem>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <FormItem>
          {getFieldDecorator('diveStyle', {
            initialValue: 'boat',
          })(
            <RadioGroup>
              <RadioButton value="boat">Boat</RadioButton>
              <RadioButton value="beach">Beach</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
      </Row>
      <Row style={rowStyle}>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('maxDepth', {
              rules: [{ required: true, message: 'Please input max depth!' }],
            })(
              <InputNumber
                min={0}
                step={0.1}
                placeholder="max depth"
                style={{ width: '90%' }}
              />
            )}
            m
          </FormItem>
        </Col>
        <Col span={12} style={{ padding: '0 5px' }}>
          <FormItem>
            {getFieldDecorator('duration', {
              rules: [
                { required: true, message: 'Please input duration time!' },
              ],
            })(
              <InputNumber
                min={0}
                placeholder="Duration"
                style={{ width: '90%' }}
              />
            )}
            min
          </FormItem>
        </Col>
      </Row>
      <Row>
        <FormItem>
          {getFieldDecorator('note')(<TextArea rows={4} placeholder="note" />)}
        </FormItem>
      </Row>
      <Row>
        <div style={{ padding: 5 }}>
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="AirTunk" key="1">
              <Row style={rowStyle}>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('tunkMaterial')(
                      <RadioGroup>
                        <RadioButton value="steel">Steel</RadioButton>
                        <RadioButton value="alminium">Alminium</RadioButton>
                        <RadioButton value="another">Another</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('capacity')(
                      <InputNumber
                        min={0}
                        placeholder="capacity"
                        style={{ width: '90%' }}
                      />
                    )}
                    L
                  </FormItem>
                </Col>
              </Row>
              <Row style={rowStyle}>
                <Col span={8}>
                  <FormItem>
                    {getFieldDecorator('starting')(
                      <InputNumber
                        min={0}
                        placeholder="starting"
                        style={{ width: '80%' }}
                      />
                    )}
                    bar
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem>
                    {getFieldDecorator('ending')(
                      <InputNumber
                        min={0}
                        placeholder="end"
                        style={{ width: '80%' }}
                      />
                    )}
                    bar
                  </FormItem>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Gear" key="2">
              Gear
            </TabPane>
            <TabPane tab="Conditions" key="3">
              <Row style={rowStyle}>
                <Col span={8}>
                  <FormItem>
                    {getFieldDecorator('weather')(
                      <RadioGroup>
                        <RadioButton value="sunny">Sunny</RadioButton>
                        <RadioButton value="cloudy">Cloudy</RadioButton>
                        <RadioButton value="rainy">Rainy</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem>
                    {getFieldDecorator('wave')(
                      <RadioGroup>
                        <RadioButton value="hard">Hard</RadioButton>
                        <RadioButton value="middle">Middle</RadioButton>
                        <RadioButton value="low">Low</RadioButton>
                      </RadioGroup>
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row style={rowStyle}>
                <Col span={8}>
                  <FormItem>
                    {getFieldDecorator('visibility')(
                      <InputNumber
                        min={0}
                        step={0.1}
                        placeholder="visibility"
                        style={{ width: '90%' }}
                      />
                    )}
                    m
                  </FormItem>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </div>
      </Row>
      <Row style={rowStyle}>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('instructor')(
              <Input placeholder="Instructor name" style={{ width: '90%' }} />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('buddy')(
              <Input placeholder="Buddy" style={{ width: '90%' }} />
            )}
          </FormItem>
        </Col>
      </Row>
      <Row style={rowStyle}>
        <FormItem>
          {getFieldDecorator('publication', {
            initialValue: 'public',
          })(
            <RadioGroup>
              <RadioButton value="public">Public</RadioButton>
              <RadioButton value="private">Private</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
      </Row>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </form>
  )
}

const handleSubmit = props => e => {
  e.preventDefault()
  props.form.validateFields((error, values) => {
    if (!error) {
      console.log('Received values of form: ', values)
      const params = {
        dive_purpose: values['divePurpose'],
        dive_count: values['diveCount'],
        date: values['date'].format('YYYY-MM-DD'),
        entry_time: values['startTime'].format('HH:mm'),
        location: values['location'],
        entry_type: values['diveStyle'],
        max_depth: values['maxDepth'],
        duration: values['duration'],
        note: values['note'],
        publication: values['publication'],
      }
      console.log(params)
      props.postLog(params)
    }
  })
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  postLog: params => dispatch(requestCreateLog(params)),
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create(),
  withProps(({ form }) => ({
    getFieldDecorator: form.getFieldDecorator,
  })),
  withHandlers({
    handleSubmit,
  })
)

export default enhance(LogCreatorContainer)
