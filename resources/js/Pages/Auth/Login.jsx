import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import loginbg from '../../../../public/assets/img/auth/login.jpeg'
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {
    const [rememberMe, setRememberMe] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

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
                            <h1 className="text-5xl font-bold tracking-tight">Login<span className="inline-block animate-pulse">👋</span></h1>
                            <p className="text-xl text-gray-700">
                                Over 20,000+ students placed in more than 200 top companies
                            </p>
                        </div>
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

                            <div className="flex items-center ">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="rounded-md text-sm hidden text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <PrimaryButton className="bg-[#2563EB] px-12" disabled={processing}>
                                    Log in
                                </PrimaryButton>

                            </div>
                            <p>Don't have an account? <a href="/register" className='text-blue-500'>Create free account</a></p>
                        </form>
                    </div>
                </div>
            </div>


        </GuestLayout>
    );
}
