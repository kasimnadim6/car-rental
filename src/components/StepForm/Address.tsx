import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";

export const Address = () => {
  const cars = [
    { label: "HatchBack", value: "hatchback" },
    { label: "Sedan", value: "sedan" },
    { label: "SUV", value: "suv" },
  ];

  
  return (
    <Container maxWidth="sm">
      <Box>
        <TextField
          label="Source Location"
          name="sourceLoc"
          // value={address}
          // onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          required
        />
        <TextField
          label="Destination"
          name="destination"
          // value={city}
          // onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          required
        />
      </Box>
      <TextField
        select
        label="Enter Car Type"
          value={''}
          // onChange={inputChangeHandler}
        // helperText="Please select your currency"
        variant="outlined"
        fullWidth
      >
        {cars.map((car) => (
          <MenuItem key={car.value} value={car.value}>
            {car.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Number of Travellers"
        name="travellers"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 4 } }}
        // value={zip}
        // onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
    </Container>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
