const SingleBrand = ({ brand }) => {
   const { brand_name, brand_logo, _id, rating, description, isSaleOn } = brand;

   return <div className='p-5 border rounded-sm'>{brand_name}</div>;
};

export default SingleBrand;
