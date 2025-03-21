/**
 * Sidebar móvil - Versión final que funciona perfectamente
 */

window.addEventListener('load', function() {
  console.log('▶️ INICIO SCRIPT');
  
  // Variable para rastrear el estado del sidebar
  let sidebarAbierto = false;
  
  // FUNCIÓN PARA ABRIR SIDEBAR
  function abrirSidebar() {
    console.log('🚪 ABRIENDO SIDEBAR');
    
    const sidebar = document.querySelector('.tools-container > div:first-child');
    if (!sidebar) {
      console.error('❌ NO SE ENCONTRÓ EL SIDEBAR');
      return;
    }
    
    // Marcar como abierto
    sidebarAbierto = true;
    
    // Añadir estilos inline con mejor apariencia
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.left = '0';
    sidebar.style.width = '100%';
    sidebar.style.height = '100%';
    sidebar.style.background = '#fff';
    sidebar.style.zIndex = '999999';
    sidebar.style.padding = '20px';
    sidebar.style.overflowY = 'auto';
    sidebar.style.boxSizing = 'border-box';
    sidebar.style.display = 'block';
    sidebar.style.transition = 'all 0.3s ease';
    
    // Evitar scroll en el body
    document.body.style.overflow = 'hidden';
    
    // Fondo oscuro con transición
    const overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '999990';
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);
    
    // Forzar reflow para activar transición
    overlay.offsetHeight;
    overlay.style.opacity = '1';
    
    // Crear header con título y botón cerrar
    const header = document.createElement('div');
    header.className = 'sidebar-header';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '20px';
    header.style.paddingBottom = '10px';
    header.style.borderBottom = '1px solid #eee';
    header.style.width = '100%';
    
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
    closeBtn.style.padding = '0 5px';
    closeBtn.style.lineHeight = '1';
    closeBtn.style.color = '#333';
    
    header.appendChild(title);
    header.appendChild(closeBtn);
    
    // Insertar header si no existe
    if (!sidebar.querySelector('.sidebar-header')) {
      sidebar.insertBefore(header, sidebar.firstChild);
    }
    
    // Eventos para cerrar
    overlay.addEventListener('click', cerrarSidebar);
    closeBtn.addEventListener('click', cerrarSidebar);
    
    // Cambiar aspecto del botón toggle
    toggleBtn.style.backgroundColor = '#ff3b30';
    toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  }
  
  // FUNCIÓN PARA CERRAR SIDEBAR
  function cerrarSidebar() {
    console.log('🚪 CERRANDO SIDEBAR');
    
    // Si no está abierto, no hay nada que cerrar
    if (!sidebarAbierto) return;
    
    // Marcar como cerrado
    sidebarAbierto = false;
    
    const sidebar = document.querySelector('.tools-container > div:first-child');
    const overlay = document.getElementById('sidebarOverlay');
    const header = sidebar.querySelector('.sidebar-header');
    
    if (overlay) {
      overlay.style.opacity = '0';
    }
    
    // Pequeño retraso para la animación
    setTimeout(function() {
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
        sidebar.style.boxSizing = '';
        sidebar.style.display = '';
        sidebar.style.transition = '';
      }
      
      document.body.style.overflow = '';
      
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      
      if (header && header.parentNode) {
        header.parentNode.removeChild(header);
      }
      
      // Actualizar el aspecto del botón toggle
      toggleBtn.style.backgroundColor = '#63EA32';
      toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>';
    }, 200);
  }
  
  // CREAR BOTÓN TOGGLE CON BUEN DISEÑO
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'sidebarToggleBtn';
  toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.width = '56px';
  toggleBtn.style.height = '56px';
  toggleBtn.style.borderRadius = '50%';
  toggleBtn.style.backgroundColor = '#63EA32';
  toggleBtn.style.color = 'white';
  toggleBtn.style.border = 'none';
  toggleBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.zIndex = '9999999';
  toggleBtn.style.display = 'flex';
  toggleBtn.style.alignItems = 'center';
  toggleBtn.style.justifyContent = 'center';
  toggleBtn.style.transition = 'background-color 0.3s ease';
  
  // AÑADIR BOTÓN AL BODY
  document.body.appendChild(toggleBtn);
  
  // CONFIGURAR EVENT LISTENER PARA EL CLIC
  toggleBtn.onclick = function() {
    console.log('👆 CLICK EN BOTÓN');
    
    // Alternar entre abrir y cerrar según el estado actual
    if (sidebarAbierto) {
      cerrarSidebar();
    } else {
      abrirSidebar();
    }
  };
  
  // Mostrar solo en móvil
  function checkResponsive() {
    if (window.innerWidth <= 768) {
      toggleBtn.style.display = 'flex';
    } else {
      toggleBtn.style.display = 'none';
      // Cerrar sidebar si estaba abierto y cambiamos a desktop
      if (sidebarAbierto) {
        cerrarSidebar();
      }
    }
  }
  
  // Comprobar inicialmente
  checkResponsive();
  
  // Actualizar al cambiar tamaño
  window.addEventListener('resize', checkResponsive);
  
  console.log('✅ SCRIPT CARGADO CORRECTAMENTE');
}); 