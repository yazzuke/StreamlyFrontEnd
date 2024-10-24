import Section from "../../components/Section";
import Header from "../../components/Header/Header";
import AuthForm from "../../components/Auth/AuthForm";
import {
  loginFormFields,
  loginButtonText,
  loginFooterText,
  loginFooterLink,
} from "../../constants/index";
import GoogleLoginButton from "../../components/Auth/GoogleLoginButton";

const Login = () => {
  return (
    <Section
      className="pt-[6rem] overflow-hidden"
      crosses
      customPaddings
      id="login"
    >
      <Header />
      <div className="container relative rounded-lg py-8 mb-[6.9rem] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <AuthForm
          title="Iniciar Sesión"
          fields={loginFormFields}
          buttonText={loginButtonText}
          footerText={loginFooterText}
          
          footerLink={loginFooterLink}
          onSubmit={() => {
            // Lógica del login
          }}
          
        />
        
        <GoogleLoginButton  />
      </div>
      
    </Section>
  );
};

export default Login;
