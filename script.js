
document.addEventListener("DOMContentLoaded", function () {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a flower geometry
    const petalGeometry = new THREE.CylinderGeometry(0, 2, 10, 4, 1);
    const petalMaterial = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
    
    const centerGeometry = new THREE.SphereGeometry(2, 32, 32);
    const centerMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    // Create petals and center
    const petals = [];
    for (let i = 0; i < 6; i++) {
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        const angle = (i / 6) * Math.PI * 2;
        petal.position.x = Math.cos(angle) * 5;
        petal.position.y = Math.sin(angle) * 5;
        petal.rotation.z = angle + Math.PI / 2;
        scene.add(petal);
        petals.push(petal);
    }

    const center = new THREE.Mesh(centerGeometry, centerMaterial);
    scene.add(center);

    // Set up camera position
    camera.position.z = 20;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate petals
        petals.forEach(petal => {
            petal.rotation.z += 0.01;
        });

        renderer.render(scene, camera);
    }

    animate();
});
