import React from 'react';

const CheckList = ({lists}) => {
    
    
    return (
        <div className=" border-t border-gray-200 my-5">
            <h3 className="text-[17px] font-semibold my-5">{lists.title}</h3>
            {/* check list */}
            {
                lists.items.map((list,i) => (
                    <li key={i} className="list-none text-[#898989] flex gap-2">
                        <input type="checkbox" name="tools" id="" className="text-[#898989]" />
                        <label htmlFor="tools" className="text-[#898989]">{list.title}</label>
                    </li>
                ))
            
            }
          
        </div>
    );
};

export default CheckList;