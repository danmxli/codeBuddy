import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Chat from './pages/Chat';

function App() {

  const pages = [
    {
      url: '/',
      component: <Home />
    },
    {
      url: '/chat',
      component: <Chat />
    }
  ]

  return (
    <Routes>
      {pages.map((pageData, index) => (
        <Route key={index} path={pageData.url} element={pageData.component} />
      ))}
    </Routes>
  )
}

export default App