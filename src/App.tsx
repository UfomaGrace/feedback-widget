import { useState } from "react";
import FeedbackWidget from "./components/FeedbackWidget";
import "./App.css";

export default function App() {
  const [showWidget, setShowWidget] = useState(true);

  return (
    <div className="app">
      <div className="shell">
        <header className="app-header">
          <h1 className="app-brand">CampusGigs</h1>

          <button
            type="button"
            className="toggle-button"
            aria-controls="feedback-widget"
            aria-expanded={showWidget}
            onClick={() =>
              setShowWidget((current) => !current)
            }
          >
            {showWidget ? "Hide widget" : "Show widget"}
          </button>
        </header>

        <main>
          {showWidget ? (
            <FeedbackWidget />
          ) : (
            <p className="widget-hidden">
              The widget is hidden. Check the console:
              "Still here..." should have stopped.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}