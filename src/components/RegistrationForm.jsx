import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { registrationSchema } from '../utils/registrationSchema';
import InputField from './InputField';
import '../App.css';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="registration-wrapper">
      <div className="form-container">
        <h2 className="form-title">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField label="Username" name="username" register={register} error={errors.username} />
          <InputField label="Email" name="email" register={register} error={errors.email} />
          <InputField label="Password" name="password" type="password" register={register} error={errors.password} />
          <InputField label="Confirm Password" name="confirmPassword" type="password" register={register} error={errors.confirmPassword} />
          <button type="submit" disabled={!isValid} className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;