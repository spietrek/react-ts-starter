import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/UseAuth'

interface RequireAuthProps {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RequireAuth = ({ children }: RequireAuthProps): any => {
  const auth = useAuth()
  const location = useLocation()
  const { user } = auth

  if (user === null) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />
  }

  return children
}

export default RequireAuth
