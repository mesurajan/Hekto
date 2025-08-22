import React from 'react'
import AppBreadcrumbs from "../components/Breadcrumbs";

function Blogs() {
  return (
    <div className='container bg-white'>

      {/* Header */}
      <div className='bg-backgroundlite py-6 md:py-10'>
        <header>
          <h1 className='px-4 text-3xl font-bold'>Our Blogs</h1>
        </header>
      <AppBreadcrumbs />
      </div>

      {/* Body starts */}
      <div className='flex flex-row items-center justify-center'>
        <div>
          1
        </div>
        <div>
          2
        </div>

      </div>

        
    </div>
  )
}

export default Blogs