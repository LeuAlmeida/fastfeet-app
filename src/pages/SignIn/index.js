import React, { useRef, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/mobile';

import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';
import colors from '~/styles/colors';

import { Container, Input, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);

  const [deliverymanId, setDeliverymanId] = useState('null');

  function handleSubmit({ reset }) {
    dispatch(signInRequest(deliverymanId));
    reset();
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} />
      <Image source={logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="id"
          keyboardType="number-pad"
          placeholder="Informe seu ID no cadastro"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
          onChangeText={setDeliverymanId}
        />
        <SubmitButton
          loading={loading}
          onPress={() => formRef.current.submitForm()}
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
