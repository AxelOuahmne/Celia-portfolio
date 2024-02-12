
import useAuthContext from '../context/AuthContext'
function Home() {
    const {user} = useAuthContext();
  return (
    <div className='max-w-7xl mx-auto mt-12'>
  <h1>{user?.name}</h1>
    </div>
  )
}

export default Home
