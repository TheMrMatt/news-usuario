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

            <Route path="/deportes" element={<ProtectedRoute> <SectionPage cat='Deportes' subCats={['FUTBOL', 'RUGBY', 'TENIS', 'MASDEPORTES']} /></ProtectedRoute>} exact />
            <Route path="/deportes/rugby" element={<ProtectedRoute><SubSeccionPage subCat='Rugby' /></ProtectedRoute>} exact />
            <Route path="/deportes/futbol" element={<ProtectedRoute><SubSeccionPage subCat='Futbol' /></ProtectedRoute>} exact />
            <Route path="/deportes/tenis" element={<ProtectedRoute><SubSeccionPage subCat='Tenis' /></ProtectedRoute>} exact />
            <Route path="/deportes/masdeportes" element={<ProtectedRoute><SubSeccionPage subCat='MasDeportes' /></ProtectedRoute>} exact />
            <Route path="/espectaculos" element={<ProtectedRoute><SectionPage cat='Espectaculos' subCats={['CINE', 'TEATRO', 'MASESPECTACULOS']} /></ProtectedRoute>} exact />
            <Route path="/espectaculos/cine" element={<ProtectedRoute><SubSeccionPage subCat='Cine' /></ProtectedRoute>} exact />
            <Route path="/espectaculos/teatro" element={<ProtectedRoute><SubSeccionPage subCat='Teatro' /></ProtectedRoute>} exact />
            <Route path="/espectaculos/masespectaculos" element={<SubSeccionPage subCat='MasEspectaculos' />} exact />
            <Route path="/tecnologia" element={<ProtectedRoute><SectionPage cat='Tecnologia' subCats={[]} content='Tecnologia' /></ProtectedRoute>} exact />
            <Route path="/policiales" element={<ProtectedRoute><SectionPage cat='Policiales' subCats={[]} content='Policiales' /></ProtectedRoute>} exact />
            <Route path="/tag/:id" element={<ProtectedRoute><TagPage /></ProtectedRoute>} exact />
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
