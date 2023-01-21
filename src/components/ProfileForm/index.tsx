import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { ImageListType } from 'react-images-uploading';
import { updateProfile, saveAvatar } from '../../api/admin';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import InputField from '../FormComponent/InputField';
import { UploadImage } from './UploadImage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ProfileForm() {
  const navigate = useNavigate();
  const { authContext } = useAuthContext();
  const [image, setImage] = useState<ImageListType>([]);
  const onImageChange = async (imageList: ImageListType) => {
    setImage(imageList);
  };

  const initialValues = {
    name: authContext.name,
  };
  console.log(initialValues);

  const handleSubmit = async (profile: any) => {
    try {
      await updateProfile(profile);
      if (image.length > 0) {
        await saveAvatar(image[0].file);
        navigate(0);
      } else toast.success('Update successfully');
    } catch (err: any) {
      console.log('update profile', err);
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
        validateOnChange={false}
        validateOnBlur={false}
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
                <UploadImage image={image} onImageChange={onImageChange} />
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

export default ProfileForm;
