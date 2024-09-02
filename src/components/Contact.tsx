"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SolidButton from "./SolidButton";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";
import { sendContactForm } from "@/app/contact/actions";

//scheme using zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({
    message: "Invalid email address.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendContactForm(data);

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Message sent successfully.",
          variant: "default",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-8 mx-8">
      <div className="flex justify-center">
        <h1 className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-[#F2A615] from-[#F65B36] font-bold text-2xl md:text-3xl underline decoration-8 decoration-[#314933] underline-offset-4">
          Contact Me
        </h1>
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:justify-center">
        <div className="bg-[#314933] md:h-[220px] h-auto md:w-[30%] md:self-center rounded-lg flex items-center z-10">
          <div className="mx-auto text-center py-6 md:py-0">
            <div className="flex flex-col gap-2 items-start md:items-start">
              <div className="flex items-center gap-2">
                <IoIosMail className="text-[#F2A615]" />
                <p className="text-[#F2A615] text-sm">talndetei567@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#F2A615]" />
                <p className="text-[#F2A615] text-sm">+254 748 790 210</p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-[#F2A615]" />
                <p className="text-[#F2A615] text-sm">Nairobi, Kenya.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] rounded-lg h-[550px] md:h-[450px] md:-translate-x-20 ">
          <div className="flex justify-center">
            <h1 className="text-[#314933] font-bold text-xl mt-8">
              Send a Message
            </h1>
          </div>
          <div className="flex flex-col items-center mx-8 md:mx-20 mt-8 px-6 md:px-10">
            <form
              className="w-full"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex flex-col">
                  <label className="text-[0.65rem] mb-1 text-[#314933]">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`h-[40px] rounded-sm border-2 border-[#314933] px-2 ${
                      errors.firstName && "border-red-500"
                    }`}
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-[0.65rem] mb-1 text-[#314933]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`h-[40px] rounded-sm border-2 border-[#314933] px-2 ${
                      errors.lastName && "border-red-500"
                    }`}
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="text-[0.65rem] mb-1 text-[#314933]">
                  Email
                </label>
                <input
                  type="email"
                  className={`h-[40px] rounded-sm border-2 border-[#314933] px-2 ${
                    errors.email && "border-red-500"
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-[0.65rem] mb-1 text-[#314933]">
                  Message
                </label>
                <textarea
                  className={`h-[80px] rounded-sm border-2 border-[#314933] px-2 ${
                    errors.message && "border-red-500"
                  }`}
                  {...register("message")}
                ></textarea>

                {errors.message && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <div className="flex justify-center mt-6">
              <button
                  className={`${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  } px-6 py-2 rounded-sm font-medium bg-[#F65B36] text-[#EDE5D8] w-fit transition-all shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
