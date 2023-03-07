import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import InputField from '../../components/FormComponent/InputField';
import { toast } from 'react-toastify';
import { CheckinDigitalContent } from '../../interface/interface';
import { checkinDigitalContent } from '../../api/digitalContent';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import DatePickerField from '../../components/FormComponent/DatePickerField';
import * as Yup from 'yup';

function CheckinDigitalContentForm(props: any) {
  const { data } = props;
  const navigate = useNavigate();
  const initialValues: CheckinDigitalContent = {
    digitalContentToSourceCodeId: data?.id,
    checkin_date: data?.date ?? dayjs(),
    checkin_note: '',
  };
  const validationSchema = Yup.object({
    Checkin_date: Yup.date().typeError('Invalid date'),
  });

  const handleSubmit = async (digitalContent: CheckinDigitalContent) => {
    try {
      await checkinDigitalContent(digitalContent);
      navigate(-1);
      toast.success('Checkin successfully');
    } catch (err: any) {
      console.log('Checkin Digital Content', err);
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
                  fieldName="Digital Content Name"
                  fullWidth
                  formik={formik}
                  value={data?.digitalContentName}
                  disabled
                />
                <DatePickerField
                  id="checkin_date"
                  fieldName="Checkin Date"
                  formik={formik}
                  required
                />
                <InputField
                  id="checkin_note"
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

export default CheckinDigitalContentForm;
