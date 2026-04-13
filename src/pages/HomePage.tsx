import { Plus } from "lucide-react";
import Button from "../shared/Button";
import Heading from "../shared/Heading";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading>All VPS servers</Heading>
        <Button>
          <Plus /> Add server
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
