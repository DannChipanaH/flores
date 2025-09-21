onload = () => {
    document.body.classList.remove("container");
    
    // Reproducir música de fondo automáticamente
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
      // Intentar reproducir la música
      backgroundMusic.play().catch(error => {
        console.log('No se pudo reproducir la música automáticamente:', error);
        // Si no se puede reproducir automáticamente, mostrar un botón para reproducir
        showPlayButton();
      });
    }
  };

  // Función para mostrar botón de reproducción si es necesario
  function showPlayButton() {
    const playButton = document.createElement('button');
    playButton.innerHTML = '🎵 Reproducir Música';
    playButton.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1001;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 25px;
      cursor: pointer;
      font-size: 14px;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    `;
    
    playButton.addEventListener('click', () => {
      const backgroundMusic = document.getElementById('backgroundMusic');
      if (backgroundMusic) {
        backgroundMusic.play();
        playButton.remove();
      }
    });
    
    playButton.addEventListener('mouseenter', () => {
      playButton.style.background = 'rgba(255, 255, 255, 0.3)';
      playButton.style.transform = 'scale(1.05)';
    });
    
    playButton.addEventListener('mouseleave', () => {
      playButton.style.background = 'rgba(255, 255, 255, 0.2)';
      playButton.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(playButton);
  }