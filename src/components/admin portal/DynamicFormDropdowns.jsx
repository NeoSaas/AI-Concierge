import React from 'react'
import { typeOptions, subTypeOptions, dietaryOptions, 
    groupSizeOptions, promoOptions, specialOptions, 
    awardOptions, budgetOptions, atmosphereOptions, 
    restaurantTypeOptions} from './arrays/Arrays';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from "react-icons/fa";
import { Field } from 'formik';

export const DynamicFormDropdowns = ({ values }) => {
  
  return (
    <div>
        {(() => {
            switch (values.business_type_tag1) {
                case 'Restaurant':
                    return (
                        <div>
                            <label htmlFor="business_restaurant_sub_tag1" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag1" id="business_restaurant_sub_tag1" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                            <label htmlFor="business_restaurant_sub_tag2" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Dietary Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag2" id="business_restaurant_sub_tag2" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {dietaryOptions.map(option => (
                                <option key={option.label} value={option.value}>
                                    {option.value}
                                </option>
                                ))}
                            </Field>
                            <label htmlFor="business_restaurant_sub_tag3" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Atmosphere Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag3" id="business_restaurant_sub_tag3" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {atmosphereOptions.map(option => (
                                <option key={option.label} value={option.value}>
                                    {option.value}
                                </option>
                                ))}
                            </Field>
                            <label htmlFor="business_restaurant_sub_tag4" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Special Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag4" id="business_restaurant_sub_tag4" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {specialOptions.map(option => (
                                <option key={option.label} value={option.value}>
                                    {option.value}
                                </option>
                                ))}
                            </Field>
                            <label htmlFor="business_restaurant_sub_tag5" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Award Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag5" id="business_restaurant_sub_tag5" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {awardOptions.map(option => (
                                <option key={option.label} value={option.value}>
                                    {option.value}
                                </option>
                                ))}
                            </Field>
                            <label htmlFor="business_restaurant_sub_tag6" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Type Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag6" id="business_restaurant_sub_tag6" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {restaurantTypeOptions.map(option => (
                                <option key={option.label} value={option.value}>
                                    {option.value}
                                </option>
                                ))}
                            </Field>
                            <label htmlFor="business_restaurant_sub_tag7" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Type Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="business_restaurant_sub_tag7" id="business_restaurant_sub_tag7" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {restaurantTypeOptions.map(option => (
                                <option key={option.label} value={option.value}>
                                    {option.value}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Art Gallery':
                    return (
                        <div>
                        <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                        <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                            <option value="">Select...</option>
                            {subTypeOptions[values.business_type_tag1].map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </Field>
                    </div>
                    );
                case 'Attraction':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'City Sightseeing Tour/Historical Sites Tour':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Entertainment/Theater/Plays/Movies':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Evening/Night Life':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Food Tasting Tour':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Museums / Museum Tours':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Outdoor Adventures':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Shopping':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Spa/Fitness/Salons':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Wine Tasting Tour':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Wine':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Specialty Food Shops':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Cultural Experiences':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Hair and Beauty Salons':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Local Markets':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                case 'Historical/Cultural Walking Tour':
                    return (
                        <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag1}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag1].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                    );
                // Add more cases for other options
                default:
                    return null; // Render nothing if no option is selected or unknown option
            }
        })()}
    </div>
  )
}

