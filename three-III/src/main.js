import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const camera = new THREE.PerspectiveCamera( FOV (degrees), ASPECT RATION, NEAR, FAR );


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize( RENDERER WIDTH, RENDERER HEIGTH );
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material2);
const cube3 = new THREE.Mesh(geometry, material3);
scene.add(cube);
scene.add(cube2);
scene.add(cube3);

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  cube2.rotation.x += 0.05;
  cube2.rotation.y += 0.01;
  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.05;
  renderer.render(scene, camera);
}