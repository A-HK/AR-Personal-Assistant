import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Dashboard from "../../../components/SpotifyXR/components/Dashboard";
import Loader from "../../../components/SpotifyXR/components/Loader";
import "../../../styles/spotify.module.css"

export default function MusicIndex() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/use-cases/music/music");
    //  router.push("/use-cases/music/auth/signin");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (

    <Dashboard />
  );
}