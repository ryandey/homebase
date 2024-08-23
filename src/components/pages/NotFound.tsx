import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <span className="text-center p-4">
        <h1 className="text-2xl">You aren't supposed to be here...</h1>
        <p className="text-muted-foreground">
          Unfortunately, there's nothing to be seen on this page.
        </p>
      </span>
      <Button asChild>
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
