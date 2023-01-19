import { Box, MenuItem, Select, Typography, Grid } from '@mui/material';

function SelectField(props: any) {
  const { id, fieldName, formik, data, required } = props;
  return (
    <Box sx={{ flexGrow: 1, py: '16px' }}>
      <Grid container spacing={2}>
        <Grid
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            pr: '16px',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', display: 'inline' }}>
            {required ? `${fieldName}*` : fieldName}
          </Typography>
        </Grid>
        <Grid xs={9}>
          <Select
            id={id}
            name={id}
            defaultValue={formik.values[id]}
            value={formik.values[id]}
            size="small"
            sx={{
              width: '200px',
            }}
            onChange={formik.handleChange}
            required={required}
          >
            {data?.map((i: any) => {
              return (
                <MenuItem key={i.id} value={i.id}>
                  {i.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SelectField;
