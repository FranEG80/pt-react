import React, { useContext, useState } from "react";
import Container from "../atom/Container";
import Text from "../atom/Text/";
import Button from "../atom/Button/";
import FormInput from "../molecule/FormInput/FormInput";
import { UserContext } from "../../stores/UserStore";
import LoginForm from "../molecule/LoginForm/LoginForm";

const MODES = {
  LOGIN: 1,
  REGISTER: 2,
};

const ACTIONS = {
  REGISTER: 1,
  SUBMIT_LOGIN: 2,
  SUBMIT_REGISTER: 3,
};

function LoginScreen() {
  const [mode, setMode] = useState(MODES.LOGIN);
  const [usernameForm, setUsernameForm] = useState(null);
  const [emailForm, setEmailForm] = useState(null);
  const [passwordForm, setPasswordForm] = useState(null);

  const { onLogin, onRegister } = useContext(UserContext);

  const HANDLES = {
    [ACTIONS.REGISTER]: () =>
      setMode(mode === MODES.REGISTER ? MODES.LOGIN : MODES.REGISTER),
    [ACTIONS.SUBMIT_LOGIN]: () =>
      onLogin({ email: emailForm, password: passwordForm }),
    [ACTIONS.SUBMIT_REGISTER]: () =>
      onRegister({ username: usernameForm, password: passwordForm, email: emailForm }),
  };

  return (
    <LoginForm>
      <Container
        className="flex column jc-center ai-center w50 h90"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <Text type="h1">
          {mode === MODES.LOGIN
            ? "Login for search your new Job!!"
            : "Signin in the App!"}
        </Text>
        <Container
          className="flex w75-percent column"
          style={{
            margin: "20px 0",
          }}
        >
          <FormInput
            style={{ marginBottom: 20 }}
            label="Email"
            type="email"
            className="w100-percent"
            placeholder="your-email@here.com"
            onChange={(e) => setEmailForm(e.currentTarget.value)}
          />
          {mode === MODES.REGISTER && (
            <FormInput
              style={{ marginBottom: 20 }}
              label="Username"
              type="text"
              className="w100-percent"
              placeholder="Username..."
              onChange={(e) => setUsernameForm(e.currentTarget.value)}
            />
          )}
          <FormInput
            style={{ marginBottom: 20 }}
            label="Password"
            type="password"
            className="w100-percent"
            placeholder="Password..."
            onChange={(e) => setPasswordForm(e.currentTarget.value)}
          />
          {mode === MODES.LOGIN && (
            <Button
              type="submit"
              className="success"
              onPress={HANDLES[ACTIONS.SUBMIT_LOGIN]}
            >
              LOGIN
            </Button>
          )}
        </Container>

        {mode === MODES.LOGIN ? (
          <Text type="p">
            Not registered yet?{" "}
            <Button className="cancel" onPress={HANDLES[ACTIONS.REGISTER]}>
              Signin here
            </Button>
          </Text>
        ) : (
          <Container
            className="flex w75-percent "
            style={{ justifyContent: "space-around" }}
          >
            <Button className="cancel" onPress={HANDLES[ACTIONS.REGISTER]}>
              Back to Login
            </Button>
            <Button type='submit' onPress={HANDLES[ACTIONS.SUBMIT_REGISTER]} className="success">Submit</Button>
          </Container>
        )}
      </Container>
    </LoginForm>
  );
}

export default LoginScreen;
