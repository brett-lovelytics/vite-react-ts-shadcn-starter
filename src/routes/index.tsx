import { redirect, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => {
    return redirect({
      to: "/home",
    });
  },
});

function Index() {
  return <div>Redirecting...</div>;
}
