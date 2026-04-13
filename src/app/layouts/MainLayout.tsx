import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      Set-up is done, Happy coding! ⚡️
      <Outlet />
    </div>
  );
};

export default MainLayout;
