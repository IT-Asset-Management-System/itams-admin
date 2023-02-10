import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import InputField from '../../components/FormComponent/InputField';
import { toast } from 'react-toastify';
import { Actions, NewSourceCode } from '../../interface/interface';
import { useNavigate } from 'react-router-dom';
import { createNewSourceCode, updateSourceCode } from '../../api/sourceCode';
import CheckboxField from '../../components/FormComponent/CheckboxField';

function CreateSourceCodeForm(props: any) {
  const { data, action } = props;
  const navigate = useNavigate();
  const initialValues: NewSourceCode = {
    name: data?.name ?? '',
    owner: data?.owner ?? '',
    description: data?.description ?? '',
    isPrivate: data?.isPrivate ?? false,
    url: data?.url ?? '',
  };

  const handleSubmit = async (newSourceCode: NewSourceCode) => {
    try {
      if (action === Actions.UPDATE)
        await updateSourceCode(data.id, newSourceCode);
      else await createNewSourceCode(newSourceCode);
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
                <InputField
                  id="owner"
                  fieldName="Owner"
                  fullWidth
                  formik={formik}
                  required
                />
                <InputField
                  id="description"
                  fieldName="Description"
                  fullWidth
                  formik={formik}
                />
                <CheckboxField
                  id="isPrivate"
                  fieldName="Is Private"
                  formik={formik}
                />
                <InputField
                  id="url"
                  fieldName="Url"
                  fullWidth
                  formik={formik}
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

export default CreateSourceCodeForm;
