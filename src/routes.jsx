import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Loginpage from './pages/Loginpage'
import Admin from './database/Admin'
import Cookies from 'js-cookie'
import Navigation from './components/navigation/Navigation'
import Text2Speech from './pages/text2speech/Text2Speech'
import Pic2Text from './pages/pic2text/Pic2Text'

const Routes = () => {
  const [user , setUser] = React.useState({username:""})
  const [error, setError] = React.useState("")
  const [auth, setAuth] = React.useState(false)
  
  console.log(user)

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
          <Route exact path="/login">
            {
              auth ? <Redirect to="/" /> : <Loginpage login={logIn} error={error} />
            }
          </Route>
          <div>
            <Navigation logout={logOut} isAuth={auth} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/speech2text">
              <Redirect to="/" />
            </Route>
            <Route exact path="/text2speech">
              <Text2Speech />
            </Route>
            <Route exact path="/recorgtext2pic">
              <Pic2Text />
            </Route>
          </div>
          
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
