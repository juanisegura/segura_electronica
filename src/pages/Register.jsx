import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    contrasena: "",
    confirmarContrasena: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido";
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (formData.telefono.length < 7) newErrors.telefono = "Teléfono inválido";
    if (formData.contrasena.length < 6) newErrors.contrasena = "La contraseña debe tener al menos 6 caracteres";
    if (formData.contrasena !== formData.confirmarContrasena) newErrors.confirmarContrasena = "Las contraseñas no coinciden";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        contrasena: "",
        confirmarContrasena: "",
      });
      setTimeout(() => setSuccess(false), 4000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <div className="card shadow-lg border-0">
              {/* Header */}
              <div style={{
                background: 'linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)',
                color: 'white',
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <i className="fas fa-user-plus" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block', opacity: 0.9 }}></i>
                <h3 style={{ marginBottom: '0.5rem', fontWeight: '700' }}>Crear Cuenta</h3>
                <p style={{ marginBottom: 0, fontSize: '0.9rem', opacity: 0.9 }}>Regístrate para acceder a todos nuestros servicios</p>
              </div>

              {/* Body */}
              <div className="card-body p-4">
                {success && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <span>¡Registro exitoso! Te hemos enviado un correo de confirmación.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Nombre y Apellido */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-500">
                        <i className="fas fa-user me-2" style={{ color: '#0d6efd' }}></i>Nombre
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Juan"
                      />
                      {errors.nombre && <div className="invalid-feedback d-block">{errors.nombre}</div>}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-500">
                        <i className="fas fa-user me-2" style={{ color: '#0d6efd' }}></i>Apellido
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        placeholder="Pérez"
                      />
                      {errors.apellido && <div className="invalid-feedback d-block">{errors.apellido}</div>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-500">
                      <i className="fas fa-envelope me-2" style={{ color: '#0d6efd' }}></i>Email
                    </label>
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                  </div>

                  {/* Teléfono */}
                  <div className="mb-3">
                    <label className="form-label fw-500">
                      <i className="fas fa-phone me-2" style={{ color: '#0d6efd' }}></i>Teléfono
                    </label>
                    <input 
                      type="tel" 
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+54 9 11 1234-5678"
                    />
                    {errors.telefono && <div className="invalid-feedback d-block">{errors.telefono}</div>}
                  </div>

                  {/* Contraseña */}
                  <div className="mb-3">
                    <label className="form-label fw-500">
                      <i className="fas fa-lock me-2" style={{ color: '#0d6efd' }}></i>Contraseña
                    </label>
                    <input 
                      type="password" 
                      className={`form-control ${errors.contrasena ? 'is-invalid' : ''}`}
                      name="contrasena"
                      value={formData.contrasena}
                      onChange={handleChange}
                      placeholder="Al menos 6 caracteres"
                    />
                    {errors.contrasena && <div className="invalid-feedback d-block">{errors.contrasena}</div>}
                  </div>

                  {/* Confirmar Contraseña */}
                  <div className="mb-4">
                    <label className="form-label fw-500">
                      <i className="fas fa-lock me-2" style={{ color: '#0d6efd' }}></i>Confirmar Contraseña
                    </label>
                    <input 
                      type="password" 
                      className={`form-control ${errors.confirmarContrasena ? 'is-invalid' : ''}`}
                      name="confirmarContrasena"
                      value={formData.confirmarContrasena}
                      onChange={handleChange}
                      placeholder="Repite tu contraseña"
                    />
                    {errors.confirmarContrasena && <div className="invalid-feedback d-block">{errors.confirmarContrasena}</div>}
                  </div>

                  {/* Botón Submit */}
                  <button type="submit" className="btn btn-primary w-100 fw-600 py-2" style={{ fontSize: '1rem' }}>
                    <i className="fas fa-user-check me-2"></i>Completar Registro
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;