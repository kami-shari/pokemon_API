import { useRef } from "react";

export default function PlaySound({ audioURL }: { audioURL: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div>
      <button onClick={() => audioRef.current?.play()}>
        <img
          src='../public/playsound_pokemon_ball.png'
          alt="pokemon sound"
          style={{ width: "90px", height: "90px" }}
        />
      </button>
      {/* <p>⇑</p> */}
      <p>⬆</p>
      <h4>Click here to play the Pokémon sound!</h4>
      <audio src={audioURL} ref={audioRef} />
    </div>
  );
}
