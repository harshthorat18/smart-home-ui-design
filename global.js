document.addEventListener('DOMContentLoaded', function() {
  // Detect which page we're on
  const isHomePage = document.querySelector('.start-button') !== null;
  const isDevicesPage = document.querySelector('.device-card') !== null;
  const isRoomsPage = document.querySelector('.room-card') !== null;
  
  // Home page functionality
  if (isHomePage) {
    const startButton = document.querySelector('.start-button');
    if (startButton) {
      startButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'devices.html';
      });
    }
  }
  
  // Devices page functionality
  if (isDevicesPage) {
    // Fix device names
    const deviceCards = document.querySelectorAll('.device-card');
    if (deviceCards.length > 0) {
      // First card is AC
      deviceCards[0].querySelector('.device-name').textContent = 'Air Conditioner';
      
      // Second card is TV
      deviceCards[1].querySelector('.device-name').textContent = 'Television';
      
      // Third card is Fan
      deviceCards[2].querySelector('.device-name').textContent = 'Fan';
    }
    
    // Set up segmented control
    const devicesBtn = document.querySelector('.segment-button');
    const roomsBtn = document.querySelectorAll('.segment-button')[1];
    
    // Make rooms button clickable
    roomsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'rooms.html';
    });
    
    // Make sliders interactive
    const sliders = document.querySelectorAll('.slider-thumb-wrapper');
    sliders.forEach(slider => {
      let isDragging = false;
      
      slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        e.preventDefault();
      });
      
      document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const sliderTrack = slider.parentElement;
        const trackRect = sliderTrack.getBoundingClientRect();
        const position = ((e.clientX - trackRect.left) / trackRect.width) * 100;
        
        // Constrain position between 0% and 100%
        const constrainedPosition = Math.max(0, Math.min(100, position));
        slider.style.left = `${constrainedPosition}%`;
      });
      
      document.addEventListener('mouseup', function() {
        isDragging = false;
      });
      
      // Touch events for mobile
      slider.addEventListener('touchstart', function(e) {
        isDragging = true;
        e.preventDefault();
      });
      
      document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        const sliderTrack = slider.parentElement;
        const trackRect = sliderTrack.getBoundingClientRect();
        const touch = e.touches[0];
        const position = ((touch.clientX - trackRect.left) / trackRect.width) * 100;
        
        // Constrain position between 0% and 100%
        const constrainedPosition = Math.max(0, Math.min(100, position));
        slider.style.left = `${constrainedPosition}%`;
      });
      
      document.addEventListener('touchend', function() {
        isDragging = false;
      });
    });
    
    // Make device switches interactive
    const deviceSwitches = document.querySelectorAll('.device-switch img');
    deviceSwitches.forEach((switchElement, index) => {
      switchElement.addEventListener('click', function() {
        const isOn = switchElement.src.includes('131_165'); // Check if it's the "on" image
        const deviceCard = switchElement.closest('.device-card');
        const switchText = deviceCard.querySelector('.device-switch span');
        
        if (isOn) {
          // Turn off
          switchElement.src = 'images/I2_1178_131_157.svg'; // Off image
          switchText.textContent = 'OFF';
          switchText.classList.add('off');
        } else {
          // Turn on
          switchElement.src = 'images/I2_1178_131_165.svg'; // On image
          switchText.textContent = 'ON';
          switchText.classList.remove('off');
        }
      });
    });
  }
  
  // Rooms page functionality
  if (isRoomsPage) {
    // Set up segmented control
    const devicesBtn = document.querySelector('.segment-btn');
    const roomsBtn = document.querySelectorAll('.segment-btn')[1];
    
    // Make devices button clickable
    devicesBtn.addEventListener('click', function() {
      window.location.href = 'devices.html';
    });
    
    // Make room switches interactive
    const roomSwitches = document.querySelectorAll('.switch-control img');
    roomSwitches.forEach((switchElement, index) => {
      switchElement.addEventListener('click', function() {
        const isOn = switchElement.src.includes('131_165'); // Check if it's the "on" image
        const roomCard = switchElement.closest('.room-card');
        const switchText = roomCard.querySelector('.switch-control span');
        
        if (isOn) {
          // Turn off
          switchElement.src = 'images/I31_1091_131_157.svg'; // Off image
          switchText.textContent = 'OFF';
          switchText.classList.add('off');
        } else {
          // Turn on
          switchElement.src = 'images/I31_1079_131_165.svg'; // On image
          switchText.textContent = 'ON';
          switchText.classList.remove('off');
        }
      });
    });
    
    // Make room cards clickable
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach(card => {
      card.addEventListener('click', function(e) {
        // If the user clicked on the switch, don't navigate
        if (e.target.closest('.switch-control')) return;
        
        // Otherwise navigate to devices page
        window.location.href = 'devices.html';
      });
      
      // Add cursor pointer to indicate clickable
      card.style.cursor = 'pointer';
    });
  }
  
  // Add smooth scrolling for anchor links (works on all pages)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Make footer navigation functional
  const homeIcon = document.querySelector('.home-icon');
  const profileIcon = document.querySelector('.profile-icon');
  
  if (homeIcon) {
    homeIcon.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'home.html';
    });
  }
  
  if (profileIcon) {
    profileIcon.addEventListener('click', function(e) {
      e.preventDefault();
      // For now, just show an alert since we don't have a profile page
      alert('Profile page would open here');
    });
  }
});