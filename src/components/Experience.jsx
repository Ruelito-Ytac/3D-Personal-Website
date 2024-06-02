import { CameraControls, Environment, Text, MeshReflectorMaterial, RenderTexture, useFont, PresentationControls, ContactShadows, Html } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import { Laptop } from "./Laptop";
import { Color } from "three";

const bloom_color = new Color("#26FACA");
bloom_color.multiplyScalar(1.5);

export const Experience = () => {
    // const controls_ref = useRef();
    // const mesh_fit_camera_ref = useRef();

    // const intro = async () => {
    //     const controls = controls_ref.current;

    //     controls.dolly(-22);
    //     controls.smoothTime = .25;
    //     fitCamera();
    // }

    // const fitCamera = async () => {
    //     controls_ref.current.fitToBox(mesh_fit_camera_ref.current, true);
    // }

    // useEffect(() => {
    //     intro();
    // }, []);

    // useEffect(() => {
    //     window.addEventListener("resize", fitCamera);
    //     return () => window.removeEventListener("resize", fitCamera);
    // })

    return (
        <>
            <PresentationControls
                global
                config={{ mass: 2, tension: 300 }}
                snap={{ mass: 4, tension: 800 }}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                {/* <CameraControls ref={ controls_ref } /> */}
                {/* <mesh ref={ mesh_fit_camera_ref }>
                    <boxGeometry args={[10, 2.5, 2.5]} />
                    <meshBasicMaterial color="orange" transparent opacity={ 0.5 } visible={ false } />
                </mesh> */}
                <group scale={1.25} position-y={.35}>
                    <Text font="fonts/Cairo/Cairo-Black.ttf" fontSize=".6" lineHeight="1" position-x={ -1.5 } position-y={ -.35 } position-z={ 1 } rotation-y={degToRad(30)} anchorY="bottom">
                        <meshBasicMaterial color={ bloom_color } toneMapped={ false }>
                            <RenderTexture attach="map">
                                <color attach="background" args={["26FACA"]} />
                                <Environment preset="forest" />
                            </RenderTexture>
                        </meshBasicMaterial>
                        RUELITO
                    </Text>
                    <Text font="fonts/Cairo/Cairo-Black.ttf" fontSize="1" lineHeight="1" position-x={ -1.5 } position-y={ -1.25 } position-z={ 1 } rotation-y={degToRad(30)} anchorY="bottom">
                        <meshBasicMaterial color={ bloom_color } toneMapped={ false }>
                            <RenderTexture attach="map">
                                <color attach="background" args={["26FACA"]} />
                                <Environment preset="forest" />
                            </RenderTexture>
                        </meshBasicMaterial>
                        YTAC
                    </Text>
                </group>
                <group rotation-y={ -0.4 } position-x={ 1.8 } position-y={ -0.62 } position-z={ 0 }>
                    <Laptop scale={ .015 } />
                </group>
                <mesh position-y={ -1.1 } rotation-x={ -Math.PI / 2 }>
                    <planeGeometry args={[100, 100]} />
                    <MeshReflectorMaterial
                        blur={[100, 100]}
                        resolution={2048}
                        mixBlur={1}
                        mixStrength={20}
                        roughness={1}
                        depthScale={1.5}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#333"
                        metalness={0.5} />
                </mesh>
                <Environment preset="forest" />
            </PresentationControls>
        </>
    );
};

useFont.preload("fonts/Cairo/Cairo-Black.ttf")