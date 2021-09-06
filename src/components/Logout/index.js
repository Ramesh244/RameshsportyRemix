import {withRouter} from 'react-router-dom'

const Logout = () => {
  const {history} = this.props
  // const token = this.getAccessToken()
  localStorage.removeItem('pa_token')

  history.replace('/login')
}
export default withRouter(Logout)
