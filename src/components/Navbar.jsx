// ========================================
// COMPONENTE NAVBAR (BARRA DE NAVEGACIÓN)
// ========================================
// Este componente es la barra superior que aparece en todas las páginas
// Permite navegar entre las diferentes secciones de la app

import { Link } from "react-router-dom";  // Para crear enlaces internos sin recargar la página
import { useState } from "react";  // Hook de React para manejar el estado

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">  {/* sticky-top = se queda fijo al scroll */}
      <div className="container-fluid px-4">
        
        {/* Logo de la marca */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fas fa-microchip me-2" style={{ fontSize: '1.8rem' }}></i>
          <span>ElectroShop</span>
        </Link>
        
        {/* Botón de menú para dispositivos móviles */}
        <button 
          className="navbar-toggler border-0"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <i className="fas fa-bars" style={{ fontSize: '1.2rem', color: '#0d6efd' }}></i>
        </button>
        
        {/* Navegación - enlaces principales */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto d-flex align-items-center gap-3">
            {/* <Link> de React Router permite navegar sin recargar la página */}
            
            {/* Enlace a Home */}
            <Link className="nav-link fw-500 position-relative" to="/">
              <i className="fas fa-home me-2"></i>Inicio
            </Link>
            
            {/* Enlace a Registro */}
            <Link className="nav-link fw-500 position-relative" to="/register">
              <i className="fas fa-user-plus me-2"></i>Registro
            </Link>
            
            {/* Enlace a Login */}
            <Link className="nav-link fw-500 position-relative" to="/login">
              <i className="fas fa-sign-in-alt me-2"></i>Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Estilos CSS en línea para animar los enlaces */}
      <style>{`
        .navbar {
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .nav-link {
          color: #212529 !important;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0.75rem !important;
        }

        /* Línea que aparece al pasar el mouse */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          transition: width 0.3s ease;
        }

        /* Efecto hover (al pasar mouse) */
        .nav-link:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;