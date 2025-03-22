DOM.insertAdjacentHTML('beforeend', `

  <!-- Denver Space -->

  <div class="vh-100 d-flex flex-column justify-content-center align-items-center text-center position-relative overflow-hidden" 
       style="background: radial-gradient(circle at 50% 50%, #0b0d29, #000000);"> 

      <!-- Animated Stars Layer -->
      <div class="position-absolute top-0 start-0 w-100 h-100" id="stars"></div>

      <!-- Content Section -->
      <div class="position-relative p-4 rounded shadow" 
           style="background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.1);">
          <h1 style="color: #00d4ff; font-size: 3rem; text-shadow: 0 0 8px #00d4ff;">Welcome to Denver's Section</h1>
          <p style="color: #ffffffb3; font-size: 1.2rem; margin-bottom: 1rem;">Front-End Developer at Tech Executive Labs</p>
          
          <button class="btn btn-outline-danger" 
                  onclick="alert('Thanks for Dropping out you deserve it!')" 
                  style="transition: transform 0.3s;">
              DROP OUT NOW!
          </button>
      </div>
  </div>

  <style>
      /* Starry Background */
      #stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url('https://www.transparenttextures.com/patterns/stardust.png'); /* A star pattern image */
          background-size: cover;
          opacity: 0.8;
          animation: starMove 100s linear infinite;
      }

      @keyframes starMove {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
      }

      /* Button Hover Effect */
      button:hover {
          transform: scale(1.1);
      }
  </style>
`);
