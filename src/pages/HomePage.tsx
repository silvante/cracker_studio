import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage <Link to={"/about"} className="text-blue-700">About page</Link>
    </div>
  );
};

export default HomePage;
