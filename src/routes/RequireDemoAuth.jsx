import { Navigate, useLocation } from 'react-router-dom'

export default function RequireDemoAuth({ children }) {
  const location = useLocation()
  const ok = window.sessionStorage.getItem('aquaaliv_demo_auth') === 'true'

  if (!ok) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}
