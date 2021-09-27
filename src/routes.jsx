import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Admin from './database/Admin'
import Cookies from 'js-cookie'

const Routes = () => {
  const [user , setUser] = React.useState({username:""})
  const [error, setError] = React.useState("")
  const [auth, setAuth] = React.useState(false)
  
  const readCookies = () => {
    const userCookies = Cookies.get("user")
    if(userCookies){
      setAuth(true)
    }
  }

  React.useEffect(() => {
    readCookies()
  }, [])

  const logIn = (data) => {
      for(let i = 0; i< Admin.length;i++)
      {
        if(data.username === Admin[i].username) {
          if(data.password === Admin[i].password)
          {
            setUser({
              username: data.username
            })
            setAuth(true)
            Cookies.set("user","loginTrue")
            return
          }
        }
      }
      setError("Username or Password is wrong!")
      return auth
  }

  const logOut = () => {
    setUser({username:""})
    setAuth(false)
    Cookies.remove("user")
  }

    return (
      <Router>
        <Switch>
          <Route exact path="/">
          <Home logout={logOut} isAuth={auth} />
            {/* {
              auth ? <Home logout={logOut} /> : <Redirect to="/login" />
            } */}
          </Route>
          <Route exact path="/login">
            {
              auth ? <Redirect to="/" /> : <Loginpage login={logIn} error={error} />
            }
          </Route>
        </Switch>
      </Router>
    )
}

// const ProtectedRoute = ({auth , component:Component, ...rest}:any) => {
//   return(
//     <Route
//     {...rest}
//     render = {(props) => auth ? <Component {...props}/> : <Redirect to="/login" />}
//     />
//   )
// }

export default Routes
