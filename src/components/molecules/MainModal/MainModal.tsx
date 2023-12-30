import FloatingLabelInput from "../../atoms/InputText/FloatingLabelInput";
import InputPass from "../../atoms/InputWithIcon/InputPass";
import Subtitle from "../../atoms/Subtitle/Subtitle";


/**
 *Main Modal component with two Input compontents. the FloatinglabelImput component and Input Password component.
 */


const MainModal = () => {
  return (
    <div>
      <Subtitle text='Please complete Email and Password'/>
      <br />
      <FloatingLabelInput labelText="Email" placeholderText="email@email.com" />
      <InputPass placeholderText="Password" />
    </div>
  );
};

export default MainModal;
