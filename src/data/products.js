// ========================================
// DATOS DE PRODUCTOS (MOCK)
// ========================================
// Este es nuestro "simulador de base de datos"
// En una app real, estos datos vendrían de un servidor

// ========================================
// DATOS DE PRODUCTOS - MOCK DATA
// ========================================
// Array con los 8 productos de demostración
// En una app real, estos datos vendrían de una base de datos
// Cada producto tiene: id, nombre, precio, stock, código, etc.

export const products = [
  // Cada producto es un objeto con sus propiedades
  {
    id: 1,  // ID único para identificar el producto
    nombre: "iPhone 16 Pro",
    precio: 1299999,  // En centavos o la moneda local
    stock: 15,  // Cantidad disponible
    codigo: "IP16P-001",  // Código único del producto
    descripcion: "El iPhone más avanzado con chip A18 Pro y cámara de 48MP.",
    imagen: "https://picsum.photos/id/20/600/400",  // URL de la imagen
    categoria: "Celulares"  // Categoría para filtrado
  },
  {
    id: 2,
    nombre: "MacBook Air M3",
    precio: 1899999,
    stock: 8,
    codigo: "MBA-M3-002",
    descripcion: "Notebook ultraligera con chip M3 de Apple.",
    imagen: "https://picsum.photos/id/201/600/400",
    categoria: "Notebooks"
  },
  {
    id: 3,
    nombre: "Samsung Galaxy S25",
    precio: 999999,
    stock: 20,
    codigo: "SGS25-003",
    descripcion: "Potente smartphone Android con excelente cámara.",
    imagen: "https://picsum.photos/id/60/600/400",
    categoria: "Celulares"
  },
  {
    id: 4,
    nombre: "Sony WH-1000XM5",
    precio: 449999,
    stock: 25,
    codigo: "SONY-XM5-004",
    descripcion: "Auriculares inalámbricos con cancelación de ruido líder en el mercado.",
    imagen: "https://picsum.photos/id/180/600/400",
    categoria: "Auriculares"
  },
  {
    id: 5,
    nombre: "iPad Pro 11\"",
    precio: 1299999,
    stock: 12,
    codigo: "IPAD-P11-005",
    descripcion: "Tablet premium con chip M4 y pantalla Liquid Retina XDR.",
    imagen: "https://picsum.photos/id/201/600/400",
    categoria: "Tablets"
  },
  {
    id: 6,
    nombre: "Dell XPS 14",
    precio: 2199999,
    stock: 5,
    codigo: "DXPS14-006",
    descripcion: "Notebook de alto rendimiento con pantalla OLED.",
    imagen: "https://picsum.photos/id/367/600/400",
    categoria: "Notebooks"
  },
  {
    id: 7,
    nombre: "AirPods Max",
    precio: 799999,
    stock: 18,
    codigo: "APM-007",
    descripcion: "Auriculares over-ear premium de Apple.",
    imagen: "https://picsum.photos/id/180/600/400",
    categoria: "Auriculares"
  },
  {
    id: 8,
    nombre: "Samsung Galaxy Tab S9",
    precio: 899999,
    stock: 14,
    codigo: "TAB-S9-008",
    descripcion: "Tablet Android de alta gama con S Pen incluido.",
    imagen: "https://picsum.photos/id/201/600/400",
    categoria: "Tablets"
  }
];