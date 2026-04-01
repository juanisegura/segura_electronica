import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState, useMemo } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = useMemo(() => ["Todos", ...new Set(products.map(p => p.categoria))], []);
  const filteredProducts = useMemo(() => selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.categoria === selectedCategory), [selectedCategory]);

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1 }} className="animate-fade-in-up">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            <i className="fas fa-laptop-code me-3" style={{ color: 'white' }}></i>
            Tecnología Premium
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', fontWeight: '300' }}>
            Descubre nuestra selección de los mejores dispositivos electrónicos del mercado
          </p>
          <button className="btn btn-light btn-lg" style={{ minWidth: '200px', fontWeight: '600' }}>
            <i className="fas fa-shopping-cart me-2"></i>Explorar Productos
          </button>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="container py-5">
        {/* Filtro de Categorías */}
        <div className="mb-5 text-center animate-fade-in-up">
          <h2 style={{ marginBottom: '2rem', color: '#212529' }}>
            Categorías <i className="fas fa-filter ms-2" style={{ color: '#0d6efd' }}></i>
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn ${
                  selectedCategory === cat 
                    ? "btn-primary" 
                    : "btn-outline-primary"
                }`}
              >
                <i className="fas fa-tag me-2"></i>{cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 animate-fade-in-up">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <i className="fas fa-inbox" style={{ fontSize: '3rem', color: '#ccc' }}></i>
              <p className="mt-3" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                No hay productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;