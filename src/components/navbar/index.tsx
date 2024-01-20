const Navbar = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='bg-navbar-bg-mobile flex w-full h-36 bg-no-repeat bg-cover lg:hidden' />
      <div className='hidden lg:block w-[400px] p-10 bg-navbar-bg-desktop bg-no-repeat bg-cover rounded-3xl'></div>
    </div>
  )
}

export default Navbar;