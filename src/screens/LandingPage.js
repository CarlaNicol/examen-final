import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
<div style={{ backgroundColor: '#4CAF50', padding: '20px', color: 'white', textAlign: 'center', marginBottom: '20px' }}>
  <h1 style={{ margin: 0, fontSize: '3em' }}>Modulo 7: DESARROLLO FRONTEND CON</h1>
  <h1 style={{ margin: 0, fontSize: '3em' }}>REACTJS</h1>
</div>


      {/* Sección de Bienvenida */}
      <section style={{ marginBottom: '20px' }}>
        <h2>
          Bienvenido
          <hr style={{ borderTop: '2px solid #4CAF50', marginBottom: 'auto' }} />
        </h2>
        <div>
          <p style={{ margin: 0 }}>
            Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el{' '}
          </p>
          <p style={{ margin: 0 }}>uso de <strong>Redux</strong>.</p>
        </div>
      </section>

        {/* Sección de Temas Cubiertos */}
<section style={{ marginBottom: '20px' }}>
  <h2>
    Temas Cubiertos
    <hr style={{ borderTop: '2px solid #4CAF50', marginBottom: 'auto' }} />
  </h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, auto)', gap: '20px', marginTop: '10px' }}>
    {/* Columna 1 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Componentes funcionales y de clase</p>
    </div>
    {/* Columna 2 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Uso de <strong>React hooks</strong> como useState y useEffect</p>
    </div>
    {/* Columna 3 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Creación de <strong>custom hooks</strong>como useForm</p>
    </div>
    {/* Columna 4 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Gestión de variables de estado con <strong>useState</strong></p>
    </div>
    {/* Columna 5 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Gestión de estado global con <strong>Redux</strong></p>
    </div>
    {/* Columna 6 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Integración de <strong>Redux</strong> con <strong>React</strong></p>
    </div>
    {/* Columna 7 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Manejo de <strong>Formularios</strong> en <strong>React</strong></p>
    </div>
    {/* Columna 8 */}
    <div style={{ textAlign: 'left' }}>
      <p style={{ margin: '0' }}>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></p>
    </div>
  </div>
</section>


      {/* Sección de Recursos Adicionales */}
      <section style={{ marginBottom: '20px' }}>
        <h2>
          Recursos Adicionales
          <hr style={{ borderTop: '2px solid #4CAF50', marginBottom: 'auto' }} />
        </h2>
        <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
      </section>
      <hr style={{ borderTop: '2px solid #e0e0e0', marginBottom: 'auto' }} />

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '30px' }}>
        &copy; 2024 Modulo 7. USIP.
      </footer>
    </div>
  );
};

export default LandingPage;
