import React from 'react'
import { Checkbox, Label } from 'flowbite-react';

const ActivityCard = (props) => {

  const handleOptions = () => {
    if(!props.showSubOptions && props.selectedDict.main <= 3)
    {
      if(!props.isSelected && props.selectedDict.main < 3){
        props.setSelectedDict({...props.selectedDict, "main": props.selectedDict.main + 1})
      }else if(props.selectedDict.main <= 3 && props.isSelected && props.selectedDict.main > 0){
        props.setSelectedDict({...props.selectedDict, "main": props.selectedDict.main - 1})
      }
    }
    else if(props.selectedDict.main <= 3 && props.showSubOptions){
      if(!props.isSelected && props.selectedDict.sub < 3){
        props.setSelectedDict({...props.selectedDict, "sub": props.selectedDict.sub + 1})
      }else if(props.selectedDict.sub <= 3 && props.isSelected && props.selectedDict.sub > 0){
        props.setSelectedDict({...props.selectedDict, "sub": props.selectedDict.sub - 1})
      }
    }
    props.onSelect();
    
  }

  return (
    <div>
        <label
        htmlFor={props.id}
        className={`checkbox-label rounded-md bg-slate-50 shadow-blue-400 text-black shadow-lg w-[220px] h-[200px] m-4 hover:scale-105 duration-300 ease-in-out flex text-3xl justify-center items-center ${
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
          onChange={() => handleOptions()}
        />
        <div className='block'>
          <div className='w-full text-xl font-semibold px-5'>{props.activity}</div>
        </div>
      </label>

    </div>
  )
}

export default ActivityCard;