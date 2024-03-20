import Header from './Header';
import { Outlet } from 'react-router-dom';


function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root