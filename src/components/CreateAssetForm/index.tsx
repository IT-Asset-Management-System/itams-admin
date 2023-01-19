import { Box, Typography, Button, Select, MenuItem } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../FormComponent/InputField';
import { toast } from 'react-toastify';
import {
  Actions,
  Category,
  Manufacturer,
  NewAsset,
  Supplier,
} from '../../interface/interface';
import { getAllCategories } from '../../api/category';
import { getAllManufacturers } from '../../api/manufacturer';
import { getAllSuppliers } from '../../api/supplier';
import SelectField from '../FormComponent/SelectField';
import { createNewAsset, updateAsset } from '../../api/asset';
import { useNavigate } from 'react-router-dom';

function CreateAssetForm(props: any) {
  const { asset, action } = props;
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const initialValues: NewAsset = {
    name: asset?.name ?? '',
    status: asset?.status ?? '',
    purchase_cost: asset?.purchase_cost ?? 0,
    categoryId:
      categories.find((category: Category) => {
        return category.name === asset?.category;
      })?.id ?? 0,
    manufacturerId:
      manufacturers.find((manufacturer: Manufacturer) => {
        return manufacturer.name === asset?.manufacturer;
      })?.id ?? 0,
    supplierId:
      suppliers.find((supplier: Supplier) => {
        return supplier.name === asset?.supplier;
      })?.id ?? 0,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const categories: Category[] = await getAllCategories();
        const manufacturers: Manufacturer[] = await getAllManufacturers();
        const suppliers: Supplier[] = await getAllSuppliers();
        setCategories(categories);
        setManufacturers(manufacturers);
        setSuppliers(suppliers);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (newAsset: NewAsset) => {
    try {
      if (action === Actions.UPDATE) await updateAsset(asset.id, newAsset);
      else await createNewAsset(newAsset);
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
        width: '1000px',
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
                  id="status"
                  fieldName="Status"
                  fullWidth
                  formik={formik}
                  required
                />
                <InputField
                  id="purchase_cost"
                  fieldName="Purchase cost"
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
                <SelectField
                  id="supplierId"
                  fieldName="Supplier"
                  formik={formik}
                  data={suppliers}
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

export default CreateAssetForm;
