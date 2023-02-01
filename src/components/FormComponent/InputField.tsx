import { Box, TextField, Typography, Grid } from '@mui/material';

function InputField(props: any) {
  const { id, fieldName, disabled, fullWidth, formik, required } = props;
  return (
    <Box sx={{ flexGrow: 1, py: '16px' }}>
      <Grid
        container
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        spacing={2}
      >
        <Grid
          xs={false}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: { md: 'right' },
            alignItems: 'center',
            pr: '16px',
            flexGrow: { xs: 1 },
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }}>
            {required ? `${fieldName}*` : fieldName}
          </Typography>
        </Grid>
        <Grid xs={false} md={9}>
          <TextField
            id={id}
            size="small"
            disabled={disabled}
            fullWidth={fullWidth}
            value={formik.values[id]}
            onChange={formik.handleChange}
            required={required}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InputField;
