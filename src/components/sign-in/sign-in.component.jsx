import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = () => {
  return (
    <SignInContainer>
      <h2>I have an account?</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="Username"
          type="text"
          required
          name="username"
          value=""
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value=""
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
