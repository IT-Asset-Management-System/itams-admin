import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../FormComponent/InputField';
import { toast } from 'react-toastify';
import {
  Actions,
  NewAssetModel,
  Category,
  Manufacturer,
} from '../../interface/interface';
import SelectField from '../FormComponent/SelectField';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../api/category';
import { getAllManufacturers } from '../../api/manufacturer';
import { createNewAssetModel, updateAssetModel } from '../../api/assetModel';

function CreateAssetModelForm(props: any) {
  const { data, action } = props;
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const initialValues: NewAssetModel = {
    name: data?.name ?? '',
    categoryId:
      categories.find((category: Category) => {
        return category.name === data?.category;
      })?.id ?? 0,
    manufacturerId:
      manufacturers.find((manufacturer: Manufacturer) => {
        return manufacturer.name === data?.manufacturer;
      })?.id ?? 0,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const categories: Category[] = await getAllCategories();
        const manufacturers: Manufacturer[] = await getAllManufacturers();
        setCategories(categories);
        setManufacturers(manufacturers);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (newAssetModel: NewAssetModel) => {
    try {
      if (action === Actions.UPDATE)
        await updateAssetModel(data.id, newAssetModel);
      else await createNewAssetModel(newAssetModel);
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
                  id="categoryId"
                  fieldName="Category"
                  formik={formik}
                  data={categories}
                  required
                />
                <SelectField
                  id="manufacturerId"
                  fieldName="Manufacturer"
                  formik={formik}
                  data={manufacturers}
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

export default CreateAssetModelForm;
