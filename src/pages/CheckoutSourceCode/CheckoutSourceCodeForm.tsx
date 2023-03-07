import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../../components/FormComponent/InputField';
import { toast } from 'react-toastify';
import { CheckoutSourceCode, User } from '../../interface/interface';
import SelectField from '../../components/FormComponent/SelectField';
import { checkoutSourceCode } from '../../api/sourceCode';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import DatePickerField from '../../components/FormComponent/DatePickerField';
import * as Yup from 'yup';
import { getAllUsers } from '../../api/user';

function CheckoutSourceCodeForm(props: any) {
  const { data } = props;
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const initialValues: CheckoutSourceCode = {
    sourceCodeId: data?.id,
    userId: 0,
    start_date: data?.date ?? dayjs(),
    start_note: '',
  };
  const validationSchema = Yup.object({
    checkout_date: Yup.date().typeError('Invalid date'),
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const users: User[] = await getAllUsers();
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (sourceCode: CheckoutSourceCode) => {
    try {
      await checkoutSourceCode(sourceCode);
      navigate(-1);
      toast.success('Checkout successfully');
    } catch (err: any) {
      console.log('Checkout source code', err);
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
        validationSchema={validationSchema}
        validateOnChange={false}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Box sx={{ mx: '60px', mt: '20px' }}>
                <InputField
                  id="name"
                  fieldName="Source Code Name"
                  fullWidth
                  formik={formik}
                  value={data?.name}
                  disabled
                />
                <SelectField
                  id="userId"
                  fieldName="User"
                  formik={formik}
                  data={users}
                  required
                />
                <DatePickerField
                  id="start_date"
                  fieldName="Start Date"
                  formik={formik}
                  required
                />
                <InputField
                  id="start_note"
                  fieldName="Note"
                  formik={formik}
                  multiline
                  fullWidth
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

export default CheckoutSourceCodeForm;
