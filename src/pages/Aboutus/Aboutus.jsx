
import image2 from '../../Assets/pexels-goochie-poochie-3299905.jpg'
import image1 from './1img.jpg'; // Import the image
import React, { useState, useEffect } from 'react';


const Aboutus = () => {
    return (
        <>
            <div id="default-carousel" className="relative w-full mt-20 max-w-568px md:max-w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-lg md:h-[75vh] max-w-full md:max-w-568px">
        {/* Item 1 */}
        <div className="relative hidden duration-700 ease-in-out" data-carousel-item>
          <div className="relative">
            <img src={image1} className="block w-full" alt="Slide 1" />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white font-bold italic text-4xl">About Us</div>
          </div>
        </div>
        {/* Other carousel items */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={image1} className="absolute block w-full top-0 left-0" alt="Slide 2" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={image1} className="absolute block w-full top-0 left-0" alt="Slide 3" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={image1} className="absolute block w-full top-0 left-0" alt="Slide 4" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={image1} className="absolute block w-full top-0 left-0" alt="Slide 5" />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

            {/* Second component */}
            <div className="flex justify-center items-center h-screen mt-60">
      {/* Image */}
      <div className="flex flex-col justify-center items-center w-1/2 relative">
        <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Petmania" className="h-auto max-h-full" />

        {/* Overlay Image */}
        <img src={image2} alt="Overlay" className="absolute top-32 right-0 w-64" />
      </div>

      {/* Content */}
      <div className="w-1/2 p-12">
        <h6 className="text-[10px] font-bold dark:text-red" style={{ color: 'red' }}>PETMANIA</h6>
        <h2 className="text-xl md:text-2xl font-bold mb-4">About Pet Mania</h2>
        <p className="text-sm md:text-base mb-4">
          Pet Mania was founded in Pakistan in 2014. Pet mania is home to a wide range of pet products including food,
          litter, grooming products, toys, treats, hygiene products, pet care products, travel products, and other
          accessories. Pet Mania also offers numerous unparalleled services on our exclusive products like doorstep
          deliveries, money-back guarantees, and 24/7 customer support. Customer satisfaction is our singular aim
          therefore all our guarantees are coupled with no questions asked principles.
        </p>
        <h3 className="text-lg font-bold mb-2">Our Vision</h3>
        <p className="text-sm md:text-base mb-4">
          To work towards a future where we are industry representatives of the premium quality products, keep
          improving our add-on servicing qualities and to become the reputable advertisers in the country, and strive
          for expansion through innovative marketing and business development globally.
        </p>
        <h3 className="text-lg font-bold mb-2">Our Goal</h3>
        <ul className="text-sm md:text-base list-disc list-inside mb-4">
          <li>To provide the best quality products and services and establishing ourselves in the offline and online experience for your convenience.</li>
          <li>To bring the premium quality products at reasonable prices for you.</li>
          <li>To offer our loyal customers privileges to pamper their pets.</li>
          <li>To continuously encourage everyone to embrace the companionship of pets in their homes, promote the proper care and concern for them.</li>
          <li>To innovate new business concept & approach for your convenience.</li>
          <li>To promote social development and create real value out of something that we achieve.</li>
          <li>To provide a platform for people to share their pet stories at our website.</li>
          <li>To give you best information by creating our own catalogue to let them make a quick decision for their optimal buying experience.</li>
          <li>To establish of visual platform for advertisers to use our website to increase their online presence.</li>
        </ul>
      </div>
    </div>



    <section id="testimonials" className="py-10 lg:py-20 px-12">
      <div className="container mx-auto">
        <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">What customers are saying</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="p-8 rounded-lg border border-solid border-gray-200 shadow-lg">
            <p className="text-xl font-semibold mb-4">i ordered online cat food its quality was good it took a little time to deliver but its was delivered with in the same day. I would recommend this store.</p>
            <div className="flex items-center">
              <img className="w-12 h-12 mr-4 rounded-full" src="" alt="Jane Doe" />
              <div>
                <p>Zarar</p>
                <p className="text-sm text-gray-600">Student</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="p-8 rounded-lg border border-solid border-gray-200 shadow-lg">
            <p className="text-xl font-semibold mb-4">Very timely delivery, awesome customer service. plus quality of products is great. 10/10 highly recommended</p>
            <div className="flex items-center">
              <img className="w-12 h-12 mr-4 rounded-full" src="" alt="John Doe" />
              <div>
                <p>Shoaib</p>
                <p className="text-sm text-gray-600">Student</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="p-8 rounded-lg border border-solid border-gray-200 shadow-lg">
            <p className="text-xl font-semibold mb-4">I went to PetMania to get my cats vaccinated and groomed. I was very satisfied with the cleanliness of the facility and the professionalism of the staff. Will definitely go again</p>
            <div className="flex items-center">
              <img className="w-12 h-12 mr-4 rounded-full" src="" alt="Jane Smith" />
              <div>
                <p>Hammad</p>
                <p className="text-sm text-gray-600">Revol Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="flex flex-col items-center justify-center h-[40vh]">
      {/* Call and Message Icons */}
      <div className="flex items-center mb-4">
        {/* Call Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white mr-2">
          <i className="fas fa-phone-alt"></i>
        </div>
        {/* Vertical Line */}
        <div className="h-8 w-1 bg-gray-300 mx-4"></div>
        {/* Message Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white ml-2">
          <i className="fas fa-envelope"></i>
        </div>
      </div>
      {/* Button */}
      <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300">
        Get Started Now
      </button>
    </div>
  {/* New Section */}
  <div className="text-center mt-20">
                    <h1 className="text-red-500 text-2xl font-bold mb-4">News & Blogs</h1>
                    <h2 className="text-black text-lg font-bold mb-6">Latest news</h2>
                    {/* Add your news and blogs content here */}
                </div>
            {/* New Section */}
            <div>
                <div className="max-w-screen-xl mx-auto p-16">
                    <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                        <ArticleCard
                            title="Training"
                            content="How to train your cat in 5 easy steps."
                        />
                        <ArticleCard
                            title="Training"
                            content="How to train your dog in 5 easy steps"
                        />
                        <ArticleCard
                            title="Breed Identification"
                            content="How to identify your breed."
                        />
                    </div>
                </div>
                

              
            </div>
        </>
    );
}

// ArticleCard component goes here
const ArticleCard = ({ title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Add effect to the image when hovered
        if (isHovered) {
            // Implement your desired effect here
            console.log('Image hovered!');
        }
    }, [isHovered]);

    return (
        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="py-4 px-8">
                <img
                    src={image1}
                    className="rounded-full h-12 w-12 mb-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    alt="Author"
                />
                <a href="#">
                    <h4 className="text-lg mb-3 font-semibold">{title}</h4>
                </a>
                <p className="mb-2 text-sm text-gray-600">{content}</p>

                <img src={image1} className="w-full" alt="Article" />

                <hr className="mt-4" />
                <span className="text-xs">ARTICLE</span>
                &nbsp;<span className="text-xs text-gray-500">PROCESS</span>
            </div>
        </div>
        
    );
};

export default Aboutus;
