import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import InputField from '../FormComponent/InputField';
import { toast } from 'react-toastify';
import {
  Actions,
  AssetModel,
  Department,
  NewAsset,
  Status,
  Supplier,
} from '../../interface/interface';
import { getAllSuppliers } from '../../api/supplier';
import SelectField from '../FormComponent/SelectField';
import { createNewAsset, updateAsset } from '../../api/asset';
import { useNavigate } from 'react-router-dom';
import { getAllAssetModels } from '../../api/assetModel';
import { getAllDepartments } from '../../api/department';
import { getAllStatuses } from '../../api/status';

function CreateAssetForm(props: any) {
  const { asset, action } = props;
  const navigate = useNavigate();
  const [assetModels, setAssetModels] = useState<AssetModel[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const initialValues: NewAsset = {
    name: asset?.name ?? '',
    purchase_cost: asset?.purchase_cost ?? 0,
    assetModelId:
      assetModels.find((assetModel: AssetModel) => {
        return assetModel.name === asset?.assetModel;
      })?.id ?? 0,
    departmentId:
      departments.find((department: Department) => {
        return department.name === asset?.department;
      })?.id ?? 0,
    statusId:
      statuses.find((status: Status) => {
        return status.name === asset?.status;
      })?.id ?? 0,
    supplierId:
      suppliers.find((supplier: Supplier) => {
        return supplier.name === asset?.supplier;
      })?.id ?? 0,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const assetModels: AssetModel[] = await getAllAssetModels();
        const departments: Department[] = await getAllDepartments();
        const statuses: Status[] = await getAllStatuses();
        const suppliers: Supplier[] = await getAllSuppliers();
        setAssetModels(assetModels);
        setDepartments(departments);
        setStatuses(statuses);
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
                <SelectField
                  id="assetModelId"
                  fieldName="Asset Model"
                  formik={formik}
                  data={assetModels}
                  required
                />
                <SelectField
                  id="departmentId"
                  fieldName="Department"
                  formik={formik}
                  data={departments}
                  required
                />
                <SelectField
                  id="statusId"
                  fieldName="Status"
                  formik={formik}
                  data={statuses}
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
