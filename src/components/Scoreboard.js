import Player from "./Player";
import AddPlayer from "./AddPlayer";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <h4>Player's Score</h4>
      <ul>
        <Player name="Eli" />
        <Player name="Michelle Tan" />
        <Player name="Binty" />
      </ul>

      <AddPlayer />
    </div>
  );
}
