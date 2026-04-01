import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <i className="fas fa-search" style={{ fontSize: '4rem', color: '#ccc', marginBottom: '1rem', display: 'block' }}></i>
          <h2 style={{ color: '#6c757d' }}>Producto no encontrado</h2>
          <p style={{ color: '#adb5bd', marginBottom: '2rem' }}>El producto que buscas no existe en nuestro catálogo</p>
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-arrow-left me-2"></i>Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.categoria === product.categoria && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-vh-100">
      {/* Breadcrumb */}
      <div className="bg-light py-3 border-bottom">
        <div className="container">
          <nav style={{ fontSize: '0.9rem' }}>
            <Link to="/" style={{ color: '#0d6efd', textDecoration: 'none' }}>
              <i className="fas fa-home me-2"></i>Inicio
            </Link>
            <span style={{ color: '#6c757d' }} className="mx-2">/</span>
            <span style={{ color: '#6c757d' }}>{product.categoria}</span>
            <span style={{ color: '#6c757d' }} className="mx-2">/</span>
            <span style={{ color: '#212529', fontWeight: '600' }}>{product.nombre}</span>
          </nav>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Imagen */}
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden rounded-4" style={{ background: '#f8f9fa', padding: '2rem' }}>
              <img 
                src={product.imagen} 
                alt={product.nombre}
                className="img-fluid rounded-3"
                style={{ maxHeight: '500px', objectFit: 'contain', width: '100%' }}
              />
            </div>
          </div>

          {/* Información */}
          <div className="col-lg-6">
            {/* Categoría y Código */}
            <div className="mb-3">
              <span className="badge bg-info" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                <i className="fas fa-tag me-1"></i>{product.categoria}
              </span>
              <span className="badge bg-secondary ms-2" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                <i className="fas fa-barcode me-1"></i>{product.codigo}
              </span>
            </div>

            {/* Título */}
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#212529', fontWeight: '700' }}>
              {product.nombre}
            </h1>

            {/* Rating */}
            <div className="mb-3">
              <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
              <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
              <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
              <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
              <i className="fas fa-star-half-alt" style={{ color: '#ffc107' }}></i>
              <span style={{ marginLeft: '0.5rem', color: '#6c757d', fontWeight: '600' }}>(145 reseñas)</span>
            </div>

            {/* Precio */}
            <div className="mb-4 pb-4 border-bottom">
              <p style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #0d6efd, #0dcaf0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                ${product.precio.toLocaleString()}
              </p>
              <small style={{ color: '#6c757d' }}>Precio especial de hoy</small>
            </div>

            {/* Descripción */}
            <div className="mb-4">
              <h5 style={{ marginBottom: '1rem', fontWeight: '600', color: '#212529' }}>
                <i className="fas fa-info-circle me-2" style={{ color: '#0d6efd' }}></i>Descripción
              </h5>
              <p style={{ color: '#495057', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {product.descripcion}
              </p>
            </div>

            {/* Stock e Información */}
            <div className="row mb-4" style={{ textAlign: 'center' }}>
              <div className="col-6">
                <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                  <i className="fas fa-cube" style={{ fontSize: '1.5rem', color: '#0d6efd', marginBottom: '0.5rem', display: 'block' }}></i>
                  <p style={{ marginBottom: '0.5rem', color: '#6c757d', fontSize: '0.9rem' }}>Stock disponible</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: '700', color: product.stock > 0 ? '#198754' : '#dc3545' }}>
                    {product.stock} unidades
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                  <i className="fas fa-box" style={{ fontSize: '1.5rem', color: '#0d6efd', marginBottom: '0.5rem', display: 'block' }}></i>
                  <p style={{ marginBottom: '0.5rem', color: '#6c757d', fontSize: '0.9rem' }}>Envío rápido</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#212529' }}>24-48h</p>
                </div>
              </div>
            </div>

            {/* Cantidad y Botones */}
            <div className="mb-4">
              <label className="form-label fw-500 mb-2"><i className="fas fa-shopping-bag me-2" style={{ color: '#0d6efd' }}></i>Cantidad</label>
              <div className="d-flex gap-3 align-items-center">
                <div className="input-group" style={{ maxWidth: '150px' }}>
                  <button className="btn btn-outline-primary" type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <input 
                    type="number" 
                    className="form-control text-center fw-600" 
                    value={quantity}
                    min="1"
                    max={product.stock}
                    readOnly
                  />
                  <button className="btn btn-outline-primary" type="button" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="d-grid gap-2 mb-4">
              <button 
                className="btn btn-success py-3 fw-600" 
                style={{ fontSize: '1.1rem' }}
                onClick={handleAddToCart}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                {addedToCart ? "Añadido al carrito" : "Añadir al Carrito"}
              </button>
              <Link to="/" className="btn btn-outline-primary py-3 fw-600">
                <i className="fas fa-arrow-left me-2"></i>Volver al Catálogo
              </Link>
            </div>

            {/* Beneficios */}
            <div className="bg-light p-4 rounded-3">
              <h6 style={{ marginBottom: '1rem', fontWeight: '600', color: '#212529' }}>
                <i className="fas fa-check-circle me-2" style={{ color: '#198754' }}></i>Por qué elegirnos
              </h6>
              <ul style={{ marginBottom: 0, paddingLeft: '1.5rem', color: '#6c757d' }}>
                <li className="mb-2"><i className="fas fa-truck me-2" style={{ color: '#0d6efd' }}></i>Envío rápido y seguro</li>
                <li className="mb-2"><i className="fas fa-shield-alt me-2" style={{ color: '#0d6efd' }}></i>Garantía oficial de fabricante</li>
                <li className="mb-2"><i className="fas fa-undo me-2" style={{ color: '#0d6efd' }}></i>Devolución en 30 días</li>
                <li><i className="fas fa-headset me-2" style={{ color: '#0d6efd' }}></i>Soporte técnico 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-5 pt-5 border-top">
            <h3 style={{ marginBottom: '2rem', color: '#212529', fontWeight: '700' }}>
              <i className="fas fa-sitemap me-2" style={{ color: '#0d6efd' }}></i>Productos Relacionados
            </h3>
            <div className="row g-4">
              {relatedProducts.map(p => (
                <div className="col-md-4" key={p.id}>
                  <div className="card h-100">
                    <img src={p.imagen} className="card-img-top" alt={p.nombre} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h6 className="card-title">{p.nombre}</h6>
                      <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0d6efd', marginBottom: '1rem' }}>${p.precio.toLocaleString()}</p>
                      <Link to={`/product/${p.id}`} className="btn btn-primary w-100 btn-sm">
                        <i className="fas fa-eye me-2"></i>Ver Detalle
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;