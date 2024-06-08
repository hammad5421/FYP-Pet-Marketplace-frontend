import React from 'react';

const Validation = () => {
  return (
    <section className="w-full py-16 bg-center bg-cover bg-white">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="item">
              <h1 className="text-4xl mt-8 font-bold text-[#57328a]">This is how we validate listings on LikePets.co.uk</h1>
              <p className="mt-4 ">
                At LikePets.co.uk we care a lot about avoiding fake listings - this is strictly forbidden. We have a zero-tolerance policy towards fake listings. We review all listings manually and all new listings require manual approval from one of our experienced employees before being published on our website. However, we still advise our users to use their common sense when searching for a new pet, because even our experienced employees, can be fooled by a scammer.
              </p>
              <p className="mt-2"></p>
              <h2 className="text-2xl font-bold text-[#57328a] mt-8">
                Validation guidelines for LikePets.co.uk
              </h2>
              <ul className="list-disc list-inside mt-4">
                <li className="mt-2">
                  When a new listing is created on LikePets.co.uk, one of our employees will review and validate the listing manually. After approval, the listing will be published for all users to see. If anyone is caught abusing the system and/or creating fake listings, all the scammers listings will be removed and the scammer will be banned from LikePets.co.uk.
                </li>
                <li className="mt-2">
                  When a new advertiser is created in our system, we receive a notification, resulting in our team reviewing the sellers name, address, email and phone number, as well as published listings. If the information gathered doesn't seem valid to our team, the seller won't be able to create listings on LikePets.co.uk.
                </li>
                <li className="mt-2">
                  According to data legislation, all information gathered on a user is saved for a maximum of 2 years starting from the creation date. This regards information such as, full name, address, email and phone number as well as created listings. Additionally, our system gathers information regarding the author such as IP address(es), which will be saved in our system.
                </li>
                <li className="mt-2">
                  We perform random checks every day on listings. These are picked out automatically by our software to proactively limit the amount of fake listings. At the very least there's 2 random checks done per day.
                </li>
                <li className="mt-2">
                  In addition to what's mentioned above, we have a long list of security checks completed daily on listings and listing activities, to limit the chance of abuse on LikePets.co.uk. All this effort is put in, because we want a safe search for everybody.
                </li>
                <li className="mt-2">
                  If you discover a suspicious listing, please <a href="/contact-us" className="text-blue-500 underline">contact us</a>, so we can look into the listing and do a thorough checkup on the author as soon as possible.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Validation;
