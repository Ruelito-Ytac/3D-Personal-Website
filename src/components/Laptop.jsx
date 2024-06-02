import React, { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import "./laptop.scss";
import MonitorPage from "./MonitorPage";

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/cyberpunk_laptop.glb');
  // const [is_visible, setVisible] = useState(true);
  // const [hide_screen, setShowScreen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(false);
  //     setShowScreen(false);
  //   }, 700);
  // }, [hide_screen]);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="2923eb3adc7d4b03a4a0dbb8579bf7b0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Cube004" position={[0, -25.593, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube004_Auto_01_0" geometry={nodes.Cube004_Auto_01_0.geometry} material={materials.Auto_01} />
              </group>
              <group name="Cube007" position={[0, -40.159, 75.441]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube007_Auto_01_0" geometry={nodes.Cube007_Auto_01_0.geometry} material={materials.Auto_01} />
              </group>
              <group name="Keys" position={[-72.227, -27.683, 35.45]} rotation={[-Math.PI / 2, 0, 0.002]} scale={100}>
                <mesh name="Keys_Auto_02_0" geometry={nodes.Keys_Auto_02_0.geometry} material={materials.Auto_02} />
              </group>
              <group name="Cube012" position={[-91.067, -25.462, 22.757]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube012_Auto_02_0" geometry={nodes.Cube012_Auto_02_0.geometry} material={materials.Auto_02} />
              </group>
              <group name="Cube018" position={[-60.215, -21.794, -5.752]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube018_Auto_02_0" geometry={nodes.Cube018_Auto_02_0.geometry} material={materials.Auto_02} />
              </group>
              <group name="Cube019" position={[-24.726, -21.794, -5.752]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube019_Auto_02_0" geometry={nodes.Cube019_Auto_02_0.geometry} material={materials.Auto_02} />
              </group>
              <group name="Cube013" position={[-91.352, -28.7, 4.165]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube013_Auto_02_0" geometry={nodes.Cube013_Auto_02_0.geometry} material={materials.Auto_02} />
              </group>
              <group name="Cube006" position={[17.369, -25.593, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube006_Auto_03_0" geometry={nodes.Cube006_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube005" position={[0, -25.593, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube005_Auto_03_0" geometry={nodes.Cube005_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube017" position={[100.654, -28.853, 25.184]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube017_Auto_03_0" geometry={nodes.Cube017_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube001" position={[0, 50.454, -8.888]} rotation={[-1.943, 0, 0]} scale={100}>
                <mesh name="Cube001_Auto_03_0" geometry={nodes.Cube001_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="BezierCurve001" position={[-74.932, -17.338, -70.693]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BezierCurve001_Auto_03_0" geometry={nodes.BezierCurve001_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="BezierCurve" position={[-74.932, -19.174, -70.693]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BezierCurve_Auto_03_0" geometry={nodes.BezierCurve_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="BezierCurve002" position={[-74.932, -20.537, -70.693]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BezierCurve002_Auto_03_0" geometry={nodes.BezierCurve002_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube015" position={[-182.229, -22.98, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube015_Auto_03_0" geometry={nodes.Cube015_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube014" position={[-182.229, -22.98, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube014_Auto_03_0" geometry={nodes.Cube014_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cylinder" position={[7.52, 0.851, 2.928]} rotation={[-2.049, 0, 0]} scale={100}>
                <mesh name="Cylinder_Auto_03_0" geometry={nodes.Cylinder_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cylinder002" position={[-3.494, 0.851, 2.928]} rotation={[-2.049, 0, 0]} scale={100}>
                <mesh name="Cylinder002_Auto_03_0" geometry={nodes.Cylinder002_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube016" position={[-0.605, -11.893, -52.539]} rotation={[2.55, 0.005, -1.581]} scale={100}>
                <mesh name="Cube016_Auto_03_0" geometry={nodes.Cube016_Auto_03_0.geometry} material={materials.Auto_03} />
              </group>
              <group name="Cube" position={[0, 50.454, -8.888]} rotation={[-1.943, 0, -Math.PI / 2]} scale={100}>
                <mesh name="Cube_Auto_04_0" geometry={nodes.Cube_Auto_04_0.geometry} material={materials.Auto_04} />
                <mesh name="Cube_Screen_0" position-x={-0.025} geometry={nodes.Cube_Screen_0.geometry} material={materials.Screen} />
                <mesh>
                  <boxGeometry args={[0.01, 1.9, 1.3]} />
                  <meshBasicMaterial color="#1A1F26" transparent opacity={ 1 } visible={ false } />
                  <Html scale={ .055 } rotation-y={ 1.570 } rotation-x={ 1.572 } position={[0, 0, 0]} transform occlude="blending">
                    <div id="screen">
                      <MonitorPage />
                    </div>
                  </Html>
                </mesh>
              </group>
              <group name="Cube002" position={[0, 50.454, -8.888]} rotation={[-1.943, 0, 0]} scale={100}>
                <mesh name="Cube002_Auto_04_0" geometry={nodes.Cube002_Auto_04_0.geometry} material={materials.Auto_04} />
              </group>
              <group name="Cube003" position={[0, 50.454, -8.888]} rotation={[-1.943, 0, -Math.PI / 2]} scale={100}>
                <mesh name="Cube003_Auto_04_0" geometry={nodes.Cube003_Auto_04_0.geometry} material={materials.Auto_04} />
              </group>
              <group name="Cube020" position={[0, 50.454, -8.888]} rotation={[-1.943, 0, -Math.PI / 2]} scale={100}>
                <mesh name="Cube020_Auto_04_0" geometry={nodes.Cube020_Auto_04_0.geometry} material={materials.Auto_04} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cyberpunk_laptop.glb')
