var config = {
  style: 'mapbox://styles/mpotter/ck3ex1vs41ol01cpo6uqt8nkf',
  accessToken: 'pk.eyJ1IjoibXBvdHRlciIsImEiOiJjajAxZGltM3UwNjF2MzJsczVnN3R2eTNnIn0._Sj0HRLt8VTQGTojMWYFfQ',
  showMarkers: false,
  theme: 'light',
  alignment: 'left',
  title: 'Fulton River District - Chicagos Connected Campus',
  subtitle: "Summary of infill development characteristics as shaped by mobility, amenities, demographics and zoning",
  byline: 'By Riverside Investment & Development',
  footer: 'Sources: Riverside Investment & Development, City of Chicago Data Portal',
  chapters: [{
      id: 'fultonriver',
      title: '2018: Zoned for a Riverfront City',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/fultonriverdistrict.png',
      description: 'At 37-acres, the River District is a unique blank slate development site infill to the Citys most desirable 24/7 submarkets: Fulton Market, River North and the West Loop. As of Q4 2018, zoning is in place for up to 11 million square feet of mixed-use development. Extending downtown from the nearby “Confluence”, this new master planned ‘city in a park’ will offer 2/3rd miles of riverwalk and 15 acres of open space upon completion.',
      location: {
        center: [-87.64249, 41.88865],
        zoom: 12.48,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'large-parcel-boundaries',
          opacity: 0
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
      ],
      onChapterExit: [{
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
      ]
    },
    {
      id: 'northbranchzoning',
      title: '2017: Removed "PMD" Zoning',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/historical_chicago_ave_bridge.jpg',
      description: 'In 2017 the Department of Planning concluded a two-year long comprehensive re-zoning process spanning 750-acres of land on the North Branch. The “modernization” land use and transportation framework sought to eliminate restrictive industrial zoning along the river in order to transform large scale industrial sites from blighted areas prohibiting access to the river into high density mixed-use projects inviting the City in with public green space and vibrancy.',
      location: {
        center: [-87.65929, 41.90447],
        zoom: 13.43,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'cta-l-lines',
          opacity: 0
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 0
        },
        {
          layer: 'northbranchzoning',
          opacity: .65
        },
      ],
      onChapterExit: [{
          layer: 'northbranchzoning',
          opacity: 0
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
      ]
    },
    {
      id: 'dxzoning',
      title: '2016: Expanded "DX" Zoning',
      description: 'In June of 2016 the City Council approved updates to the zoning code governing downtown "DX" floor area bonus system and downtown zoning district geography. Under the moniker "Neighborhood Opportunity Bonus", the changes were intended to promote increased density development, particularly in areas well served by transit, in order to accommodate pent-up office and residential demand growing outward from the conventional CBD core.',
      location: {
        center: [-87.65801, 41.88436],
        zoom: 12.92,
        pitch: 0.00,
        bearing: -0.15
      },
      onChapterEnter: [{
        layer: 'downtownzoning',
        opacity: .65
      }, ],
      onChapterExit: [{
        layer: 'downtownzoning',
        opacity: 0
      }, ]
    },
    {
      id: 'riverwalk',
      title: '2015-2017: Main Branch Riverwalk',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/chicagoriverwalk-Season-Celebration.jpg',
      description: 'Completed in 2017, the Main Branch Riverwalk has quickly become one of the City’s top attractions for residents and tourists alike. As the #3 urban linear park by visitors in the U.S., behind only NYC’s High Line and the San Antonio Riverwalk, Chicago’s “Second Great Waterfront” is witnessing broad based demand from premiere +A corporate office users, luxury residences, leading hospitality brands, and upscale retailers and restaurants, all serving to confirm the riverfront as the most pleasing urban aesthetic.',
      location: {
        center: [-87.62922, 41.88744],
        zoom: 16.38,
        pitch: 53.00,
        bearing: -89.39
      },
      onChapterEnter: [{
        layer: '3d-buildings',
        opacity: 1
      }, ],
      onChapterExit: [{
        layer: '3d-buildings',
        opacity: 1
      }, ]
    },
    {
      id: 'confluence',
      title: 'Chicago River Confluence',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/confluence.jpg',
      description: 'Since 2016 over 3.5 million square feet of Class +A office has been delivered or is leased, replacing formerly blighted riverfront parking lots. As perhaps the most dramatic point along the River, offering unparalleled light, air and views, newly constructed offices at the Confluence are leased to some of the Citys leading companies including William Blair, Hyatt Corporation, Bank of America, Salesforce, McDermott Will & Emery, DLA Piper and Mead Johnson.',
      location: {
        center: [-87.63837, 41.88675],
        zoom: 16.15,
        pitch: 53.50,
        bearing: -28.80
      },
      onChapterEnter: [],
      onChapterExit: [{
        layer: '3d-buildings',
        opacity: 0
      }, ]
    },
    {
      id: 'commuter',
      title: 'Access to a Commuter Population of 5.5 Million',
      description: 'Chicagos downtown core is accessible via mass transit to the top recruitment populations for suburban employees in all directions. As the largest metro transit system in the U.S. outside of the east coast corridor, Amtrak and Metra trains provide efficient connections to Ogilvie Station and Union Station, that later of which is the #4 busiest rail station in the U.S. by ridership.',
      location: {
        center: [-87.74011, 42.02653],
        zoom: 8.25,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'cta-l-lines',
          opacity: 0
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 0
        },
        {
          layer: 'metra-lines',
          opacity: 1
        },
        {
          layer: 'metra-stations-updated',
          opacity: 1
        },
      ],
      onChapterExit: [{
          layer: 'metra-lines',
          opacity: 0
        },
        {
          layer: 'metra-stations-updated',
          opacity: 0
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
      ]
    },
    {
      id: 'transit',
      title: 'Central to Four CTA L Stations',
      description: 'The River District is serviced by a robust ‘L’ system providing convenient access to the Citys top neighborhoods for talent recruitment. Accessible to four stations in under .5 miles, the Site is an established transit-oriented location with existing average weekday ridership of over 26,000. At the north end of the site, three major CTA lines connect along Chicago Avenue: the Blue, Brown/Purple and Red (#2 station in CTA network). The southern end of the site is serviced by CTA Blue line station, 2 blocks west on Grand Avenue, and the Brown Lines Merchandise Mart station to the east.',
      location: {
        center: [-87.64451, 41.88737],
        zoom: 13.64,
        pitch: 0.50,
        bearing: 0.20
      },
      onChapterEnter: [{
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
        {
          layer: 'transit',
          opacity: .65
        },
        {
          layer: 'transit_counts',
          opacity: 1
        },
      ],
      onChapterExit: [{
          layer: 'transit',
          opacity: 0
        },
        {
          layer: 'transit_counts',
          opacity: 0
        }
      ]
    },
    {
      id: 'bikes',
      title: 'Extensive Bicycle Network',
      description: 'Chicago was voted “Bicycle City of the Year” in 2016 and is home to the #2 bike share system – Divvy - in the U.S, a reflection of the integral role bicycling plays within our transportation system. Every day, thousands of people bike along a growing network of protected streets for commuting and recreation. The River District is central to major commuter ‘spoke’ routes connecting to downtown, the lakefront and popular neighborhoods, including close proximity to the #1 route along Milwaukee Avenue’s ‘Hipster Highway',
      location: {
        center: [-87.65013, 41.88911],
        zoom: 13.39,
        pitch: 0.00,
        bearing: -0.15
      },
      onChapterEnter: [{
          layer: 'cta-l-lines',
          opacity: 0
        },
        {
          layer: 'bike-routes-tribune',
          opacity: 1
        },
        {
          layer: 'bike-nodes-tribune_dot',
          opacity: 1
        },
        {
          layer: 'bike-nodes-tribune_label',
          opacity: 1
        },
      ],
      onChapterExit: [{
          layer: 'bike-routes-tribune',
          opacity: 0
        },
        {
          layer: 'bike-nodes-tribune_dot',
          opacity: 0
        },
        {
          layer: 'bike-nodes-tribune_label',
          opacity: 0
        },
        {
          layer: 'bike-nodes-tribune',
          opacity: 0
        },
      ]
    },
    {
      id: 'transitwayline',
      title: '3-Mile "North Branch Transitway"',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/transitway.jpeg',
      description: 'Within the North Branch re-zoning framework, the City identified a number of transportation projects throughout the corridor to improve public transportation. Most prominent of the improvements is the “North Branch Transitway”, which calls for a repurposing of a 3-mile abandoned freight rail corridor to create a dedicated pedestrian and Bus Rapid Transit (BRT) corridor anchored by Union Station, Ogilvie Station at the south end and the Metra Clybourn and 606 Trail to the north.',
      location: {
        center: [-87.64924, 41.89722],
        zoom: 12.99,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
        layer: 'transitway',
        opacity: 1
      }],
      onChapterExit: [{
          layer: 'transitway',
          opacity: 0
        }
      ]
    },

    {
      id: 'retail',
      title: 'World-class Dining Districts',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/fultonmarketdistrict.jpg',
      description: 'Voted "Restaurant City of the Year" (2017) by Bon Appetit, Chicago offers an acclaimed dining reputation and ranks #11 globally for cities with the most Michelin Star rated restaurants. Home to 7 Michelin Star and 14 Bib Gourmand rated restaurants, the Fulton Market and River North neighborhoods that surround the Site contain the citys highest concentrations and variety of fine dining options.',
      location: {
        center: [-87.64995, 41.88915],
        zoom: 13.96,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'bib-and-michelin-combined',
          opacity: 1
        },
        {
          layer: 'bib-and-michelin-combined_labels',
          opacity: 1
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
      ],
      onChapterExit: [{
          layer: 'bib-and-michelin-combined',
          opacity: 0
        },
        {
          layer: 'bib-and-michelin-combined_labels',
          opacity: 0
        },
      ]
    },

    {
      id: 'magmile',
      title: 'One Mile to Mag Mile',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/watertower.png',
      description: 'At the intersection of Chicago Avenue and Michigan Avenue is the heart of Chicagos Magnificent Mile. Home to iconic modern skyscrapers contrasted against historic landmark structures, the Mag Mile is a bustling stretch offering High Street flagship retail stores, restaurants and is one of the most visited areas of the city. With over 26,000 hotel rooms in the North Michigan Avenue district to accommodate year-round business and leisure tourism, the Mag Mile is Chicago’s original 24/7 entertainment destination.',
      location: {
        center: [-87.62405, 41.89671],
        zoom: 15.92,
        pitch: 59.00,
        bearing: -93.60
      },
      onChapterEnter: [{
        layer: '3d-buildings',
        opacity: 1
      },],
      onChapterExit: []
    },

    {
      id: 'techhubs',
      title: 'Proven Tech Location',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/600_aerial.jpg',
      description: 'The River District is anchored by Chicagos leading technology and innovation hubs. At the north is 600 W. Chicago, home to serial start-up, venture capital and entrepreneurship firm Lightbank. This old “Montgomery Ward” warehouse is fully leased to a variety of mature and high growth technology companies comprising over 7,500 employees, working within some of the most competitive fields for recruitment. South is The Mart, a four million square foot art-deco warehouse, that since 2015 has successfully repositioned from furniture showroom to a leading hub of corporate headquarters and is also home to the citys de-facto tech hub, 1871, which is ranked as the #1 University affiliated incubator in the world” in 2018.',
      location: {
        center: [-87.64409, 41.89739],
        zoom: 15.87,
        pitch: 57.50,
        bearing: 115.97
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'montgomery',
      title: 'Montgomery Ward Park',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/montgomery_ward_skyline.jpg',
      description: 'Located directly across the river is River North’s largest and most vibrant public park. The A. Montgomery Ward Park contains over 4-acre of green space, playgrounds, a waterfront promenade with year-round programming such as “Movies in the Park”. A future pedestrian bridge will re-connect at Erie Street, improving access east from the site to River North neighborhood’s dense offering of amenities, transportation, offices and residences.',
      location: {
        center: [-87.64452, 41.89533],
        zoom: 16.12,
        pitch: 42.00,
        bearing: 161.29
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'eastbankclub',
      title: 'East Bank Club',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/ebc_exterior_river.jpg',
      description: 'As one of the largest private fitness facilities in the U.S., with more than 450,000 square feet of fitness, dining, and resort style amenities, the East Bank Club is Chicago’s premier health club. Covering over two full city blocks, the Club offers an astounding array of amenities, state-of-the-art exercise facilities and serves as the unofficial Town Square for River North office workers and residents.',
      location: {
        center: [-87.64177, 41.89010],
        zoom: 16.30,
        pitch: 48.50,
        bearing: 81.45
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'grandavebridge',
      title: 'View from Grand Ave Bridge',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/kinzie-park.jpg',
      description: 'Phase 1 of the master planned development will commence at Grand Avenue. The currently barren parking lot Site will transform from pedestrian barrier to pedestrian magnet, stitching together the adjacent West Loop, Fulton Market and River North submarkets. A curvature in the river towards the confluence creates stunning waterfront views back to the iconic city skyline, Chicago Landmark bridges, and visually connects the Site to some of downtown’s most desirable office and residential properties.',
      location: {
        center: [-87.64116, 41.89144],
        zoom: 16.58,
        pitch: 60.00,
        bearing: 149.29
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'fultonriverdistrictwest',
      title: '37 Acre Riverfront Campus',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/renderingwest.png',
      description: 'Rare opportunity to create an Urban oasis...',
      location: {
        center: [-87.64238, 41.89325],
        zoom: 15.77,
        pitch: 57.50,
        bearing: -71.62
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'growth',
      title: 'Two Decades of Urban Growth',
      description: 'Since 1999, downtown Chicago has experienced a dramatic urban renaissance. Notable migrations trends include a newfound appreciation for the River’s edge. As the conventional CBD core has become completely built-out, the City has moved rapidly outward to the North and West. Owing to significant availability of large once-industrial sites, Fulton Market has become the largest new office submarket in the downtown. River North is the #1 submarket for large-scale luxury residential deliveries, having grown north to Chicago Avenue and far beyond in recent years.',
      location: {
        center: [-87.64827, 41.88600],
        zoom: 13.58,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'large-parcel-boundaries',
          opacity: 0
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
        {
          layer: '3d-buildings',
          opacity: 0
        },
      ],
      onChapterExit: [{
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'riverdistrict-boundary',
          opacity: 1
        },
        {
          layer: '3d-buildings',
          opacity: 1
        },
      ]
    },
    //final brackets for
  ]
};
