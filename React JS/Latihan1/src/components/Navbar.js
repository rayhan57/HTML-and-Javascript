const Navbar = ({ newValue }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Beranda</a>
        </li>
        <li>
          <a href="#">{!newValue ? "Tentang" : newValue}</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