export const DynamicFormDropdowns2 = ({ values }) => {
  
    return (
      <div>
          {(() => {
              switch (values.business_type_tag2) {
                  case 'Restaurant':
                      return (
                          <div>
                              <label htmlFor="business_restaurant_sub_tag1" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag1" id="business_restaurant_sub_tag1" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                              <label htmlFor="business_restaurant_sub_tag2" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Dietary Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag2" id="business_restaurant_sub_tag2" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {dietaryOptions.map(option => (
                                  <option key={option.label} value={option.value}>
                                      {option.value}
                                  </option>
                                  ))}
                              </Field>
                              <label htmlFor="business_restaurant_sub_tag3" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Atmosphere Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag3" id="business_restaurant_sub_tag3" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {atmosphereOptions.map(option => (
                                  <option key={option.label} value={option.value}>
                                      {option.value}
                                  </option>
                                  ))}
                              </Field>
                              <label htmlFor="business_restaurant_sub_tag4" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Special Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag4" id="business_restaurant_sub_tag4" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {specialOptions.map(option => (
                                  <option key={option.label} value={option.value}>
                                      {option.value}
                                  </option>
                                  ))}
                              </Field>
                              <label htmlFor="business_restaurant_sub_tag5" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Award Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag5" id="business_restaurant_sub_tag5" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {awardOptions.map(option => (
                                  <option key={option.label} value={option.value}>
                                      {option.value}
                                  </option>
                                  ))}
                              </Field>
                              <label htmlFor="business_restaurant_sub_tag6" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Type Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag6" id="business_restaurant_sub_tag6" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {restaurantTypeOptions.map(option => (
                                  <option key={option.label} value={option.value}>
                                      {option.value}
                                  </option>
                                  ))}
                              </Field>
                              <label htmlFor="business_restaurant_sub_tag7" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Type Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="business_restaurant_sub_tag7" id="business_restaurant_sub_tag7" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {restaurantTypeOptions.map(option => (
                                  <option key={option.label} value={option.value}>
                                      {option.value}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Art Gallery':
                      return (
                          <div>
                          <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                          <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                              <option value="">Select...</option>
                              {subTypeOptions[values.business_type_tag2].map(option => (
                              <option key={option} value={option}>
                                  {option}
                              </option>
                              ))}
                          </Field>
                      </div>
                      );
                  case 'Attraction':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'City Sightseeing Tour/Historical Sites Tour':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Entertainment/Theater/Plays/Movies':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Evening/Night Life':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Food Tasting Tour':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Museums / Museum Tours':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Outdoor Adventures':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Shopping':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Spa/Fitness/Salons':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Wine Tasting Tour':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Wine':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Specialty Food Shops':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Cultural Experiences':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Hair and Beauty Salons':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Local Markets':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  case 'Historical/Cultural Walking Tour':
                      return (
                          <div>
                              <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag2}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                              <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                  <option value="">Select...</option>
                                  {subTypeOptions[values.business_type_tag2].map(option => (
                                  <option key={option} value={option}>
                                      {option}
                                  </option>
                                  ))}
                              </Field>
                          </div>
                      );
                  // Add more cases for other options
                  default:
                      return null; // Render nothing if no option is selected or unknown option
              }
          })()}
      </div>
    )
  }

export const DynamicFormDropdowns3 = ({ values }) => {

    return (
        <div>
            {(() => {
                switch (values.business_type_tag3) {
                    case 'Restaurant':
                        return (
                            <div>
                                <label htmlFor="business_restaurant_sub_tag1" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag1" id="business_restaurant_sub_tag1" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                                <label htmlFor="business_restaurant_sub_tag2" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Dietary Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag2" id="business_restaurant_sub_tag2" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {dietaryOptions.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                    ))}
                                </Field>
                                <label htmlFor="business_restaurant_sub_tag3" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Atmosphere Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag3" id="business_restaurant_sub_tag3" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {atmosphereOptions.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                    ))}
                                </Field>
                                <label htmlFor="business_restaurant_sub_tag4" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Special Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag4" id="business_restaurant_sub_tag4" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {specialOptions.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                    ))}
                                </Field>
                                <label htmlFor="business_restaurant_sub_tag5" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Award Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag5" id="business_restaurant_sub_tag5" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {awardOptions.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                    ))}
                                </Field>
                                <label htmlFor="business_restaurant_sub_tag6" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Type Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag6" id="business_restaurant_sub_tag6" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {restaurantTypeOptions.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                    ))}
                                </Field>
                                <label htmlFor="business_restaurant_sub_tag7" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Type Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="business_restaurant_sub_tag7" id="business_restaurant_sub_tag7" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {restaurantTypeOptions.map(option => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Art Gallery':
                        return (
                            <div>
                            <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                            <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                <option value="">Select...</option>
                                {subTypeOptions[values.business_type_tag3].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </Field>
                        </div>
                        );
                    case 'Attraction':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'City Sightseeing Tour/Historical Sites Tour':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Entertainment/Theater/Plays/Movies':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Evening/Night Life':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Food Tasting Tour':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Museums / Museum Tours':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Outdoor Adventures':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Shopping':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Spa/Fitness/Salons':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Wine Tasting Tour':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Wine':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Specialty Food Shops':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Cultural Experiences':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Hair and Beauty Salons':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Local Markets':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    case 'Historical/Cultural Walking Tour':
                        return (
                            <div>
                                <label htmlFor="sub_business_tags" className="flex flex-row items-center">{values.business_type_tag3}&nbsp;Sub Tags <FaInfoCircle className='mx-2' /></label>
                                <Field as="select" name="sub_business_tags" id="sub_business_tags" className="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Business Tags (comma-separated)" >
                                    <option value="">Select...</option>
                                    {subTypeOptions[values.business_type_tag3].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </Field>
                            </div>
                        );
                    // Add more cases for other options
                    default:
                        return null; // Render nothing if no option is selected or unknown option
                }
            })()}
        </div>
    )
}

