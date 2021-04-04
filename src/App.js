import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar/Header';
import Router from './Router/Router';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
  return (
    <>
      <AppBar />
      <Router />
      <ToastContainer autoClose={3000} />
    </>
  );
}
