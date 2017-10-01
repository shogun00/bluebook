import React from 'react'
import { Layout, Button } from 'antd'
import DiveLog from './DiveLog'

const Url = "http://localhost:3001/divelogs"

class DiveLogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      divelogs: []
    }
  }

  componentDidMount = () => {
    fetch(Url, {
      'accept': 'application/json'
    }).then((response) => {
      return response.json()
    }).then(data => {
      this.setState({divelogs: data})
    }).then(
      console.log('Fetch error')
    )
  }

  render() {
    if (this.state.divelogs.length > 0) {
      return (
        <div style={{ width: '100%', margin: '0 auto' }}>
          <ul>
            {this.state.divelogs.map((log, i) => (
              <li key={i} style={{ padding: '10px' }}>
                <DiveLog log={log} />
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <p>No log</p>
      )
    }
  }
}

export default DiveLogs
