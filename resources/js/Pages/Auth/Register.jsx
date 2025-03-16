import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import loginbg from '../../../../public/assets/img/auth/login.jpeg'
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        mobile: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
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
                        <div className="space-y-4 mb-10">
                            <h1 className="text-5xl font-bold tracking-tight">Join us today <span className="inline-block animate-pulse">👋</span></h1>
                            <p className="text-xl text-gray-700">
                                Over 20,000+ students placed in more than 200 top companies
                            </p>
                        </div>
                        <form onSubmit={submit} className='space-y-10'>
                            <div className='space-y-2'>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="mt-4 space-y-2">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4 space-y-2">
                                <InputLabel htmlFor="mobile" value="Mobile" />

                                <TextInput
                                    id="mobile"
                                    type="number"
                                    name="mobile"
                                    value={data.mobile}
                                    className="mt-1 block w-full"
                                    autoComplete="mobile"
                                    onChange={(e) => setData('mobile', e.target.value)}
                                    required
                                />

                                <InputError message={errors.mobile} className="mt-2" />
                            </div>

                            <div className="mt-4 space-y-2">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4 space-y-2">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-end">
                                <Link
                                    href={route('login')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </GuestLayout>
    );
}
