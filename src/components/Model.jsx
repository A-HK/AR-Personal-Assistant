
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/final.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.41, -0.05, 0.4]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials["eye black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_1.geometry}
          material={materials["eye glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_2.geometry}
          material={materials["eye pink"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lash.geometry}
        material={materials["Eye brows"]}
        position={[0, 0.07, 0.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brows.geometry}
        material={materials["Eye brows"]}
        position={[0, 0.28, 0.77]}
      />
      <group
        position={[0, -11.31, -0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={materials.Shirt1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials.Pants1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.skin}
        position={[-0.01, -2.92, -0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skirt.geometry}
        material={materials.Bottom}
        position={[0, -4.11, 0.04]}
        scale={2.42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tshirt.geometry}
        material={materials.Top}
        position={[0, -2.38, -0.26]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hoodie_cap.geometry}
          material={materials.Top}
          position={[0, 0.6, -0.51]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hoodie_ball.geometry}
            material={materials["hoodie ring"]}
            position={[0, -0.3, 1.35]}
            rotation={[0.91, 0.15, 0.37]}
            scale={0.04}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hoodie_ring.geometry}
            material={materials["hoodie ring"]}
            position={[0, 0.45, 0.78]}
            rotation={[1.51, -0.45, -0.33]}
            scale={0.04}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hoodie_wire.geometry}
            material={materials.Top}
            position={[0, 0.15, 1]}
            rotation={[0.29, -0.21, -1.26]}
            scale={0.25}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main.geometry}
        material={materials.Hair}
        position={[0, 0.26, -0.2]}
      />
    </group>
  );
}

useGLTF.preload("/final.glb");


// import { useLoader } from "@react-three/fiber";
// import { Suspense } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Model = ({ position }) => {
//   const gltf = useLoader(GLTFLoader, "/test_model.glb");
//   return (
//     <Suspense fallback={null}>
//       <primitive position={position} object={gltf.scene} />
//     </Suspense>
//   );
// };

// export default Model;