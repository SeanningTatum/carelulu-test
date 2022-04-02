import { Link } from "@remix-run/react";

export default function TaskIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new task.
      </Link>
    </p>
  );
}
