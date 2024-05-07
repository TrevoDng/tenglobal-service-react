import React, { useState } from "react";
import { useForm } from "react-hook-form";

//get data after form submit
function FormDataFunction() {
    const [data, setData] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <input {...register('firstName')} />
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input {...register('age', {pattern: /\d+/ })} />
            {errors.lastName && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
    )
}

let formData = true;
async function asyncFunction() {
  return await Promise.resolve(formData);
}

const wiatingData = asyncFunction();
    wiatingData.then(res => console.log(res));
