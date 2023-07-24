import React, { Suspense, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sky, OrbitControls, Text } from "@react-three/drei";
import XrHitModelContainer from "../containers/XRHitModelContainer/XRHitModelContainer";
import { Interactive, XR, ARButton, Controllers } from '@react-three/xr';
import * as THREE from 'three';

import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";


import MusicIndex from './use-cases/music/musicIndex';
import RecentlyPlayed from '../components/SpotifyXR/components/RecentlyPlayed';

import { ChickenDanceF } from '../components/SpotifyAnimations/ChickenDanceF';
import { HipHopDance1F } from '../components/SpotifyAnimations/HipHopDance1F';
import { HipHopDance2F } from '../components/SpotifyAnimations/HipHopDance2F';
import { MacarenaDanceF } from '../components/SpotifyAnimations/MacarenaDanceF';
import { SalsaDanceF } from '../components/SpotifyAnimations/SalsaDanceF';
import { StepHipHopDanceF } from '../components/SpotifyAnimations/StepHipHopDanceF';

import { ChickenDanceM } from '../components/SpotifyAnimations/ChickenDanceM';
import { HipHopDance1M } from '../components/SpotifyAnimations/HipHopDance1M';
import { HipHopDance2M } from '../components/SpotifyAnimations/HipHopDance2M';
import { MacarenaDanceM } from '../components/SpotifyAnimations/MacarenaDanceM';
import { SalsaDanceM } from '../components/SpotifyAnimations/SalsaDanceM';
import { StepHipHopDanceM } from '../components/SpotifyAnimations/StepHipHopDanceM';

function Image(props) {
  const { imgSrc, position, scale } = props;
  const texture = useLoader(THREE.TextureLoader, imgSrc);
  const vectorPosition = new THREE.Vector3().fromArray(position);

  return (
    <mesh position={vectorPosition} scale={scale}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} transparent={true} />
    </mesh>
  );
}

function Box({ color, size, scale, children, ...rest }) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
}

function Button({track, chooseTrack, ...props}) {
  const [hover, setHover] = useState(false);
  const [url, setUrl] = useState('/Panel_Assets/Adele_Spotify_Panel.png');
  const [color, setColor] = useState('blue');

  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  console.log(track)

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };
  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  const onImageSelect = () => {
    setUrl('/Panel_Assets/Adele_Detail_Panel.png');
  };

  return (
    <Box>
      <Interactive onSelect={onImageSelect}>
        <Image imgSrc={url} position={[0, 0, -1]} />
      </Interactive>
      {/* <Image imgSrc="/Panel_Assets/Piano_Ballads_Panel.png" position={[-1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/Piano_Ballads_Panel.png" position={[-1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/Safar_Mix_Panel.png" position={[1.2, 0, -1]} />
      <Image imgSrc="/Panel_Assets/On_Repeat_Panel.png" position={[-1.5, 1, -1]} />
      <Image imgSrc="/Panel_Assets/Time_Capsule_Panel.png" position={[0, 1, -1]} />
      <Image imgSrc="/Panel_Assets/Repeat_Rewind_Panel.png" position={[1.5, 1, -1]} /> */}
    </Box>
  );
}

// export function App() {
//   return (
//     <>
//       <ARButton />
//       <Canvas>
//         <XR referenceSpace="local">
//           <ambientLight />
//           <pointLight position={[10, 10, 10]} />
//           <Button position={[0, 0.1, -0.2]} />
//           <Controllers />
//         </XR>
//       </Canvas>
//     </>
//   );
// }
const ModelTypeSwitcherM = ({modelType}) => {
  // const [renderModel, setRenderModel] = useState()
  // switch(modelType)
  // {
  //   case 'Country':

  // }
  return (
    <>
    {
      modelType == 'Country'
      ? <StepHipHopDanceM scale={0.01} position={[-0.5,0,-1]} />
      : modelType == 'Workout'
        ? <ChickenDanceM scale={0.011} position={[-0.5,0,-1]} />
        : modelType == 'Salsa'
          ? <SalsaDanceM scale={0.013} position={[-0.5,0,-1]} />
          : modelType == 'Hip-Hop'
            ? <HipHopDance1M scale={0.011} position={[-0.5,0,-1]} />
            : modelType == 'Latin-Pop'
              ? <MacarenaDanceM scale={0.01} position={[-0.5,0,-1]} />
              : <HipHopDance2M scale={0.013} position={[-0.5,0,-1]} />
    }
    </>
  )
}

const ModelTypeSwitcherF = ({modelType}) => {
  // const [renderModel, setRenderModel] = useState()
  // switch(modelType)
  // {
  //   case 'Country':

  // }
  return (
    <>
    {
      modelType == 'Country'
      ? <StepHipHopDanceF scale={0.045} position={[-0.5,0,-1.5]} />
      : modelType == 'Workout'
        ? <ChickenDanceF scale={[0.05, 0.05, 0.05]} position={[-0.5,0,-1]} />
        : modelType == 'Salsa'
          ? <SalsaDanceF scale={[0.05, 0.05, 0.05]} position={[-0.5,0,-1]} />
          : modelType == 'Hip-Hop'
            ? <HipHopDance1F scale={[0.05, 0.05, 0.05]} position={[-0.5,0,-1.2]} />
            : modelType == 'Latin-Pop'
              ? <MacarenaDanceF scale={[0.05, 0.05, 0.05]} position={[-0.5,0,-1]} />
              : <HipHopDance2F scale={[0.05, 0.05, 0.05]} position={[-0.5,0,-1]} />
    }
    </>
  )
}

const SpotifyPage = () => {
    const [modelType, setModelType] = useState('Workout');
    const [imgUrl, setImgUrl] = useState(modelType);
    const [toggle, setToggle] = useState('female');


    return (
        <>
            {/* <div>Hello</div> */}
            {/* <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
                <ChickenDance />
              </Suspense>
            </Canvas> */}
            <MusicIndex />
       
        </>
        
    )
}

export default SpotifyPage;


  