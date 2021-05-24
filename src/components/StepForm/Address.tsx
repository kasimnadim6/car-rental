import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";

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
    sourceLocation:yup.string().required("Source location is Required"),
    destination:yup.string().required("Destination is Required"),
    carType:yup.string(),
    passengers:yup.number().positive('number of passengers must be a positive number').lessThan(999999999,'Invalid')
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Container maxWidth="xs">
        <Box>
          <FieldBox>
            <StyledTextField
              label="Source Location"
              name="sourceLocation"
              value={formik.values.sourceLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required
            />
            {formik.touched.sourceLocation && formik.errors.sourceLocation ? (
              <Error>{formik.errors.sourceLocation}</Error>
            ) : null}
          </FieldBox>
          <FieldBox>
            <StyledTextField
              label="Destination"
              name="destination"
              value={formik.values.destination}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required
            />
            {formik.touched.destination && formik.errors.destination ? (
              <Error>{formik.errors.destination}</Error>
            ) : null}
          </FieldBox>
        </Box>
        <FieldBox>
          <StyledTextField
            select
            label="Enter Car Type"
            name="carType"
            value={formik.values.carType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            {cars.map((car) => (
              <MenuItem key={car.value} value={car.value}>
                {car.label}
              </MenuItem>
            ))}
          </StyledTextField>
          {formik.errors.carType ? (
            <Error>{formik.touched.carType && formik.errors.carType}</Error>
          ) : null}
        </FieldBox>
        <FieldBox>
          <StyledTextField
            label="Number of Travellers"
            name="passengers"
            type="number"
            InputProps={{ inputProps: { min: 0, max: 6 } }}
            value={formik.values.passengers}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          {formik.touched.passengers && formik.errors.passengers ? (
            <Error>{formik.errors.passengers}</Error>
          ) : null}
        </FieldBox>
        <ButtonBox>
          <Button
            color="primary"
            variant="contained"
            style={{width:'100%'}}
            disabled={!(formik.isValid && formik.dirty)}
            onClick={() => formik.handleSubmit()}
          >
            Submit
          </Button>
        </ButtonBox>
      </Container>
      {/* </Formik> */}
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  TextField {
    width: 50%;
  }
`;
const StyledTextField = withStyles({
  root: {
    minWidth: "47%",
  },
})(TextField);
const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Error = styled.div`
  margin: 0 0 3px 5px;
  color: red;
  font-weight: 500;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
