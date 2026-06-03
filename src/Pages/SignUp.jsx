import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoUrl)
                    .then(() => {
                        console.log('info updated');
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error));
                reset();
            })

    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" className="input" placeholder="Name" />
                            {errors.name && <span>This field is required</span>}

                            <label className="label">PhotoUrl</label>
                            <input type="text" {...register("PhotoUrl", { required: true })} name="PhotoUrl" className="input" placeholder="PhotoUrl" />
                            {errors.PhotoUrl && <span>PhotoUrl is required</span>}

                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} name="email" className="input" placeholder="Email" />
                            {errors.email && <span>This field is required</span>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" className="input" placeholder="Password" />
                            {errors.password && <span>This field is required</span>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <input className="btn btn-neutral w-full" type="Submit" value="Sign Up" />
                            </div>
                        </fieldset>
                    </form>
                    <p><small>Already have an account? <Link to="/login">Login</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;