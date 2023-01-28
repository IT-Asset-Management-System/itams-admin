import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../../components/FormComponent/InputField';
import { toast } from 'react-toastify';
import {
  Actions,
  NewLicense,
  Category,
  Manufacturer,
  Supplier,
} from '../../interface/interface';
import { getAllSuppliers } from '../../api/supplier';
import SelectField from '../../components/FormComponent/SelectField';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../../api/category';
import { getAllManufacturers } from '../../api/manufacturer';
import { createNewLicense, updateLicense } from '../../api/license';
import DatePickerField from '../../components/FormComponent/DatePickerField';
import dayjs from 'dayjs';

function CreateLicenseForm(props: any) {
  const { data, action } = props;
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const initialValues: NewLicense = {
    name: data?.name ?? '',
    purchase_cost: data?.purchase_cost ?? 0,
    purchase_date: data?.purchase_date ?? dayjs(),
    expiration_date: data?.expiration_date ?? dayjs(),
    categoryId:
      categories.find((category: Category) => {
        return category.name === data?.category;
      })?.id ?? 0,
    manufacturerId:
      manufacturers.find((manufacturer: Manufacturer) => {
        return manufacturer.name === data?.manufacturer;
      })?.id ?? 0,
    supplierId:
      suppliers.find((supplier: Supplier) => {
        return supplier.name === data?.supplier;
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

  const handleSubmit = async (newLicense: NewLicense) => {
    try {
      if (action === Actions.UPDATE) await updateLicense(data.id, newLicense);
      else await createNewLicense(newLicense);
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
                  id="purchase_cost"
                  fieldName="Purchase cost"
                  formik={formik}
                  required
                />
                <DatePickerField
                  id="purchase_date"
                  fieldName="Purchase Date"
                  formik={formik}
                  required
                />
                <DatePickerField
                  id="expiration_date"
                  fieldName="Expiration Date"
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

export default CreateLicenseForm;
