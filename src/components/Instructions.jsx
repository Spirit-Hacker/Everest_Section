import React from "react";

const Instructions = () => {
  return (
    <div className="text-justify flex flex-col gap-y-6 px-10 py-10 text-white">
      <div>
        At Lhotse, we meticulously vet our hotel, travel, and accommodation
        partners, and equipment to uphold the utmost standards of safety.
        Included in our Everest Base Camp trek packages are the following — for
        comprehensive details, please refer to the overview.
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="text-lg font-bold">What's Included</div>
        <div className="flex flex-col gap-y-3">
          <div>1.Arrival and Departure Transfers</div>
          <div>
            2.Accommodation: 4 nights at a prestige hotel in Kathmandu on bed
            and breakfast basis.
          </div>
          <div>3.Welcome dinner in Kathmandu and briefing of adventure.</div>
          <div>
            4.Sagarmatha National Park Permit, TIMS card and all government fees
          </div>
          <div>
            5.Insurance: Insurance for all Involved Nepalese staffs during
            trekking
          </div>
          <div>
            6.Member transportation: All members and staff required
            transportation
          </div>
          <div>7.Trekking Map: Map of Everest Region Trekking</div>
          <div>
            8.Member Luggage: Each member can carry personal baggage weighing up
            to 15 kg during the trek, managed by porters.
          </div>
          <div>
            9.Lodging and food: During the trek, participants are provided with
            three meals daily (breakfast, lunch, and dinner), inclusive of tea
            and coffee, along with comfortable lodging options at hotels or
            lodges
          </div>
          <div>
            10.Drinking: 2 liters of boiled water to carry on thermos per day
            per member
          </div>
          <div>
            11.Guide: Local government licensed Guide (English Speaking) during
            the trek and sight-seeing in Kathmandu valley
          </div>
          <div>12.Porter: Porters (2trekkers: 1 porter) during the trek</div>
          <div>14.Comprehensive medical kit</div>
        </div>
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="text-lg font-bold">Not Included</div>
        <div className="flex flex-col gap-y-3">
          <div>1.International airfare to/from Kathmandu</div>
          <div>2.Nepal entry visa fee.</div>
          <div>
            3.Extra night in Kathmandu: Extra nights’ accommodation in
            Kathmandu. In case of early arrival or late departure, early return
            from trekking (due to any reason) than the scheduled itinerary
          </div>
          <div>
            4.Personal Expenses (e.g. laundry, telephone, beverages, etc.)
          </div>
          <div>5.Tips and gratuities</div>
          <div>
            6.Insurance: Travel and High-Altitude Insurance/
            Accident/Medical/Emergency Evacuation
          </div>
          <div>
            7.Personal Expenses: Telephone, Internet, Laundry, and Alcoholic
            Beverages, Personal equipment and shopping.  Any other item not
            listed in “price includes” section
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
