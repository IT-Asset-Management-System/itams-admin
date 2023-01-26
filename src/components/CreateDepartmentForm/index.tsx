import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../FormComponent/InputField';
import { toast } from 'react-toastify';
import { Actions, NewDepartment, Location } from '../../interface/interface';
import SelectField from '../FormComponent/SelectField';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../api/category';
import { getAllLocations } from '../../api/location';
import { createNewDepartment, updateDepartment } from '../../api/department';

function CreateDepartmentForm(props: any) {
  const { data, action } = props;
  const navigate = useNavigate();
  const [locations, setLocations] = useState<Location[]>([]);
  const initialValues: NewDepartment = {
    name: data?.name ?? '',
    locationId:
      locations.find((location: Location) => {
        return location.name === data?.location;
      })?.id ?? 0,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const locations: Location[] = await getAllLocations();
        setLocations(locations);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (newDepartment: NewDepartment) => {
    try {
      if (action === Actions.UPDATE)
        await updateDepartment(data.id, newDepartment);
      else await createNewDepartment(newDepartment);
      navigate(-1);
      toast.success(
        action === Actions.UPDATE
          ? 'Update successfully'
          : 'Create successfully',
      );
    } catch (err: any) {
      console.log('Create asset', err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <Box
      sx={{
        width: { md: '1000px', xs: '100%' },
        background: '#FFF',
        borderRadius: '5px',
        py: '32px',
        margin: 'auto',
      }}
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Box sx={{ mx: '60px', mt: '20px' }}>
                <InputField
                  id="name"
                  fieldName="Name"
                  fullWidth
                  formik={formik}
                  required
                />
                <SelectField
                  id="locationId"
                  fieldName="location"
                  formik={formik}
                  data={locations}
                  required
                />
              </Box>
              <Box
                sx={{
                  mx: '60px',
                  mt: '20px',
                  display: 'flex',
                  justifyContent: 'right',
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    background: '#007aff',
                    boxShadow: '0px 8px 25px rgba(114, 56, 207, 0.15)',
                    borderRadius: '10px',
                    textTransform: 'none',
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: 14,
                    '&:hover': {
                      background: '#005eff',
                    },
                  }}
                >
                  Save
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}

export default CreateDepartmentForm;
