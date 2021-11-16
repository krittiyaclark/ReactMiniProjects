import Button from "./Button";
import Title from "./Tittle";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header>
      <Title>Task Tracker</Title>
      <Button
        onAdd={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Header",
};

export default Header;
