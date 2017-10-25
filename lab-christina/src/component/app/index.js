import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Landing from '../landing'
import Dashboard from '../dashboard'

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to='/'> home </Link></li>
                <li><Link to='/dashboard'> dashboard </Link></li>
              </ul>
            </nav>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
