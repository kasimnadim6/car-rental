import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { TextFormField } from "../FormFields/TextFormFields";
import { SelectFormField } from "../FormFields/SelectFormField";

export const Address = () => {
  const cars = [
    { label: "HatchBack", value: "hatchback" },
    { label: "Sedan", value: "sedan" },
    { label: "SUV", value: "suv" },
  ];
  const initialValues = {
    sourceLocation: "",
    destination: "",
    carType: "",
    passengers: "",
  };
  const validationSchema = yup.object({
    sourceLocation: yup.string().required("Source location is Required"),
    destination: yup.string().required("Destination is Required"),
    carType: yup.string(),
    passengers: yup
      .number()
      .when("carType", {
        is: "suv",
        then: yup.number().max(6),
        otherwise: yup.number().max(4),
      })
      .positive("number of passengers must be a positive number"),
  });
  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Container maxWidth="xs">
          <Form>
            <Box>
              <div style={{ minWidth: "47%" }}>
                <Field
                  label="Source Location"
                  name="sourceLocation"
                  variant="outlined"
                  component={TextFormField}
                />
              </div>
              <div style={{ minWidth: "47%" }}>
                <Field
                  label="Destination"
                  name="destination"
                  variant="outlined"
                  component={TextFormField}
                />
              </div>
            </Box>
            <div>
              <Field
                label="Enter Car Type"
                name="carType"
                variant="outlined"
                style={{ marginTop: "10px" }}
                component={SelectFormField}
              >
                {cars.map((car) => (
                  <MenuItem key={car.value} value={car.value}>
                    {car.label}
                  </MenuItem>
                ))}
              </Field>
            </div>
            <div>
              <Field
                label="Number of Travellers"
                name="passengers"
                type="number"
                variant="outlined"
                component={TextFormField}
              />
            </div>
            <ButtonBox>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </ButtonBox>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
