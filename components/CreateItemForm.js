import { useFormik } from 'formik';
import styled from '@emotion/styled';
import tw from '@tailwindcssinjs/macro';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/react';
import { theme } from '../styles/theme/theme';

const keyframeLoading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  ${tw`px-8 pt-6 pb-8 mb-4 bg-white rounded`} fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${theme.colors.blue[300]} 0%,
        ${theme.colors.blue[600]} 50%,
        ${theme.colors.blue[200]} 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${keyframeLoading} 0.5s linear infinite;
    }
  }
`;

// props: touched, errors ,item name
const FormItem = styled.div`
  ${tw`mb-4`}
  label {
    ${tw`block mb-2 text-sm font-bold text-gray-700`}
  }
  input,
  textarea {
    ${tw`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
    ${(props) => {
      console.log(props.theme);
      return props.touched && props.errors ? tw`border-red-500` : tw``;
    }}
  }
`;

const Divider = styled.hr`
  ${tw`mb-6 border-t`}
`;

// props dirty, isSubmitting, errors
const SubmitForm = styled.div`
  ${tw`mb-6 text-center`}
  button {
    ${tw`w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline`}
    ${(props) =>
      !props.dirty &&
      props.isSubmitting &&
      Object.keys(props.errors).length !== 0
        ? tw`opacity-50 cursor-not-allowed`
        : tw``}
  }
`;

const FormWrapper = styled.div`
  ${tw`container mx-auto`}
`;

FormItem.propTypes = {
  touched: PropTypes.bool,
  errors: PropTypes.array,
};

SubmitForm.propTypes = {
  dirty: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.object || undefined,
};

export default function CreateItemForm({ handleSubmit, loading }) {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      image: '',
      imageLarge: '',
    },
    onSubmit: (values) => {
      const { price } = values;
      values.price = parseFloat(price);
      handleSubmit(handleSubmit);
    },
  });
  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <fieldset disabled={loading} aria-busy={loading}>
          <FormItem touched={formik.touched.title} errors={formik.errors.title}>
            <label htmlFor="title">
              Title
              <input
                id="title"
                type="text"
                placeholder={formik.values.title}
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </label>
          </FormItem>
          <FormItem
            touched={formik.touched.description}
            errors={formik.errors.description}
          >
            <label htmlFor="description">
              Description
              <textarea
                id="description"
                placeholder={formik.values.description}
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </label>
          </FormItem>
          <FormItem touched={formik.touched.image} errors={formik.errors.image}>
            <label htmlFor="image">
              Image
              <input
                id="image"
                type="text"
                placeholder={formik.values.image}
                onChange={formik.handleChange}
                value={formik.values.image}
              />
            </label>
          </FormItem>
          <FormItem
            touched={formik.touched.imageLarge}
            errors={formik.errors.imageLarge}
          >
            <label htmlFor="imageLarge">
              Large Image
              <input
                id="imageLarge"
                type="text"
                placeholder={formik.values.imageLarge}
                onChange={formik.handleChange}
                value={formik.values.imageLarge}
              />
            </label>
          </FormItem>
          <FormItem touched={formik.touched.price} errors={formik.errors.price}>
            <label htmlFor="price">
              Price
              <input
                id="price"
                type="number"
                placeholder={formik.values.price}
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </label>
          </FormItem>

          <SubmitForm errors={formik.errors}>
            <button
              type="submit"
              disabled={!formik.dirty || formik.isSubmitting}
              onClick={formik.handleSubmit}
            >
              Add Item
            </button>
          </SubmitForm>

          <Divider />
        </fieldset>
      </Form>
    </FormWrapper>
  );
}

CreateItemForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
