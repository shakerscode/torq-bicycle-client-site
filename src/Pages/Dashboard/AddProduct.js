import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('https://safe-waters-55642.herokuapp.com/product',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res =>
            res.json()
        ).then(result => {
            console.log(data);
            if(result){
                reset()
                toast.success('Successfully added your review')
            }
        })
    
}

    return (
        <div className='md:w-3/6 lg:3/6 w-5/6 mx-auto my-10'>
            <h2 className='text-center lg:text-3xl md:text-xl font-semibold'>Add Your Products</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text text-secondary">Product Name</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter product name'
                    {...register("name", {
                        required: {
                            value: true,
                            message:"Name url is required"
                        }
                    })}
                />
                <label className="label">
                    {errors?.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-secondary">Product Image Url</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your product photo url'
                    {...register("image",{
                        required: {
                            value: true,
                            message:" Image url is required"
                        }
                    })}
                />
                <label className="label">
                    {errors?.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-secondary">Available Quantity</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="number"
                    placeholder='Enter your available quantity'
                    {...register("availableQuantity", {
                        required: {
                            value: true,
                            message: 'Available quantity is required'
                        }
                    })}
                />
                <label className="label">
                    {errors?.availableQuantity?.type === 'required' && <span className="label-text-alt text-error">{errors.availableQuantity.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text text-secondary">Min. Order</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="number"
                    placeholder='Enter minimum order quantity'
                    {...register("minOrder", {
                        required: {
                            value: true,
                            message: "Minimum order is required"
                        }
                    })}
                />
                <label className="label">
                    {errors.minOrder?.type === 'required' && <span className="label-text-alt text-error">{errors.minOrder.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text text-secondary">Price Per Pice</span>
                </label>
                <input
                    className='input input-bordered input-primary w-full'
                    type="number"
                    placeholder='Enter your product price'
                    {...register("price", {
                        required: {
                            value: true,
                            message: "Price is required"
                        }
                    })}
                />
                <label className="label">
                    {errors?.price?.type === 'required' && <span className="label-text-alt text-error">{errors.price.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text text-secondary">Product Description</span>
                </label>
                <textarea
                    className='input input-bordered input-primary w-full'
                    type="text"
                    placeholder='Enter your product description'
                    {...register("shortDesc", {
                        required: {
                            value: true,
                            message: "Product description is required"
                        }
                    })}
                />
                <label className="label">
                    {errors.shortDesc?.type === 'required' && <span className="label-text-alt text-error">{errors.shortDesc.message}</span>}
                </label>



                <input className='btn btn-secondary w-full text-white mb-7 block' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;