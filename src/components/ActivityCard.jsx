import React, { useCallback } from 'react';
import { Checkbox, Label } from 'flowbite-react';
import { useAppContext } from '../AppContext';

const ActivityCard = ({ id, activity, isSelected, showSubOptions, selectedDict, setSelectedDict, onSelect, handleToSub}) => {
  const handleOptions = useCallback(() => {
    if (!showSubOptions && selectedDict.main <= 3) {
      if (!isSelected && selectedDict.main < 3) {
        setSelectedDict((prevDict) => ({ ...prevDict, main: prevDict.main + 1 }));
      } else if (selectedDict.main <= 3 && isSelected && selectedDict.main > 0) {
        setSelectedDict((prevDict) => ({ ...prevDict, main: prevDict.main - 1 }));
      }
    } else if (selectedDict.main <= 3 && showSubOptions) {
      if (!isSelected && selectedDict.sub < 3) {
        setSelectedDict((prevDict) => ({ ...prevDict, sub: prevDict.sub + 1 }));
      } else if (selectedDict.sub <= 3 && isSelected && selectedDict.sub > 0) {
        setSelectedDict((prevDict) => ({ ...prevDict, sub: prevDict.sub - 1 }));
      }
    }
    onSelect();
  }, [showSubOptions, selectedDict, isSelected, setSelectedDict, onSelect]);

  return (
    <div>
      <label
        htmlFor={id}
        className={`checkbox-label rounded-md bg-slate-50 text-black shadow-md shadow-[#5C0601] w-[220px] h-[200px] m-4 ease-in-out flex text-3xl justify-center items-center ${isSelected ? '' : ''}`}
      >
        <input
          type='checkbox'
          id={id}
          value={activity}
          className='hidden peer'
          required=''
          checked={isSelected}
          onChange={handleOptions}
        />
        <div className='block'>
          <div className='w-full text-xl font-semibold px-5'>{activity}</div>
        </div>
      </label>
    </div>
  );
};

export default ActivityCard;
