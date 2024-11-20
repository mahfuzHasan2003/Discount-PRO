import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import NavBar from "../components/NavBar";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ header, ...rest }) => (
   <Item
      {...rest}
      header={({ state: { isEnter } }) => (
         <>
            {header}
            <IoIosArrowDown
               className={`ml-auto transition-transform duration-200 ease-out ${
                  isEnter && "rotate-180"
               }`}
            />
         </>
      )}
      className='border-b'
      buttonProps={{
         className: ({ isEnter }) =>
            `flex w-full p-4 text-left hover:bg-gray-100 ${
               isEnter && "font-bold"
            }`,
      }}
      contentProps={{
         className:
            "transition-height duration-200 ease-out bg-gray-500 text-white",
      }}
      panelProps={{ className: "p-4" }}
   />
);
const FAQPage = () => {
   const faqData = useLoaderData();
   return (
      <div>
         <NavBar />
         <Accordion className='w-11/12 max-w-7xl mx-auto mt-10'>
            {faqData.map((singleFAQ) => (
               <AccordionItem key={singleFAQ.id} header={singleFAQ.question}>
                  {singleFAQ.answer}
               </AccordionItem>
            ))}
         </Accordion>
      </div>
   );
};

export default FAQPage;
