import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Character, CharacterList } from './pages';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/characters' element={<CharacterList />} />
          <Route path='/character/:id' element={<Character />} />
          <Route path='/*' element={<Navigate to='/characters' replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}