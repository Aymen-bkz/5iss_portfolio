import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'



import PCB from '../../assets/model.glb'

const TDComponent = (props) => {
    useEffect(() => {

        let camera, scene, renderer, controls;

        init();
        animate();

        function init() {

            const container = document.createElement('div');
            document.getElementById(props.id).appendChild(container);

            camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 20);
            camera.position.set(0, 0, 1);

            scene = new THREE.Scene();

            // model

            new GLTFLoader()
                .load(PCB, function (gltf) {
                    const axesHelper = new THREE.AxesHelper(5);
                    gltf.scene.position.y = 0.1
                    gltf.scene.position.x = -0.16
                    gltf.scene.add(axesHelper)
                    scene.add(gltf.scene);
                });

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            if (window.innerWidth < 430) {
                renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
            }
            else {
                renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.4);
            }
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            const environment = new RoomEnvironment();
            const pmremGenerator = new THREE.PMREMGenerator(renderer);

            scene.background = new THREE.Color(0xbbbbbb);
            scene.environment = pmremGenerator.fromScene(environment).texture;

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.minDistance = 1;
            controls.maxDistance = 10;
            controls.target.set(0, 0, 0);
            controls.update();

            window.addEventListener('resize', onWindowResize);

        }

        function onWindowResize() {

            // if (window.innerWidth < 430) {
            //     camera.aspect = window.innerWidth / window.innerHeight;
            //     camera.updateProjectionMatrix();
            //     renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5);
            // }
            // else {
            //     camera.aspect = window.innerWidth / window.innerHeight;
            //     camera.updateProjectionMatrix();
            //     renderer.setSize(window.innerWidth/3, window.innerHeight/3);
            // }

        }

        //

        function animate() {

            requestAnimationFrame(animate);

            controls.update(); // required if damping enabled

            render();

        }

        function render() {

            renderer.render(scene, camera);

        }

    })
    return (
        <div>

        </div>
    );
};

export default TDComponent