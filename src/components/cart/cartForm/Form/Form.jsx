import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";

const Form = ({ formik }) => {
  const {
    handleSubmit,
    handleChange,
    touched,
    isValid,
    dirty,
    handleBlur,
    errors,
    values,
  } = formik;
  return (
    <form onSubmit={handleSubmit} style={{ height: "100vh" }}>

      <Grid
        container
        spacing={1}
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        >
        <Grid item>
          <TextField
            sx={{ width: "20rem" }}
            name="name"
            label="name"
            onChange={handleChange}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={errors.name && touched.name ? `${errors.name}` : null}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "20rem" }}
            name="tel"
            label="phone number"
            onChange={handleChange}
            value={values.tel}
            error={touched.tel && Boolean(errors.tel)}
            helperText={errors.tel && touched.tel ? `${errors.tel}` : null}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: "20rem" }}
            name="email"
            label="email"
            onChange={handleChange}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={
              errors.email && touched.email ? `${errors.email}` : null
            }
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            disabled={!(isValid && dirty)}
            variant="contained"
          >
            send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
