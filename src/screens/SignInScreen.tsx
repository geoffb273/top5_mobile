import { Button, TextInput } from 'react-native';
import { DefaultLayout } from '../layout/DefaultLayout';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

type Step = 'start' | 'code_sent' | 'login_attempted';

export const SignInScreen = () => {
  const [step, setStep] = useState<Step>('start');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const { loggedInUser, login, logout, sendCode, status } = useAuthContext();

  const title = (() => {
    switch (step) {
      case 'start':
        return 'Send code';
      case 'code_sent':
        return 'Log in';
      case 'login_attempted':
        return 'Resend code';
    }
  })();

  const onPress = async () => {
    switch (step) {
      case 'start':
        await sendCode(email).catch(err => console.log(err));
        setStep('code_sent');
        break;
      case 'code_sent':
        break;
      case 'login_attempted':
        break;
    }
  };

  return (
    <DefaultLayout>
      <TextInput value={email} onChangeText={text => setEmail(text)} />
      {step != 'start' && <TextInput value={code} onChangeText={setCode} />}
      <Button title={title} onPress={onPress} />
    </DefaultLayout>
  );
};
