// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';
import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/loaders/GLTFLoader.js';
let scene, camera, renderer;
let plane;
let sections = ["start", "home", "about", "policy", "contact"];
let currentSection = 0;
let waterMaterial = 0;
let ship;

init();
animate();

function init() {
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000    );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    /* ---------- LIGHT (for ship only) ---------- */
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(5,10,7);
    scene.add(dir);


    const texture = new THREE.TextureLoader().load('../img/aerial-view-container-cargo-ship-sea-2.jpeg');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTexture: { value: texture },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 },
            uRippleStrength: { value: 0 }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D uTexture;
            uniform vec2 uMouse;
            uniform float uTime;
            uniform float uRippleStrength;
            varying vec2 vUv;

            void main() {

                float dist = distance(vUv, uMouse);

                // Ripple wave
                float frequency = 30.0;
                float speed = 3.0;
                float wave = sin(dist * frequency - uTime * speed);

                // Radial falloff
                float ripple = wave * exp(-8.0 * dist) * uRippleStrength;

                // Displace UVs outward
                vec2 direction = normalize(vUv - uMouse);
                vec2 distortedUv = vUv + direction * ripple * 0.02;

                vec4 color = texture2D(uTexture, distortedUv);

                gl_FragColor = color;
            }
        `
    });

    const geometry = new THREE.PlaneGeometry(20, 12);
    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Load top image
    // const overlayTexture = new THREE.TextureLoader().load('img/aerial-view-container-cargo-ship-sea.png');
    // overlayTexture.transparent = true;

    // const overlayMaterial = new THREE.MeshBasicMaterial({
    //     map: overlayTexture,
    //     transparent: true
    // });

    // const overlayGeometry = new THREE.PlaneGeometry(3, 8); // adjust size
    // const overlayPlane = new THREE.Mesh(overlayGeometry, overlayMaterial);

    // // Position it slightly above water
    // overlayPlane.position.z = 0.01;

    // scene.add(overlayPlane);

    // const loader = new GLTFLoader();

    // let model;

    // loader.load(
    //     'cruiser.glb',
    //     function (gltf) {

    //         model = gltf.scene;

    //         model.scale.set(1, 1, 1); // adjust if needed
    //         model.position.set(0, 0, 0);

    //         scene.add(model);
    //     },
    //     undefined,
    //     function (error) {
    //         console.error(error);
    //     }
    // );

    
    // Show first section
    document.getElementById(sections[0]).classList.add("active");

    window.addEventListener("wheel", onScroll);
    document.getElementById("overlay").addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            const page = this.dataset.section;
            sectionScroll(page);
        });
    });

}

let scrollAccumulator = 0;
const threshold = 540;   // increase to reduce sensitivity

function onScroll(event) {

    scrollAccumulator += event.deltaY;

    if (Math.abs(scrollAccumulator) < threshold) return;

    document.getElementById(sections[currentSection]).classList.remove("active");

    if (scrollAccumulator > 0) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
        currentSection = Math.max(currentSection - 1, 0);
    }

    document.getElementById(sections[currentSection]).classList.add("active");

    scrollAccumulator = 0;
}

let rippleTimeout;

function onMouseMove(event) {

    const x = event.clientX / window.innerWidth;
    const y = 1.0 - event.clientY / window.innerHeight;

    plane.material.uniforms.uMouse.value.set(x, y);
    plane.material.uniforms.uRippleStrength.value = 1.0;

    clearTimeout(rippleTimeout);

    rippleTimeout = setTimeout(() => {
        plane.material.uniforms.uRippleStrength.value = 0.0;
    }, 600);
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function sectionScroll(page){
    document.getElementById(sections[currentSection]).classList.remove("active");
    if(page === "contact-us"){
        document.getElementById(sections[5]).classList.add("active");
    }else if(page === "events"){
        document.getElementById(sections[4]).classList.add("active");
    }
}
  
