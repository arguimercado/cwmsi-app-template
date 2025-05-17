import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import GridLayout from "~/components/commons/containers/GridLayout";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { FiPlus, FiTrash2 } from "react-icons/fi"; // Add react-icons for icons

type FormRequest = {
   name: string;
   email: string;
   products: {
      name: string;
      quantity: number;
      price: number;
   }[];
};

const FormRequestPage = () => {
   const {
      register,
      formState: { errors },
      control,
      handleSubmit,
      reset,
   } = useForm<FormRequest>({
      defaultValues: {
         products: [{ name: "", quantity: 0, price: 0 }],
      },
   });

   const { fields, append, remove } = useFieldArray({
      name: "products",
      control,
   });

   const onSubmit = (data: FormRequest) => {
      toast("Request created successfully!", {
         description: "Your request has been submitted and is being processed.",
      });
      console.log(data);
      reset();
   };

   const handleAddProduct = () => {
      append({
         name: "",
         quantity: 0,
         price: 0,
      });
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-8">
         <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
               Create Product Request
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
               {/* User Info */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block mb-1 font-medium text-gray-700">
                        Name
                     </label>
                     <Input
                        {...register("name", {
                           required: "Name is required",
                        })}
                        placeholder="Enter your name"
                        className={`border ${
                           errors.name ? "border-red-500" : "border-gray-300"
                        } p-3 rounded-lg w-full`}
                     />
                     {errors.name && (
                        <span className="text-xs text-red-500 mt-1">
                           {errors.name.message as string}
                        </span>
                     )}
                  </div>
                  <div>
                     <label className="block mb-1 font-medium text-gray-700">
                        Email
                     </label>
                     <Input
                        {...register("email", {
                           required: "Email is required",
                        })}
                        placeholder="Enter your email"
                        className={`border ${
                           errors.email ? "border-red-500" : "border-gray-300"
                        } p-3 rounded-lg w-full`}
                     />
                     {errors.email && (
                        <span className="text-xs text-red-500 mt-1">
                           {errors.email.message as string}
                        </span>
                     )}
                  </div>
               </div>

               {/* Products Section */}
               <div>
                  <div className="flex items-center justify-between mb-2">
                     <h3 className="text-lg font-semibold text-blue-600">
                        Products
                     </h3>
                     <Button
                        type="button"
                        onClick={handleAddProduct}
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
                     >
                        <FiPlus /> Add Product
                     </Button>
                  </div>
                  <div className="space-y-6">
                     {fields.map((item, index) => (
                        <div
                           key={item.id}
                           className="relative bg-blue-50 border border-blue-200 rounded-xl shadow p-6"
                        >
                           <GridLayout columns={3} className="gap-4">
                              <div>
                                 <label className="block mb-1 text-gray-700 font-medium">
                                    Product Name
                                 </label>
                                 <Input
                                    {...register(`products.${index}.name`, {
                                       required: "Product name is required",
                                    })}
                                    placeholder="Product Name"
                                    className={`border ${
                                       errors.products?.[index]?.name
                                          ? "border-red-500"
                                          : "border-gray-300"
                                    } p-2 rounded-lg w-full`}
                                 />
                                 {errors.products?.[index]?.name && (
                                    <span className="text-xs text-red-500 mt-1">
                                       {errors.products[index]?.name?.message as string}
                                    </span>
                                 )}
                              </div>
                              <div>
                                 <label className="block mb-1 text-gray-700 font-medium">
                                    Quantity
                                 </label>
                                 <Input
                                    type="number"
                                    min={1}
                                    {...register(`products.${index}.quantity`, {
                                       required: "Quantity is required",
                                       valueAsNumber: true,
                                       min: { value: 1, message: "Min 1" },
                                    })}
                                    placeholder="Quantity"
                                    className={`border ${
                                       errors.products?.[index]?.quantity
                                          ? "border-red-500"
                                          : "border-gray-300"
                                    } p-2 rounded-lg w-full`}
                                 />
                                 {errors.products?.[index]?.quantity && (
                                    <span className="text-xs text-red-500 mt-1">
                                       {errors.products[index]?.quantity?.message as string}
                                    </span>
                                 )}
                              </div>
                              <div>
                                 <label className="block mb-1 text-gray-700 font-medium">
                                    Price
                                 </label>
                                 <Input
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    {...register(`products.${index}.price`, {
                                       required: "Price is required",
                                       valueAsNumber: true,
                                       min: { value: 0, message: "Min 0" },
                                    })}
                                    placeholder="Price"
                                    className={`border ${
                                       errors.products?.[index]?.price
                                          ? "border-red-500"
                                          : "border-gray-300"
                                    } p-2 rounded-lg w-full`}
                                 />
                                 {errors.products?.[index]?.price && (
                                    <span className="text-xs text-red-500 mt-1">
                                       {errors.products[index]?.price?.message as string}
                                    </span>
                                 )}
                              </div>
                           </GridLayout>
                           {fields.length > 1 && (
                              <button
                                 type="button"
                                 onClick={() => remove(index)}
                                 className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                                 title="Remove product"
                              >
                                 <FiTrash2 size={20} />
                              </button>
                           )}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Submit Button */}
               <div className="flex justify-center">
                  <Button
                     type="submit"
                     className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
                  >
                     Create Request
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default FormRequestPage;
