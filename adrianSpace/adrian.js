DOM.insertAdjacentHTML('beforeend', `

    <!-- Adrian Space -->

    <!-- Kayo na bahala kung ano ilalagay nyo dine HAHAHHH -->


    <div>
        <div class="text-container position-absolute top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center text-white opacity-80 select-none">
            
            <h1>Adrian's Space</h1>

        </div>

        <div id ="astronaut">
            <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" width="250">
        </div>
        
        <div id ="astronaut2">
            <img src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png" alt="" width="250">
        </div>


        <div class="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
            </svg>
                <div class="gradients-container">
                <div class="g1"></div>
                <div class="g2"></div>
                <div class="interactive"></div>
            </div>
        </div> 
    </div>

`);



document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});