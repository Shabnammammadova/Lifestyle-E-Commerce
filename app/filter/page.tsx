
import {
  Dialog as HeadlessUIDialog, //first Dialog import
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import prisma from '@/lib/db'
import { Pencil, Trash } from 'lucide-react'
import { CreateProductDialog } from '../categories/create-product'
import { SortOrder } from '@/src/types'
import qs from 'query-string'
import path from 'path'
import { useRouter, useSearchParams } from 'next/navigation'




const sortOptions = [
  { name: 'Newest',slug:SortOrder.DATE_DESC},
  { name: 'Price: Low to High', slug:SortOrder.PRICE_ASC},
  { name: 'Price: High to Low', slug:SortOrder.PRICE_DESC},
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'sunglasses', label: 'Sunglasses', checked: false },
      { value: 'shoes', label: 'Shoes', checked: false },
      { value: 'bag', label: 'Bag', checked: true },
      { value: 'blazer', label: 'Blazer', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Choose Size',
    options: [
      { value: '2l', label: 'Narrow', checked: false },
      { value: '6l', label: 'Extra Narrow', checked: false },
      { value: '12l', label: 'Medium', checked: false },
      { value: '18l', label: 'Wide', checked: false },
      { value: '20l', label: 'Extra Wide', checked: false },
    ],
  },
]





function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}


// function handleSortChance(sortOrder:SortOrder){
//    const query = {
//     sort:sortOrder
//    }
//    const url =qs.stringifyUrl({
//     url:path.page,
//     query
//    })
//    router.push(url)
// }
// console.log(handleSortChance);

// const router = useRouter()
// const searchParams = useSearchParams()
// const sortOrder = searchParams.get('sort');
// const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder | null>(sortOrder as SortOrder);
// console.log(searchParams.get('sort'));

export default async function Products() {
  const productsPromise= await prisma.product.findMany({
    include:{
      category:{
       select:{
        name:true
       }
      }
    }
  })
  
const [products,categories]=await Promise.all([productsPromise,prisma.category.findMany()])
  console.log(products);
  
  
  
  return (
    <div className="bg-white font-serif mt-5">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Shop</h1>

            <div className="flex items-center gap-5">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        {/* <button
                          onClick={()=>handleSortChance(option.slug)}
                          className={classNames(
                            option.current ? 'w-full font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                          )}
                        >
                          {option.name}
                        </button> */}
                        <button>{option.name}</button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

   <CreateProductDialog categories={categories}/>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
<section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
  {products.map((product) => (
 <Link key={product.id} href={`/filter/product/${product.id}`}>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500">
        <div className='bg-[#F3E6DA] h-[300px] flex items-center justify-center'>
          <Image src={product.imageUrl} alt='img' width={200} height={150} className='pt-10 pb-10 text-center flex items-center justify-center' />
        </div>
        <div className="px-4 py-3 w-72 flex flex-col gap-2  bg-[#F3E6DA]">
        <p className="text-lg text-black truncate block capitalize"><b>Category:</b>{product.category.name}</p>
          <p className="text-lg  text-black truncate block capitalize"><b>Name:</b>{product.name}</p>
          <p className="text-lg  text-black cursor-auto "><b>Price:</b>${product.price}</p>
        </div>
        <div className='px-4 py-1 w-72 flex items-center gap-2 bg-[#F3E6DA]'>
          <Button className='bg-black hover:bg-green-600'><Link href="/edit"><Pencil /></Link></Button>
          <Button className='bg-black hover:bg-red-600'><Trash/></Button>
        </div>
      </div>
    </Link>
  ))}
</section>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
