import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../components/home/Home';

export default function Main() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
