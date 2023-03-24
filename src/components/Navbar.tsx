import { NavLink } from 'react-router-dom';
interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={className}>
      <ul className="flex flex-row justify-center items-center h-full">
        <li className="mx-2">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="mx-2">
          <NavLink to={'/login'}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
