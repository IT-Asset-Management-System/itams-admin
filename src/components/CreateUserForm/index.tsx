import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../FormComponent/InputField';
import { toast } from 'react-toastify';
import { Actions, NewUser, Department } from '../../interface/interface';
import SelectField from '../FormComponent/SelectField';
import { useNavigate } from 'react-router-dom';
import { getAllDepartments } from '../../api/department';
import { createNewUser, updateUser } from '../../api/user';
import PasswordField from '../FormComponent/PasswordField';

function CreateUserForm(props: any) {
  const { data, action } = props;
  const navigate = useNavigate();
  const [departments, setDepartments] = useState<Department[]>([]);
  const initialValues: NewUser = {
    name: data?.name ?? '',
    username: data?.username ?? '',
    password: '',
    phone: data?.phone ?? '',
    departmentId:
      departments.find((department: Department) => {
        return department.name === data?.department;
      })?.id ?? 0,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const departments: Department[] = await getAllDepartments();
        setDepartments(departments);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (newUser: NewUser) => {
    try {
      if (action === Actions.UPDATE) await updateUser(data.id, newUser);
      else await createNewUser(newUser);
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
                />
                <InputField
                  id="username"
                  fieldName="Username"
                  fullWidth
                  formik={formik}
                  autoComplete="off"
                  required
                />
                <PasswordField
                  id="password"
                  fieldName="Password"
                  formik={formik}
                  required
                />
                <InputField id="phone" fieldName="Phone" formik={formik} />
                <SelectField
                  id="departmentId"
                  fieldName="Department"
                  formik={formik}
                  data={departments}
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

export default CreateUserForm;
