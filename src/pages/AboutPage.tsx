import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      AboutPage{" "}
      <Link to={"/"} className="text-blue-700">
        Go back
      </Link>
    </div>
  );
};

export default AboutPage;
