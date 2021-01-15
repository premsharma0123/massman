// VANTA.WAVES({
//     el: '#element2',
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0x1a2028
//     })


    let destroyBox = document.querySelector("#destroy-box");
    VanillaTilt.init(destroyBox);
    
    document.querySelector("#destroy-button").addEventListener("click", function () {
        destroyBox.vanillaTilt.destroy();
    });
    
    document.querySelector("#enable-button").addEventListener("click", function () {
        VanillaTilt.init(destroyBox);
    });


    