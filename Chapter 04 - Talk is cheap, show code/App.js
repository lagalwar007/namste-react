/**
 *  AppLayout
 *    -  Header
 *       - Logo
 *       - NavItems
 *         - Home
 *         - About Us
 *         - Contact Us
 *         - Cart
 *    - Body
 *      - Search
 *      - Restaurant Container
 *        - Restaurant Card
 *          - Restro Image
 *          - Restro Name
 *          - Restro Cuisines
 *          - Restro Rating
 *          - Restro Delivery Time
 *    - Footer
 *      - Copyright Disclaimer
 *      - Address
 *      - Links
 */

import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
          className="logo"
          alt="brand-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const restroList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "721134",
      name: "Lush House",
      uuid: "8ddeba1b-73ec-4754-8c5c-8bda0e6c9982",
      city: "16",
      area: "Bajaj Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "5cc0695f030745ee3a79f9164c0db5d2",
      cuisines: ["Beverages", "Snacks", "Italian", "Fast Food", "Burgers"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant: "lush-house-bajaj-nagar-bajaj-nagar",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "Plot No. 75, Abhyankar Nagar, Main Road, Nagpur, Nagpur (Urban), Nagpur 440022",
      locality: "Abhyankar Nagar",
      parentId: 126897,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7147815~p=1~eid=00000188-fd90-092b-1737-7736003c015d~srvts=1687881255211",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "721134",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "697183",
      name: "Burger King",
      uuid: "f1903ba0-851a-4e12-ac78-d3f220fe9664",
      city: "16",
      area: "Eternity Mall",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "burger-king-nagpur-dharampeth",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "Shop No.G7,G8,F7 &F8, Ground and First Floor, Eternity Mall,Asian Highway 46, Sitabuldi,Nagpur-440010",
      locality: "Nagpur",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "697183",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "67332",
      name: "Pind Punjabi",
      uuid: "a11cc830-0b73-41e7-988d-b33ebf23bf2b",
      city: "16",
      area: "Loha Pul",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "psh10puzrr6ddmhhiph8",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "shree-ganesh-bhojnalay-sitabuldi-sitabuldi",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      locality: "Sahu Colony",
      parentId: 12427,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "67332",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "55319",
      name: "Variety Foods",
      uuid: "90345cd5-2ae7-4d02-9430-68f23b14d2f8",
      city: "16",
      area: "Pratap Nagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "g7of9ljmc31lmx01i1ow",
      cuisines: ["Maharashtrian", "North Indian", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 4.800000190734863,
      slugs: {
        restaurant: "variety-foods-vivekanand-nagar-pratap-nagar",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "Plot Number 37, Devashish Apartment, W High Court Road, Surendra Nagar, Vivekanand Nagar, Nagpur",
      locality: "High Court Road",
      parentId: 9584,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=6986359~p=4~eid=00000188-fd90-092b-1737-7737003c0437~srvts=1687881255211",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "55319",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 4.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81068",
      name: "Jay Ambika Bhojnalay",
      uuid: "c49cbef6-3dd5-4099-af14-a9efee664770",
      city: "16",
      area: "Gandhibagh",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "lxjirbaj1iecdncb0hxm",
      cuisines: ["North Indian", "Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      slaString: "17 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "jay-ambika-bhojnalay-gandhibagh-gandhibagh",
        city: "nagpur",
      },
      cityState: "16",
      address: "Shop no13 opp. Rahul hotel Ganeshpeth bus stand",
      locality: "St Stand Road",
      parentId: 109968,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "81068",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "180402",
      name: "Mullaji Zillah Biryani Center",
      uuid: "988fc4aa-fd8f-4c4e-9ad5-4b39f7fa5b1b",
      city: "16",
      area: "Sadar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "enh2ihuirlv2dl5lon5n",
      cuisines: ["Biryani"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "mullaji-zillah-biryani-centre-sadar",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "SHOP NO 52 MINI MANGALWARI BAJAR COMPLEX SADAR , District - Nagpur-1, STATE - Maharashtra - 440001",
      locality: "Mini Mangalwari Bajar",
      parentId: 141304,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "special",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "LIGHT",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "180402",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "LIGHT",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "643263",
      name: "Apsara Ice Creams",
      uuid: "6af5024c-a761-4483-988c-cfbd6df934c2",
      city: "16",
      area: "Gandhibagh",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "65919e8d5f536f64cf18e7415722cb64",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 2.9000000953674316,
      slugs: {
        restaurant: "apsara-ice-creams-keteshwar-mandir-wardhaman-nagar",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "Opposite Dulhan sarees , Near keteshwar Mandir, Jagnath Road, Gandhibagh , Nagpur 440002",
      locality: "Jagnath Road",
      parentId: 35219,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7016020~p=7~eid=00000188-fd90-092b-1737-7738003c0727~srvts=1687881255211",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.9 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "643263",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 2.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "87718",
      name: "Foody Moody Thali",
      uuid: "61944a9e-68b4-4287-a78c-8bb9fcca8341",
      city: "16",
      area: "Sitabuldi",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "sm2d7bzlpx6mb7qauodz",
      cuisines: [
        "Indian",
        "Thalis",
        "Chinese",
        "Biryani",
        "North Indian",
        "Punjabi",
        "Desserts",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 0.20000000298023224,
      slugs: {
        restaurant: "foody-moody-dharampeth-sadar",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      locality: "Sahu Colony",
      parentId: 83005,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "87718",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 0.20000000298023224,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "53868",
      name: "KFC",
      uuid: "1a378519-fe52-4d38-a47a-b497f285eb5a",
      city: "16",
      area: "Sitabuldi",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "kfc-ground-floor-eternity-mall-variety-square-bajaj-nagar",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "G1, G2, Ground Floor, Eternity Mall, Variety Square, Sitaburdi, Nagpur, Maharashtra 440010",
      locality: "Eternity Mall",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2600,
        message: "",
        title: "Delivery Charge",
        amount: "2600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "53868",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "521895",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      uuid: "68c85659-ee07-48d2-87ac-54ddfe41e211",
      city: "16",
      area: "Sadar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "dmsc4fxmlssfcz7yiurg",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 4.900000095367432,
      slugs: {
        restaurant:
          "kwality-walls-frozen-dessert-and-ice-cream-shop-sadar-sadar-2",
        city: "nagpur",
      },
      cityState: "16",
      address:
        "BROTHER'S ICE CREAM AND DAILY NEEDS: HOUSE NO 1393 BINAKI BAPU PATIL ROAD, ZONE NO .9 - ASINAGAR, NAGPUR , MAHARASHTRA- 440017 (HUL- I134718P3469)",
      locality: "Patil Road",
      parentId: 582,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3300,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3300,
        message: "",
        title: "Delivery Charge",
        amount: "3300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "LIGHT",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7162577~p=10~eid=00000188-fd90-092b-1737-7739003c0a1d~srvts=1687881255211",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "521895",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 4.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "LIGHT",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
]

const RestroCards = (props) => {
  const { resData } = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data

  return (
    <div className="restro-card">
      <div className="restro-image-container">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="restro-image"
          className="restro-logo"
        />
      </div>
      <div className="restro-description">
        <div className="restro-details">
          <span className="restro-name">{name}</span>
          <span className="restro-cusine">{cuisines.join(", ")}</span>
        </div>
        <div className="restro-other-details">
          <span className="restro-rating">{avgRating}</span>
          <span className="restro-deliveryTime">{deliveryTime} mins</span>
          <span className="restro-price">Rs.{costForTwo / 100}</span>
        </div>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <h4>Search</h4>
      </div>
      <div className="restro-container">
        {restroList.map((restaurant) => (
          <RestroCards
            key={restaurant.data.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return <></>
}

const AppLayout = () => {
  return (
    <div className="app">
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <Body />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
