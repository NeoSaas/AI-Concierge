import React from 'react'
import { Checkbox, Label } from 'flowbite-react';

const ActivityCard = (props) => {
  return (
    <div>
      {/* <label for={props.id} class="checkbox-label rounded-md bg-slate-50 shadow-blue-300 text-black shadow-lg w-[220px] h-[200px] m-4 hover:scale-105 duration-300 ease-in-out flex text-3xl justify-center items-center">        
        <input type="checkbox" id={props.id} value={props.activity} class="hidden peer " required=""></input>
                           
            <div class="block">

                <div class="w-full text-lg font-semibold">{props.activity}</div>
                
            </div>
        </label> */}
        <label
        htmlFor={props.id}
        className={`checkbox-label rounded-md bg-slate-50 shadow-blue-300 text-black shadow-lg w-[220px] h-[200px] m-4 hover:scale-105 duration-300 ease-in-out flex text-3xl justify-center items-center ${
          props.isSelected ? 'bg-blue-200' : ''
        }`}
      >
        <input
          type='checkbox'
          id={props.id}
          value={props.activity}
          className='hidden peer'
          required=''
          checked={props.isSelected}
          onChange={props.onSelect}
        />
        <div className='block'>
          <div className='w-full text-xl font-semibold px-5'>{props.activity}</div>
        </div>
      </label>

    </div>
  )
}

export default ActivityCard