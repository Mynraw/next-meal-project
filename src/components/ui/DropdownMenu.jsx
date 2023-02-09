import OutsideClickHandler from "react-outside-click-handler";

const DropdownMenu = ({ setIsDropdownMenu }) => {
  return (
    <div>
      <OutsideClickHandler onOutsideClick={() => setIsDropdownMenu(false)}>
        <div>works</div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownMenu;
