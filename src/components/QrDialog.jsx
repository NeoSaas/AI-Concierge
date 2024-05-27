import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useCallback, useEffect } from 'react';
import QRCode from 'react-qr-code';
import Barcode from 'react-barcode';
import { Carousel } from 'react-responsive-carousel';
import Rating from '@mui/material/Rating';
import 'react-slideshow-image/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useAppContext } from '../AppContext';

export default function MyDialog({ otherLink }) {
  // console.log('MyDialog')
  const { isOpen, setIsOpen, isRestaurant, clickedBusiness } = useAppContext();
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1; // getMonth() returns 0-based month
  const dateString = `${month}/${day}`;

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const validTags = [clickedBusiness[0]?.business_tags[1], clickedBusiness[0]?.business_tags[3], clickedBusiness[0]?.business_tags[4]];
  const compressImage = (url, quality = 0.7) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            resolve(URL.createObjectURL(blob));
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = reject;
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={clickedBusiness[0] ? `w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white p-12 text-left align-middle shadow-2xl transition-all` : `w-max transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center`}>
                <Dialog.Title as="h3" className="text-4xl font-wedding leading-6 text-primary mb-8 text-center">
                  {clickedBusiness[0] ? (
                    <div>
                      <p className="text-5xl mb-6 font-wedding text-primary">{clickedBusiness[0]?.business_name}</p>
                      <p className="text-2xl font-quicksand text-secondary">{clickedBusiness[0]?.business_address}</p>
                      <p className="text-2xl mt-4 text-secondary">{clickedBusiness[0]?.business_phone_number}</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-primary">Scan the QR Code for Further Directions!</p>
                  )}
                </Dialog.Title>
                <div className="mt-4">
                  {clickedBusiness[0] ? 
                  <>
                    <div className='grid grid-cols-2 gap-8'>
                      <img src={`https://ai-concierge-main-0b4b3d25a902.herokuapp.com/${clickedBusiness[0]?.business_image_1}`} alt='first-pic' className='w-[390px] h-[390px] object-cover rounded-lg shadow-lg border-2 border-accent'/>
                      <div>
                          <p className="text-3xl font-quicksand text-primary mb-4">Description</p>
                          <p className="text-lg text-secondary mb-8">{clickedBusiness[0]?.business_description}</p>
                          <p className="text-2xl font-quicksand text-primary mb-4">Type</p>
                          <p className="text-lg text-secondary">{validTags.join(', ')}</p>
                      </div>
                    </div>
                    <div className='mt-12 grid grid-cols-2 gap-8'>
                      <div className='space-y-8'>
                        <div>
                          <p className="text-2xl font-quicksand text-primary">Google Review Summary</p>
                          <p className="text-lg text-secondary">{clickedBusiness[0]?.google_reviews_summary}</p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-2xl font-quicksand text-primary mr-4">Rating:</p>
                          <div className="flex items-center">
                            <p className="text-lg text-secondary mr-2">{clickedBusiness[0]?.business_rating}</p>
                            <Rating
                              name="half-rating-read"
                              defaultValue={parseFloat(clickedBusiness[0]?.business_rating)}
                              precision={0.1}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="p-6 border border-primary rounded-lg shadow-lg bg-background">
                          <p className="text-2xl font-quicksand text-primary mb-4">Hours of Operation:</p>
                          <div className="space-y-2">
                            {clickedBusiness[0] && Object.entries(clickedBusiness[0]?.hours_of_operation).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-lg text-secondary">
                                <p>{key}:</p>
                                <p>{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000} className="rounded-lg shadow-lg">
                            {[clickedBusiness[0]?.business_image_2, clickedBusiness[0]?.business_image_3, clickedBusiness[0]?.business_image_4, clickedBusiness[0]?.business_video1].map((src, index) => (
                              <div key={index} className="relative">
                                <img src={`https://ai-concierge-main-0b4b3d25a902.herokuapp.com/${src}`} alt={`Business image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-accent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                              </div>
                            ))}
                          </Carousel>
                      </div>
                    </div>
                    <div className="mt-12 flex justify-between items-center">
                      <div className="text-center">
                        <QRCode value={otherLink} className="m-auto shadow-lg border-2 border-accent p-2" />
                        <p className="mt-5 text-lg text-secondary">Scan the QR Code for Directions!</p>
                      </div>
                      <div className="text-center">
                        {parseInt(clickedBusiness[0]?.business_barcode_dates?.split('/')[0]) <= parseInt(dateString.split('/')[0]) && parseInt(clickedBusiness[0]?.business_barcode_dates?.split('/')[1]) <= parseInt(dateString.split('/')[1]) ? (
                          <>
                            <p className="mb-5 text-2xl font-bold text-primary">{clickedBusiness[0]?.business_barcode}</p>
                            <p className="mb-5 text-xl text-secondary">{clickedBusiness[0]?.business_name}</p>
                            <p className="mb-5 text-xl text-secondary">{"Promo Code Valid Until: " + clickedBusiness[0]?.business_barcode_dates}</p>
                          </>
                        ) : (
                          <>
                          <p className="mb-5 text-2xl font-bold text-primary">{clickedBusiness[0]?.business_barcode}</p>
                            <p className="mb-5 text-xl text-secondary">{clickedBusiness[0]?.business_name}</p>
                            <p className="mb-5 text-xl text-secondary">{"Promo Code Valid Until: " + clickedBusiness[0]?.business_barcode_dates}</p>
                           </>
                        )}
                        <p className="text-lg text-secondary">Take a Picture of the Barcode and Present It at the Restaurant for Perks!</p>
                      </div>
                    </div>
                    </> : <QRCode value={otherLink || ''} className='m-auto' />}
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-primary px-12 py-3 text-xl font-quicksand text-background hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition duration-300 bg-[#5C0601] text-white"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
