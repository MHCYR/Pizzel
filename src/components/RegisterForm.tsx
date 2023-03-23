import { useState } from 'react';
import Button from './Button';
import Input from './Input';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-stone-500 max-w-md p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-5">Register</h1>
      <Input
        id="username"
        label="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="my-2"
      />
      <Input className="my-2" id="email" label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <Input
        className="my-2"
        id="password"
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Input
        className="my-2"
        id="confirmPassword"
        label="Confirm password"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <Button type="submit" className="bg-gray-800 hover:bg-gray-600 text-white">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
