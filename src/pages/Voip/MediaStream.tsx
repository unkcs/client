import useThreeAudioScene from '@/components/Voip/three';
import React, { useEffect, useRef } from 'react';
// Importe o jQuery caso esteja usando-o

type Props = {
  stream: MediaStream;
  target: string;
};

const PlayAudioStream: React.FC<Props> = ({ stream, target }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.muted = true;
      videoRef.current.setAttribute('data-peer', target);
      videoRef.current.onloadedmetadata = () => videoRef.current?.play();

      // addStream('1', videoRef.current.srcObject)
      // updateAudioSource()
    }
  }, [stream, target]);

  return <div className="audiostream-container"><video ref={videoRef} /></div>;
};

export default PlayAudioStream;