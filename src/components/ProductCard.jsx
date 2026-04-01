import { Link } from "react-router-dom";
import { memo } from "react";

const ProductCard = memo(({ product }) => {
  const getStockBadgeColor = () => {
    if (product.stock > 15) return "bg-success";
    if (product.stock > 5) return "bg-warning text-dark";
    return "bg-danger";
  };

  return (
    <div className="card h-100 position-relative overflow-hidden">
      {/* Badge de Stock */}
      <div className={`position-absolute top-0 end-0 badge ${getStockBadgeColor()}`} style={{ zIndex: 10, margin: '12px' }}>
        <i className="fas fa-cube me-1"></i>{product.stock} en stock
      </div>

      {/* Imagen con overlay */}
      <div className="product-image-wrapper position-relative overflow-hidden" style={{ height: "240px" }}>
        <img 
          src={product.imagen} 
          className="card-img-top w-100 h-100" 
          alt={product.nombre}
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
        <div className="product-overlay position-absolute top-0 start-0 w-100 h-100" />
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="card-body d-flex flex-column">
        {/* Categoría */}
        <div className="mb-2">
          <span className="badge bg-info" style={{ fontSize: '0.7rem' }}>
            <i className="fas fa-tag me-1"></i>{product.categoria}
          </span>
        </div>

        {/* Nombre */}
        <h5 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: '#212529' }}>
          {product.nombre}
        </h5>

        {/* Código */}
        <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          <i className="fas fa-barcode me-1"></i>Código: <strong>{product.codigo}</strong>
        </p>

        {/* Precio */}
        <div className="mb-3">
          <p style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, #0d6efd, #0dcaf0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0' 
          }}>
            ${product.precio.toLocaleString()}
          </p>
        </div>

        {/* Botón */}
        <Link 
          to={`/product/${product.id}`} 
          className="btn btn-primary mt-auto w-100 fw-600"
        >
          <i className="fas fa-eye me-2"></i>Ver Detalle
        </Link>
      </div>


      <style>{`
        .product-image-wrapper {
          position: relative;
          overflow: hidden;
        }
        
        .product-image-wrapper img {
          transition: transform 0.4s ease;
          will-change: transform;
        }
        
        .card:hover .product-image-wrapper img {
          transform: scale(1.08);
        }
        
        .product-overlay {
          background: rgba(13, 110, 253, 0);
          transition: background 0.3s ease;
          will-change: background;
        }
        
        .card:hover .product-overlay {
          background: rgba(13, 110, 253, 0.08);
        }
      `}</style>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;