import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
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
    <form onSubmit={handleSubmit}>
      <Grid container sx={{ margin: "1rem" }}>
        <Stack spacing={1.5}>
          <Grid item>
            <TextField
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
        </Stack>
      </Grid>
    </form>
  );
};

export default Form;
