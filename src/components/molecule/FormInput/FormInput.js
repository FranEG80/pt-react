import React, { useState } from "react";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import Container from "../../atom/Container";
import Text from "../../atom/Text";

const INPUT_TYPES = {
  PASSWORD: "password",
  TEXT: "text",
  EMAIL: "email",
  DEFAULT: "text",
};

function FormInput({ label, placeholder, onChange, className, type, style }) {
  const [visibilityPwd, setVisibilityPwd] = useState(false);

  const handleVisibilityPwd = () => {
    setVisibilityPwd(!visibilityPwd);
  };

  return (
    <Container className={`${className ?? ''} flex column`} style={style}>
      <Text style={{ paddingBottom: 5 }}>{label}</Text>
      <Container className={`${className ?? ''} flex row w100-percent`}>
        <Input
          className=" w100-percent"
          onChange={onChange}
          placeholder={placeholder}
          type={
            type !== INPUT_TYPES.PASSWORD
              ? type
              : !visibilityPwd
              ? INPUT_TYPES.PASSWORD
              : INPUT_TYPES.TEXT
          }
          style={
            type !== INPUT_TYPES.PASSWORD
              ? { padding: 10 }
              : {
                  padding: 10,
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  border: "1px solid black",
                }
          }
        />
        {type === INPUT_TYPES.PASSWORD && (
          <Button
            className="success"
            onPress={handleVisibilityPwd}
            style={{
              fontSize: 20,
              color: "#506670",
              margin: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              paddingBottom: 0,
              paddingTop: 0,
            }}
          >
            👁
          </Button>
        )}
      </Container>
    </Container>
  );
}

export default FormInput;
