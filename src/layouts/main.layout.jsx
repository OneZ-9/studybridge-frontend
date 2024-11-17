import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function MainLayout() {
  return (
    // <div className="grid grid-cols-[auto_1fr]">
    //   <header className="bg-red-400 col-span-2 h-[100px]">Header</header>
    //   <nav className="bg-blue-400 w-[250px] transition-all duration-300">
    //     <ul>
    //       <li>
    //         <Link to="/api/v1/courses">All courses</Link>
    //       </li>
    //       <li>
    //         <Link>Sign out</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="bg-green-400">Outlet</div>
    // </div>

    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

export default MainLayout;
