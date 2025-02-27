import Section from "../../components/Section";
import Header from "../../components/Header/Header";
import AuthForm from "../../components/Auth/AuthForm";
import {
  RegisterFormFields,
  RegisterButtonText,
  RegisterFooterLink,
} from "../../constants/index";


const Register = () => {
  return (
    <Section
      className="pt-[5rem] overflow-hidden"
      crosses
      customPaddings
      id="login"
    >
      <Header />
      <div className="container relative  rounded-lg py-8 mb-[4.8rem] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <AuthForm
          title="Registrate"
          fields={RegisterFormFields}
          buttonText={RegisterButtonText}
          footerLink={RegisterFooterLink}
          onSubmit={() => {
            // Lógica del login
          }}
        />
        
      </div>
    </Section>
  );
};

export default Register;
