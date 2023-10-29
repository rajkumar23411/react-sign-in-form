import * as Components from "./components.jsx";
import Hero from "./assets/Fingerprint-pana.svg";
import { Logo, colors, textSize } from "./config.jsx";

const App = () => {
    return (
        <Components.Container>
            <Components.ContentContainer>
                <Components.FormContainer>
                    <Components.Logo src={Logo} alt="logo" />
                    <Components.Form>
                        <Components.FormHeadingContainer>
                            <Components.HeadingLarge>
                                Welcome Back!
                            </Components.HeadingLarge>
                            <Components.Paragraph>
                                Please login to continue
                            </Components.Paragraph>
                        </Components.FormHeadingContainer>
                        <Components.InputContainer>
                            <Components.Input type="text" placeholder=" " />
                            <Components.Label>
                                Username or email
                            </Components.Label>
                        </Components.InputContainer>
                        <Components.InputContainer>
                            <Components.Input type="password" placeholder=" " />
                            <Components.Label>Password</Components.Label>
                        </Components.InputContainer>
                        <Components.FormOptionContainer>
                            <Components.Options>
                                <Components.CheckBox type="checkbox" />
                                <Components.Span>Remember me</Components.Span>
                            </Components.Options>
                            <Components.Options>
                                <Components.ForgotPasswordOption>
                                    Forgot password?
                                </Components.ForgotPasswordOption>
                            </Components.Options>
                        </Components.FormOptionContainer>
                        <Components.Button>Sign in</Components.Button>
                        <Components.FormBottomContainer>
                            <Components.Line />
                            <Components.SingnInText>
                                or sign in with
                            </Components.SingnInText>
                            <Components.ButtonContainer>
                                <Components.SingInButtons color="#DB4437">
                                    <i className="fab fa-google" />
                                </Components.SingInButtons>
                                <Components.SingInButtons color="#0165E1">
                                    <i className="fab fa-facebook-f" />
                                </Components.SingInButtons>
                            </Components.ButtonContainer>
                        </Components.FormBottomContainer>
                        <Components.CreateAccountText margin="auto">
                            Don't have an account?{" "}
                            <Components.CreateAccountText
                                color={colors.primaryLight}
                                weight={600}
                            >
                                Create Now
                            </Components.CreateAccountText>
                        </Components.CreateAccountText>
                    </Components.Form>
                </Components.FormContainer>
                <Components.LeftContentContainer>
                    <Components.Image src={Hero} alt="hero" />
                    <Components.HeadingMedium>
                        Keep your personal data updated!
                    </Components.HeadingMedium>
                    <Components.Paragraph align="center" width="70%">
                        Avoid problems with your payments and documentation keep
                        your data up to date!
                    </Components.Paragraph>
                </Components.LeftContentContainer>
            </Components.ContentContainer>
            <Components.Bubble position="top" />
            <Components.Bubble position="bottom" />
        </Components.Container>
    );
};

export default App;
