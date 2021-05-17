import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import { routes } from './routes'

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              exact={route.exact}
              key={i}
              meta={route.meta}
              render={(props) => {
                // pass the sub-routes down to keep nesting
                return (
                  <route.component
                    {...props}
                    routes={route.routes}
                    meta={route.meta}
                  />
                )
              }}
            />
          ))}
        </Switch>
      </Router>
    </div>
  )
}
