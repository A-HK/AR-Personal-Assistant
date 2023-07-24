import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from "../../../atoms/playerAtom";
import Body from "./Body";
import Player from "./Player";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  console.log(process.env.NEXT_SPOTIFY_CLIENT_ID)

  return (
    <>
    <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
    <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
    </>
  
  );
}

export default Dashboard;
