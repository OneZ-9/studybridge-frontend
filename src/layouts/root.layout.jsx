import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main>
      <Outlet className="max-w-[1400px] mx-auto p-4" />
    </main>
  );
}

export default RootLayout;
