// import { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
// import { Formik, Form } from "formik";
import { Address } from "./StepForm/Address";
// import { Contact } from "./StepForm/Contact";

const steps = ["address", "contact", "review", "submit"];

export const CarRentForm = () => {
  // const [step, navigation] = useState({
  //   steps,
  //   initialStep: 0,
  // });

  return (
    <>
      <StyledForm>
        <Address />
      </StyledForm>
      <ButtonBox>
        <Button color="primary" variant="contained">
          Submit
        </Button>
      </ButtonBox>
      {/* <ButtonBox style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Next
        </Button>
      </ButtonBox> */}
    </>
  );
};

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  Button {
    width: 22%;
  }
`;
