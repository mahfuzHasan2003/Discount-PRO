const BrandOnSaleCard = ({ brand }) => {
   const { brand_logo, brand_name, category } = brand;
   return (
      <div className='border p-5 rounded-sm'>
         <img
            src={brand_logo}
            alt={brand_name}
            className='h-32 object-contain'
         />
         <h3 className='font-semibold text-lg'>{brand_name}</h3>
         <p>Total Coupons: 1</p>
         <button className='bg-gray-200 px-1 py-px rounded-full text-xs text-gray-700 font-medium border border-gray-400'>
            {category}
         </button>
      </div>
   );
};

export default BrandOnSaleCard;
