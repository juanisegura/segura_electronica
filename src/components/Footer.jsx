const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5">
      {/* Main Footer */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Sobre ElectroShop */}
            <div className="col-lg-3 col-md-6">
              <h6 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.1rem' }}>
                <i className="fas fa-microchip me-2" style={{ color: '#0dcaf0' }}></i>ElectroShop
              </h6>
              <p style={{ color: '#adb5bd', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Tu tienda de electrónica de confianza. Ofrecemos los mejores productos con garantía oficial y soporte técnico.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" className="footer-social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="footer-social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="footer-social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="footer-social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className="col-lg-3 col-md-6">
              <h6 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.1rem' }}>Enlaces Rápidos</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="mb-2">
                  <a href="/" className="footer-link">
                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Inicio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="footer-link">
                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Productos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="footer-link">
                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Promociónes
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Categorías */}
            <div className="col-lg-3 col-md-6">
              <h6 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.1rem' }}>Categorías</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="mb-2">
                  <a href="/" className="footer-link">
                    <i className="fas fa-mobile-alt me-2" style={{ fontSize: '0.85rem' }}></i>Celulares
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="footer-link">
                    <i className="fas fa-laptop me-2" style={{ fontSize: '0.85rem' }}></i>Notebooks
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="footer-link">
                    <i className="fas fa-headphones me-2" style={{ fontSize: '0.85rem' }}></i>Auriculares
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    <i className="fas fa-tablet-alt me-2" style={{ fontSize: '0.85rem' }}></i>Tablets
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="col-lg-3 col-md-6">
              <h6 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.1rem' }}>Contacto</h6>
              <div style={{ color: '#adb5bd', fontSize: '0.9rem', lineHeight: '2' }}>
                <p>
                  <i className="fas fa-map-marker-alt me-2" style={{ color: '#0dcaf0' }}></i>
                  <span>Av. Corrientes 123, Buenos Aires, Argentina</span>
                </p>
                <p>
                  <i className="fas fa-phone me-2" style={{ color: '#0dcaf0' }}></i>
                  <span>+54 (11) 4000-0000</span>
                </p>
                <p>
                  <i className="fas fa-envelope me-2" style={{ color: '#0dcaf0' }}></i>
                  <span>info@electroshop.com.ar</span>
                </p>
                <p>
                  <i className="fas fa-clock me-2" style={{ color: '#0dcaf0' }}></i>
                  <span>Lun-Vie: 9:00 - 18:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p style={{ marginBottom: 0, color: '#adb5bd', fontSize: '0.9rem' }}>
                <i className="fas fa-copyright me-1"></i> {currentYear} ElectroShop. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="footer-link" style={{ marginRight: '1.5rem' }}>
                Politica de Privacidad
              </a>
              <a href="#" className="footer-link">
                Condiciones de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #adb5bd;
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #0dcaf0;
        }

        .footer-social-link {
          color: #0dcaf0;
          transition: color 0.2s ease;
          font-size: 1.1rem;
        }

        .footer-social-link:hover {
          color: #0d6efd;
        }
      `}</style>
    </footer>
  );
};

export default Footer;