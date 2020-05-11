import { useMutation } from 'react-apollo';
import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';
import CreateItemForm from '../components/CreateItemForm';
import { CREATE_ITEM_MUTATION } from '../apollo/mutations/createItemMutation';

const FormContainer = styled.div`
  ${tw`overflow-hidden flex items-center justify-center`}
`;

export default function AddItemPage() {
  const [addItem, { loading, error }] = useMutation(CREATE_ITEM_MUTATION);
  const runMutation = (values) => {
    addItem({
      variables: values,
    });
  };
  return (
    <>
      <h1>{loading && 'Loading...'}</h1>
      <h1>{error && error.message}</h1>
      <FormContainer>
        <CreateItemForm handleSubmit={runMutation} loading={loading} />
      </FormContainer>
    </>
  );
}
