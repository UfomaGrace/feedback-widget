import { useEffect, useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
} from "react";

type Feedback = {
  id: number;
  text: string;
};

function FeedbackWidget() {
  const [text, setText] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState<Feedback[]>([]);
  const [nextId, setNextId] = useState(1);

  // Handle textarea changes
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedText = text.trim();

    // Don't submit empty feedback
    if (trimmedText === "") {
      return;
    }

    const newFeedback: Feedback = {
      id: nextId,
      text: trimmedText,
    };

    setSubmittedFeedback((currentFeedback) => [
      ...currentFeedback,
      newFeedback,
    ]);

    setNextId((currentId) => currentId + 1);
    setText("");
  };

  // Allow Enter to submit and Shift + Enter for a new line
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  // Delete one feedback item
  const handleDelete = (idToDelete: number) => {
    setSubmittedFeedback((currentFeedback) =>
      currentFeedback.filter(
        (feedback) => feedback.id !== idToDelete
      )
    );
  };

  // Runs once when the component mounts
  useEffect(() => {
    console.log("Feedback widget mounted");
  }, []);

  // Runs whenever submittedFeedback changes
  useEffect(() => {
    console.log(
      `Feedback count: ${submittedFeedback.length}`
    );
  }, [submittedFeedback]);

  // Runs when the component mounts and cleans up when it unmounts
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Still here...");
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <section
      id="feedback-widget"
      aria-labelledby="feedback-title"
      className="feedback-widget"
    >
      <div>
        <p className="feedback-eyebrow">
          Your feedback matters
        </p>

        <h2 id="feedback-title" className="feedback-title">
          How is CampusGigs working for you?
        </h2>

        <p className="feedback-subtitle">
          Tell us what works, what doesn't and what you'd like
          to see next.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <label
          htmlFor="feedback-text"
          className="visually-hidden"
        >
          Your feedback
        </label>

        <textarea
          id="feedback-text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={200}
          rows={5}
          placeholder="Write your feedback here..."
          aria-describedby="feedback-help"
          className="feedback-textarea"
        />

        <div className="feedback-counter">
          <span id="feedback-help">
            Enter to submit · Shift + Enter for a new line
          </span>

          <span>{text.length}/200</span>
        </div>

        <button
          type="submit"
          disabled={text.trim() === ""}
          className="feedback-submit"
        >
          Submit feedback
        </button>
      </form>

      <div className="feedback-list-section">
        <div className="feedback-list-header">
          <h3 className="feedback-list-title">
            Submitted feedback
          </h3>

          <span
            className="feedback-badge"
            aria-label={`${submittedFeedback.length} submitted feedback items`}
          >
            {submittedFeedback.length}
          </span>
        </div>

        {submittedFeedback.length === 0 ? (
          <p className="feedback-empty">
            Nothing here yet. Your feedback will appear in this
            list.
          </p>
        ) : (
          <ul className="feedback-list">
            {submittedFeedback.map((feedback) => (
              <li
                key={feedback.id}
                className="feedback-item"
              >
                <p className="feedback-item-text">
                  {feedback.text}
                </p>

                <button
                  type="button"
                  onClick={() => handleDelete(feedback.id)}
                  aria-label="Delete feedback"
                  className="feedback-delete"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default FeedbackWidget;