/**
 * Page component displaying the wine collection and cart summary.
 * @returns {JSX.Element} The rendered home page.
 */
export default async function Home() {
  return (
    <div className='min-h-screen'>
      <header className='flex justify-between items-center mb-8 border-b pb-4'>
        <h1 className='text-3xl font-bold text-gray-900'>Wine Collection</h1>

        <div className='bg-white p-4 border rounded shadow-sm'>
          Cart: 0 items ($0.00)
        </div>
      </header>

      <section>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          Empty product list.
        </div>
      </section>
    </div>
  );
}
