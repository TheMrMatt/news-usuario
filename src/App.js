import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Partes/Footer';
import Navbar from './components/Partes/Navbar';
import History from "./history";
import { NotasProvider } from './Store/context/NotasContext';
import { PortadaProvider } from './Store/context/PortadaContext';
import { UserProvider, UserContext } from './Store/context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';
import NotaPage from './pages/NotaPage';
import UserPage from './pages/UserPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import LoadingScreen from './pages/Especials/LoadingScreen';
import ErrorScreen from './pages/Especials/ErrorScreen';
import SubSeccionPage from './pages/SubSectionPage';
import SectionPage from './pages/SectionPage';
import TagPage from './pages/TagPage';


function App() {
  const { user, auth, isLoggedIn } = useContext(UserContext)




  /*useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log('user ', foundUser)
      isLoggedIn(foundUser);
    }
  }, []);*/

  console.log('user', user, auth)
  return (
    <NotasProvider>
      <UserProvider>
        <PortadaProvider>
          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} exact />
            <Route path="/loading" element={<LoadingScreen />} exact />
            <Route path="/user" element={<UserPage />} exact />

            <Route path="/nota/:id" element={<ProtectedRoute>
              <NotaPage />
            </ProtectedRoute>
            } />

            <Route path="/deportes" element={<SectionPage cat='Deportes' subCats={['FUTBOL', 'RUGBY', 'TENIS', 'MASDEPORTES']} />} exact />
            <Route path="/deportes/rugby" element={<SubSeccionPage subCat='Rugby' />} exact />
            <Route path="/deportes/futbol" element={<SubSeccionPage subCat='Futbol' />} exact />
            <Route path="/deportes/tenis" element={<SubSeccionPage subCat='Tenis' />} exact />
            <Route path="/deportes/masdeportes" element={<SubSeccionPage subCat='MasDeportes' />} exact />
            <Route path="/espectaculos" element={<SectionPage cat='Espectaculos' subCats={['CINE', 'TEATRO', 'MASESPECTACULOS']} />} exact />
            <Route path="/espectaculos/cine" element={<SubSeccionPage subCat='Cine' />} exact />
            <Route path="/espectaculos/teatro" element={<SubSeccionPage subCat='Teatro' />} exact />
            <Route path="/espectaculos/masespectaculos" element={<SubSeccionPage subCat='MasEspectaculos' />} exact />
            <Route path="/tecnologia" element={<SectionPage cat='Tecnologia' subCats={[]} content='Tecnologia' />} exact />
            <Route path="/policiales" element={<SectionPage cat='Policiales' subCats={[]} content='Policiales' />} exact />
            <Route path="/tag/:id" element={<TagPage />} exact />
            <Route path='*' element={<ErrorScreen />} />

          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
        </PortadaProvider>
      </UserProvider>
    </NotasProvider>

  );
}

export default App;
