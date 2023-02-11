import { Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AcceptRequest, Asset, AssetModel } from '../../interface/interface';
import SelectField from '../../components/FormComponent/SelectField';
import { useNavigate } from 'react-router-dom';
import { getAssetsByModel, acceptRequest } from '../../api/asset';
import { getAllAssetModels } from '../../api/assetModel';

function AcceptRequestForm(props: any) {
  const { data } = props;
  const navigate = useNavigate();
  const [assets, setAssets] = useState<Asset[]>([]);
  const initialValues: AcceptRequest = {
    id: data?.id ?? '',
    assetId: data?.assetId ?? '',
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const assetModels: AssetModel[] = await getAllAssetModels();
        const assetModelId =
          assetModels.find((assetModel: AssetModel) => {
            return assetModel.name === data?.assetModel;
          })?.id ?? 0;
        const assets: Asset[] = await getAssetsByModel(assetModelId);
        setAssets(assets);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleSubmit = async (data: AcceptRequest) => {
    try {
      await acceptRequest(data);
      navigate(-1);
      toast.success('Accept successfully');
    } catch (err: any) {
      console.log('Accept request', err);
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
                <SelectField
                  id="assetId"
                  fieldName="Asset"
                  formik={formik}
                  data={assets}
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

export default AcceptRequestForm;
