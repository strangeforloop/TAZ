// Root layout component.
// Renders the two-column Give & Take board (GiveBoard | TakeBoard)
// and the PostForm for submitting new entries.
import GeminiGiveTake from './GeminiGiveTake'; 
export default function App() {
  return (
    <div>
      <GeminiGiveTake />
    </div>
  );
}