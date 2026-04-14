import { Plus } from "lucide-react";
import Button from "../shared/Button";
import Heading from "../shared/Heading";

const HomePage = () => {
  const message = window.api.hello("Mardonbek");

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading>{message}</Heading>
        <Button>
          <Plus /> Add server
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
