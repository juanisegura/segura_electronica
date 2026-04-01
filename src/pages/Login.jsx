import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    contrasena: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (formData.contrasena.length < 6) newErrors.contrasena = "La contraseña debe tener al menos 6 caracteres";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ email: "", contrasena: "" });
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
          <div className="col-lg-5" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <div className="card shadow-lg border-0">
              {/* Header */}
              <div style={{
                background: 'linear-gradient(135deg, #212529 0%, #343a40 100%)',
                color: 'white',
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <i className="fas fa-sign-in-alt" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block', opacity: 0.9 }}></i>
                <h3 style={{ marginBottom: '0.5rem', fontWeight: '700' }}>Iniciar Sesión</h3>
                <p style={{ marginBottom: 0, fontSize: '0.9rem', opacity: 0.9 }}>Accede a tu cuenta para continuar</p>
              </div>

              {/* Body */}
              <div className="card-body p-4">
                {success && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    <span>¡Sesión iniciada correctamente!</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-500">
                      <i className="fas fa-envelope me-2" style={{ color: '#0d6efd' }}></i>Email
                    </label>
                    <input 
                      type="email" 
                      className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                  </div>

                  {/* Contraseña */}
                  <div className="mb-3">
                    <label className="form-label fw-500">
                      <i className="fas fa-lock me-2" style={{ color: '#0d6efd' }}></i>Contraseña
                    </label>
                    <input 
                      type="password" 
                      className={`form-control form-control-lg ${errors.contrasena ? 'is-invalid' : ''}`}
                      name="contrasena"
                      value={formData.contrasena}
                      onChange={handleChange}
                      placeholder="Tu contraseña"
                    />
                    {errors.contrasena && <div className="invalid-feedback d-block">{errors.contrasena}</div>}
                  </div>

                  {/* Recuerdame */}
                  <div className="mb-4 form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Recuerdame en este dispositivo
                    </label>
                  </div>

                  {/* Botón Submit */}
                  <button type="submit" className="btn btn-dark w-100 fw-600 py-2" style={{ fontSize: '1rem' }}>
                    <i className="fas fa-sign-in-alt me-2"></i>Ingresar
                  </button>
                </form>

                {/* Divider */}
                <div className="my-3" style={{ textAlign: 'center', color: '#6c757d' }}>
                  <small>¿Olvidaste tu contraseña?</small>
                </div>

                {/* Enlace de registro */}
                <div className="text-center py-3 border-top">
                  <p style={{ marginBottom: 0, color: '#6c757d' }}>
                    ¿No tienes cuenta? 
                    <a href="/register" style={{ color: '#0d6efd', fontWeight: '600', textDecoration: 'none' }}>
                      Crear cuenta
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;