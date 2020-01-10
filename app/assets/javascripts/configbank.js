var config = {
  style: 'mapbox://styles/mpotter/ck3ukxqlq0od01cnhven0r0ki',
  accessToken: 'pk.eyJ1IjoibXBvdHRlciIsImEiOiJjajAxZGltM3UwNjF2MzJsczVnN3R2eTNnIn0._Sj0HRLt8VTQGTojMWYFfQ',
  showMarkers: false,
  theme: 'light',
  alignment: 'left',
  title: 'TRIBUNE PROPERTY INFILL DEVELOPMENT',
  subtitle: "Analysis of historical and future growth patterns of downtown Chicago",
  footer: 'Source: Riverside Investment & Development',
  chapters: [
    {
      id: 'fultonriver_2',
      title: 'Transformational Downtown Development',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/fultonriverdistrict.png',
      description: 'At 37-acres, the River District is a unique blank slate development site infill to the Citys most desirable 24/7 submarkets: Fulton Market, River North and the West Loop. As of Q4 2018, zoning is in place for up to 11 million square feet of mixed-use development. Extending downtown from the nearby “Confluence”, this new master planned ‘city in a park’ will offer 2/3rd miles of riverwalk and 15 acres of open space upon completion.',
      location: {
        center: [-87.65041, 41.88537],
        zoom: 14.06,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'large-parcels-3',
          opacity: 1
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
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
      ]
    },
    {
      id: 'past_growth',
      title: 'Two Decades of Urban Growth',
      description: 'Since 1999, downtown Chicago has experienced a dramatic urban renaissance. Notable migration trends influencing develpment include an influx of corporations relocating from the suburbs to the City and a newfound appreciation for the River’s edge. As the conventional CBD core has become completely built-out, the City has moved rapidly outward to the North and West. Owing to significant availability of large once-industrial sites, Fulton Market has become the largest new office submarket in the downtown. River North is by far the #1 submarket for large-scale luxury residential deliveries. The Tribune property is ideally situated between these two submarkets and is now zoned for similar high density mixed use developments.',
      location: {
        center: [-87.65041, 41.88537],
        zoom: 14.06,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
      ],
      onChapterExit: [{
          layer: 'cta-l-lines',
          opacity: .55
        },
        {
          layer: 'large-parcels-3',
          opacity: 0
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
          layer: 'northbranchzoning',
          opacity: .65
        },
      ],
      onChapterExit: [{
          layer: 'northbranchzoning',
          opacity: 0
        },
        {
          layer: 'large-parcels-3',
          opacity: 1
        },
        {
          layer: 'cta-l-lines',
          opacity: .55
        },
      ]
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
      id: 'commuter_lines',
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
      ]
    },
    {
      id: 'master_plans',
      title: '2018 Zoned Master Planned Sites',
      description: 'In 2018 the City rezoned three major riverfront sites for city-scale redevelopment.',
      location: {
        center: [-87.65980, 41.88548],
        zoom: 12.96,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'cta-l-lines',
          opacity: .55
        },
      ],
      onChapterExit: [
      ]
    },
    {
      id: 'transitwayline',
      title: '3-Mile "North Branch Transitway"',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/transitway.jpeg',
      description: 'Within the North Branch re-zoning framework, the City identified a number of transportation projects throughout the corridor to improve public transportation. Most prominent of the improvements is the North Branch Transitway, which calls for a repurposing of a 3 mile abandoned freight rail corridor to create a dedicated pedestrian and Bus Rapid Transit (BRT) corridor anchored by Union Station, Ogilvie Station at the south end and the Metra Clybourn and 606 Trail to the north.',
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
          opacity: .25
        }
      ]
    },
    {
      id: 'cta_walksheds',
      title: '10 minute walk',
      description: 'Chicago CTA Blue and Brown lines currently service the most desirable neighborhoods for corporate talent recruitment. An evaluation of .5 mile walksheds from CTA stations illustrates that transit coverage for the Tribune property is unmatched.',
      location: {
        center: [-87.65980, 41.88548],
        zoom: 12.96,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'walksheds-all-ctal',
          opacity: .25
        },
      ],
      onChapterExit: [{
            layer: 'walksheds-all-ctal',
            opacity: 0
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
      id: 'commuter_walksheds',
      title: 'Ogilvie and Union Station',
      description: 'Access to commuter rails stations remains critical for successful office development. The West Loop has been the leading submarket for corporate relocations from the suburbs to the city, largely owing to its ability to conveniently tap into the commuter rails',
      location: {
        center: [-87.64451, 41.88737],
        zoom: 13.64,
        pitch: 0.50,
        bearing: 0.20
      },
      onChapterEnter: [{
          layer: 'walkshed-commuter',
          opacity: .35
        },
      ],
      onChapterExit: [{
          layer: 'walkshed-commuter',
          opacity: 0
        },
      ]
    },
    {
      id: 'retail',
      title: 'World-class Dining Districts',
      image: 'https://tourchicago.s3.us-east-2.amazonaws.com/fultonmarketdistrict.jpg',
      description: 'Voted "Restaurant City of the Year" (2017) by Bon Appetit, Chicago offers an acclaimed dining reputation and ranks #11 globally for cities with the most Michelin Star rated restaurants. Home to 7 Michelin Star (Blue dots) and 14 Bib Gourmand (Green dots) rated restaurants, the Fulton Market and River North neighborhoods that surround the Site contain the citys highest concentrations and variety of fine dining options.',
      location: {
        center: [-87.68684, 41.89123],
        zoom: 12.16,
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
      onChapterEnter: [
        {
          layer: '3d-buildings',
          opacity: 1
        },
      ],
      onChapterExit: []
    },
    {
      id: 'tribune_montgomery',
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
      id: 'tribune_eastbankclub',
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
      id: 'tribune_grandavebridge',
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
      onChapterExit: [
        {
          layer: '3d-buildings',
          opacity: 0
        },]
    },
    {
      id: 'sites_planned_all',
      title: 'Planned Development Sites',
      description: 'Looking forward, the majority of significant office and residential projects planned are located in River North and Fulton Market. As the River North submarket has become largely built-out during the last development cycle, the majority of remaining planned developments are concentrated around Chicago Avenue including significant redevelopments planned at the Greyhound facility and Moody Bible Institute. Fulton Market is anticipated to continue to experience success as an alternative submarket to the conventional downtown, and has nearly 6 million square feet of office planned for ground up development at which point the submarket will be fully built out.',
      location: {
        center: [-87.64451, 41.88737],
        zoom: 13.64,
        pitch: 0.50,
        bearing: 0.20
      },
      onChapterEnter: [{
          layer: 'planned',
          opacity: 1
        },
        {
          layer: 'planned_labels',
          opacity: 1
        }
      ],
      onChapterExit: [{
          layer: 'planned',
          opacity: 0
        },
        {
          layer: 'planned_labels',
          opacity: 0
        }
      ]
    },
    //final brackets for
  ]
};
