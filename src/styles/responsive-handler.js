/**
 * Sidebar móvil - Versión simplificada con estilos en CSS
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔄 INICIALIZANDO SIDEBAR MÓVIL');
  
  // Verificar el entorno
  console.log('📱 NAVEGADOR: ' + navigator.userAgent);
  console.log('🖥️ ANCHO DE VENTANA: ' + window.innerWidth);
  
  // Variable para rastrear el estado del sidebar
  let sidebarAbierto = false;
  
  // Buscar un botón de fallback para reutilizarlo
  let toggleBtn = document.getElementById('sidebarToggleBtn-fallback');
  const fallbackExiste = !!toggleBtn;
  
  if (fallbackExiste) {
    // Cambiar el ID para que coincida con nuestro CSS
    toggleBtn.id = 'sidebarToggleBtn';
    console.log('🔄 USANDO BOTÓN DE FALLBACK');
  } else {
    // Eliminar botón anterior si existe (para evitar duplicados)
    const botonAnterior = document.getElementById('sidebarToggleBtn');
    if (botonAnterior) {
      botonAnterior.remove();
      console.log('🗑️ Botón anterior eliminado');
    }
    
    // CREAR EL BOTÓN TOGGLE - El estilo está en CSS
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'sidebarToggleBtn';
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>';
    
    // AÑADIR TEXTO VISIBLE PARA DEBUG
    if (window.location.hostname !== 'localhost') {
      const debugText = document.createElement('span');
      debugText.textContent = 'F';
      debugText.style.fontSize = '10px';
      debugText.style.position = 'absolute';
      debugText.style.bottom = '2px';
      debugText.style.right = '2px';
      toggleBtn.appendChild(debugText);
    }
    
    // Añadir el botón al DOM
    document.body.appendChild(toggleBtn);
    console.log('🔘 BOTÓN TOGGLE AÑADIDO AL DOM');
  }
  
  // Verificar que el botón existe
  setTimeout(function() {
    const btnVerificacion = document.getElementById('sidebarToggleBtn');
    console.log('✅ VERIFICACIÓN BOTÓN: ' + (btnVerificacion ? 'EXISTE' : 'NO EXISTE'));
    
    // Si estamos en móvil, forzar la visibilidad
    if (window.innerWidth <= 768) {
      if (btnVerificacion) {
        btnVerificacion.style.display = 'flex';
      }
    }
  }, 500);
  
  // FUNCIÓN PARA ABRIR SIDEBAR
  function abrirSidebar() {
    const sidebar = document.querySelector('.tools-container > div:first-child');
    if (!sidebar) return;
    
    sidebarAbierto = true;
    
    // Aplicar estilos al sidebar
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.left = '0';
    sidebar.style.width = '100%';
    sidebar.style.height = '100%';
    sidebar.style.background = '#fff';
    sidebar.style.zIndex = '999999';
    sidebar.style.padding = '20px';
    sidebar.style.overflowY = 'auto';
    sidebar.style.display = 'block';
    
    // Evitar scroll en el body
    document.body.style.overflow = 'hidden';
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '999990';
    overlay.style.opacity = '1';
    document.body.appendChild(overlay);
    
    // Crear header si no existe
    if (!sidebar.querySelector('.sidebar-header')) {
      const header = document.createElement('div');
      header.className = 'sidebar-header';
      header.style.display = 'flex';
      header.style.justifyContent = 'space-between';
      header.style.alignItems = 'center';
      header.style.marginBottom = '20px';
      header.style.paddingBottom = '10px';
      header.style.borderBottom = '1px solid #eee';
      
      const title = document.createElement('h2');
      title.textContent = 'Filtros';
      title.style.margin = '0';
      title.style.fontSize = '20px';
      title.style.fontWeight = 'bold';
      
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.background = 'none';
      closeBtn.style.border = 'none';
      closeBtn.style.fontSize = '28px';
      closeBtn.style.cursor = 'pointer';
      
      header.appendChild(title);
      header.appendChild(closeBtn);
      sidebar.insertBefore(header, sidebar.firstChild);
      
      // Eventos para cerrar
      closeBtn.addEventListener('click', cerrarSidebar);
      overlay.addEventListener('click', cerrarSidebar);
    }
    
    // Cambiar apariencia del botón usando CSS
    toggleBtn.classList.add('active');
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  }
  
  // FUNCIÓN PARA CERRAR SIDEBAR
  function cerrarSidebar() {
    if (!sidebarAbierto) return;
    
    sidebarAbierto = false;
    
    const sidebar = document.querySelector('.tools-container > div:first-child');
    const overlay = document.getElementById('sidebarOverlay');
    const header = sidebar?.querySelector('.sidebar-header');
    
    // Restaurar estilos
    if (sidebar) {
      sidebar.style.position = '';
      sidebar.style.top = '';
      sidebar.style.left = '';
      sidebar.style.width = '';
      sidebar.style.height = '';
      sidebar.style.background = '';
      sidebar.style.zIndex = '';
      sidebar.style.padding = '';
      sidebar.style.overflowY = '';
      sidebar.style.display = '';
    }
    
    document.body.style.overflow = '';
    
    // Eliminar elementos
    if (overlay) overlay.remove();
    if (header) header.remove();
    
    // Restaurar botón toggle
    toggleBtn.classList.remove('active');
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>';
  }
  
  // ASIGNAR EVENTO DE CLIC AL BOTÓN
  toggleBtn.addEventListener('click', function() {
    console.log('👆 CLICK EN BOTÓN TOGGLE');
    
    if (sidebarAbierto) {
      cerrarSidebar();
    } else {
      abrirSidebar();
    }
  });
  
  console.log('✅ SCRIPT DE SIDEBAR CARGADO CORRECTAMENTE');
}); 