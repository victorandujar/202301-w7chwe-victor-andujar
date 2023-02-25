import Card from "../Card/Card";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <LayoutStyled className="main-header">
        <h1 className="main-header__title">Antisocial club</h1>
      </LayoutStyled>
      <Card />
    </>
  );
};

export default Layout;
