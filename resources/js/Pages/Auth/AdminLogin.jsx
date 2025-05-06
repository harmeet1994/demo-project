import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import loginbg from '../../../../public/assets/img/auth/login.jpeg'
import { useState } from 'react';
import axios from 'axios';

export default function AdminLogin({ status, canResetPassword }) {
  const [rememberMe, setRememberMe] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    axios.post(route('admin.login.store'), data)
      .then((response) => {
        if (response.data === "ok") {
          window.location.href = route('admin.dashboard');
        } else {
          alert('Login failed');
        }
      })
      .catch(error => {
        if (error.response) {
          alert('These credentials do not match our records.');
          // Handle validation errors if needed
          setErrors(error.response.data.errors);
        }
      });
  };

  return (
    <GuestLayout>
      <Head title="Admin Login" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">
          {status}
        </div>
      )}

      <div className='flex min-h-[90vh] px-4 items-center'>
        <div className='w-1/2 hidden md:block'>
          <img src={loginbg} alt="" className='object-cover h-[80vh] rounded-lg' />
        </div>
        <div className="md:w-1/2">
          <div className="md:w-2/3 mx-auto space-y-4">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">Admin Login<span className="inline-block animate-pulse">🔐</span></h1>
              <p className="text-xl text-gray-700">
                Secure portal for administrative access only
              </p>
            </div>
            <br />

            {/* Display any error message */}
            {typeof errors.error === 'string' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{errors.error}</span>
              </div>
            )}

            <form onSubmit={submit} className='space-y-6 '>
              <div className='mt-10'>
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full p-2"
                  autoComplete="username"
                  isFocused={true}
                  onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full p-2"
                  autoComplete="current-password"
                  onChange={(e) => setData('password', e.target.value)}
                />

                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="-mt-4 block">
                <label className="flex items-center">
                  <Checkbox
                    name="remember"
                    checked={data.remember}
                    onChange={(e) =>
                      setData('remember', e.target.checked)
                    }
                  />
                  <span className="ms-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-center">
                <PrimaryButton className="bg-[#2563EB] px-12 w-full py-2 text-center" disabled={processing}>
                  Admin Login
                </PrimaryButton>
              </div>

              <div className="text-center mt-4">
                <Link href={route('login')} className="text-sm text-gray-600 underline hover:text-gray-900">
                  Return to regular login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
