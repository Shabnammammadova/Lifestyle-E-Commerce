// "use client"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { useRef } from "react"
// import { toast } from "sonner"
// import { createProduct } from "../actions/product"

// import Image from "next/image"
// import { UploadButton } from "@/src/utils/uploadthing"



// const formSchema = z.object({
//   name: z.string().min(2),
//   price:z.number().positive(),
//   imageUrl:z.string().url("Please upload an image")
// });

// export function CreateCategoryDialog(): React.ReactElement {
//   const cancelButtonRef = useRef<HTMLButtonElement>(null);
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       price:0,
//       imageUrl:''
//     },
//   });

//   async function onSubmit(data: z.infer<typeof formSchema>) {
//     const promise = createProduct(data).then(() => {
//       form.reset();
//       cancelButtonRef.current?.click();
//     });
//     toast.promise(promise, {
//       loading: 'Creating category...',
//       success: 'Category created successfully',
//       error: 'Failed to create category',
//     });
//   }


//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Add Product</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle className="text-white">Create Product</DialogTitle>
//         </DialogHeader>
//         <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem className="text-white">
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="type" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//            <FormField
//           control={form.control}
//           name="price"
//           render={({ field }) => (
//             <FormItem className="text-white">
//               <FormLabel>Price</FormLabel>
//               <FormControl>
//               <Input placeholder="type..." type='number' {...field} onChange={(e)=>{
//                   field.onChange({target:{value:parseFloat(e.target.value)}})
//                 }}/>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="imageUrl"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Product Image</FormLabel>
//               {field.value? (
//              <>
//               <Image src={field.value} width={100} height={100} alt='Product'/>
//               <button onClick={()=>field.onChange({target:{value:""}})}>x</button></>
//                ) :(
//              <UploadButton
//         endpoint="imageUploader"
//         onClientUploadComplete={(res) => {
//           const {url} =res[0]
//           console.log(res);
//           field.onChange({target:{value:url}})
//         }}
//       />
//   )}
//       <FormMessage/>
//             </FormItem>
            
//           )}
//         />
//         <DialogClose asChild>
//           <Button type='button' ref={cancelButtonRef} variant="secondary" className='mr-2'>Close</Button>
//         </DialogClose>
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//       </DialogContent>
//     </Dialog>
//   )
// }

"use client"
import React, { useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"


import MuiButton from '@mui/material/Button'
import { Button } from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { useForm } from 'react-hook-form'

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { DialogClose } from '@radix-ui/react-dialog'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Category } from '@prisma/client'
import { UploadButton } from '@/src/utils/uploadthing'
import Image from 'next/image'
import { createProduct } from '../actions/product'

const FormSchema = z.object({
  name:z.string().min(2),
  price:z.number({message:"Price must be a number"}).positive(),
  categoryId:z.string().min(2,{message:"Category is required"}),
  imageUrl:z.string().url("Please upload an image")
})
export function CreateProductDialog({categories}:{categories:Category[]}):React.ReactElement {
    const cancelButtonRef = useRef<HTMLButtonElement>(null);
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        name: "",
        price:0,
        imageUrl:"",
        categoryId:""
      },
    })
  
    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log(data);
      
      const promise = createProduct(data).then(()=>{
        form.reset()
        cancelButtonRef.current?.click()
      })
      toast.promise(promise,{
        loading:"Creating product...",
        success:"Product created succesfully",
        error:"Failed to create product"
      });
     
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <MuiButton variant="contained">
            Add
          </MuiButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="type..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
         <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Price</FormLabel>
              <FormControl>
                <Input placeholder="type..." type='number' {...field} onChange={(e)=>{
                  field.onChange({target:{value:parseFloat(e.target.value)}})
                }}/>
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category)=>(
                    <SelectItem value={category.id} key={category.id}>{category.name}</SelectItem>
                  ))}
                  
               
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Image</FormLabel>
              {field.value? (
             <>
              <Image src={field.value} width={100} height={100} alt='Product'/>
              <button onClick={()=>field.onChange({target:{value:""}})}>x</button></>
               ) :(
             <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const {url} =res[0]
          console.log(res);
          field.onChange({target:{value:url}})
        }}
      />
  )}
      <FormMessage/>
            </FormItem>
            
          )}
        />
        
        
        <DialogClose asChild>
          <Button type='button' ref={cancelButtonRef} variant="secondary" className='mr-2'>Close</Button>
        </DialogClose>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
     
      </DialogContent>
    </Dialog>
  )
}
