var config = {
    style: 'mapbox://styles/mpotter/ck3ex1vs41ol01cpo6uqt8nkf',
    accessToken: 'pk.eyJ1IjoibXBvdHRlciIsImEiOiJjajAxZGltM3UwNjF2MzJsczVnN3R2eTNnIn0._Sj0HRLt8VTQGTojMWYFfQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Virtual Tour of Fulton River District',
    subtitle: "Summary of infill development characteristics as shaped by mobility, amenities, demographics and zoning",
    byline: 'By Riverside Investment & Development',
    footer: 'Sources: Riverside Investment & Development, City of Chicago Data Portal',
    chapters: [
        {
            id: 'fultonriver',
            title: '2018: Zoned for a Riverfront City',
            image: 'https://tourchicago.s3.us-east-2.amazonaws.com/fultonriverdistrict.png',
            description: 'At 37-acres, the new Fulton River District is a unique blank slate development site infill to the Citys most desirable mixed-use submarkets: Fulton Market, River North and the West Loop. As of the end of 2018, zoning is now in place for 7 up to 11 million square feet of mixed-use development. Offering 2/3rd mile of continuous riverwalk and 50% open space, Fulton River District upon completion will effectively become a city in a park, with state of the art infrastructure and modern planning, serving as a natuaral continuation of recent neaby success experienced on Chicago River Confluence and Main Branch zones as the premier urban aesthetic',
            location: {
              center: [-87.64249, 41.88865],
              zoom: 12.48,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
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
            onChapterExit: [
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
            id: 'northbranchzoning',
            title: '2017: Removed "PMD" Zoning',
            image: 'https://tourchicago.s3.us-east-2.amazonaws.com/historical_chicago_ave_bridge.jpg',
            description: 'Beginning in 2015, the City of Chicago commenced a comprehensive planning process covering 750-acres of land along the river, dubbed a moderinzation of the North Branch Industrial Corridor Framework. The outcome of the plan was to eliminate low density residential zoning, known as "Planned Manufacturing District", in favor of higher density mixed-use developemnt. Controversy aside, as Chicagos "Second Great Waterfront" and quickly becoming the most pleasing and in-demand urban aesthetic.',
            location: {
              center: [-87.65929, 41.90447],
              zoom: 13.43,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
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
            onChapterExit: [
              {
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
            description: 'In June of 2016 the City Council approved updates to the zoning code governing downtown "DX" floor area bonus system and downtown zoning district geography. Under the moniker "Neighborhood Opportunity Bonus" program, the changes were intended to promote increased density development, particulary in areas well served by existing transit, in order to accommodate the the intensifying demand growing outward from the conventional CBD core',
            location: {
              center: [-87.65801, 41.88436],
              zoom: 12.92,
              pitch: 0.00,
              bearing: -0.15
            },
            onChapterEnter: [
              {
                layer: 'downtownzoning',
                opacity: .65
              },
            ],
            onChapterExit: [
              {
                layer: 'downtownzoning',
                opacity: 0
              },
            ]
        },
          {
              id: 'riverwalk',
              title: '2015-2017: Main Branch Riverwalk',
              image: 'https://tourchicago.s3.us-east-2.amazonaws.com/chicagoriverwalk-Season-Celebration.jpg',
              description: 'With the final leg of the Main Branch of the riverwalk completed interest in connecting. Demand for riverfront access is broad based, witnessing interest across all CBD property categories including premiere +A corporate office users, top of market multi-family residential, luxury hospitality, leading retailers such as Apple, and an increasing of number of respected national and local food, beverage and entertainment purveyors. Evidencing the recent and dramatic increase in foot traffic and interest along the river, the City of Chicago has repored an increase in concession revenue from $1.2 million in 2014 to $14.4 million in 2018, representing a 12x increase in just four years',
              location: {
                center: [-87.62922, 41.88744],
                zoom: 16.38,
                pitch: 53.00,
                bearing: -89.39
              },
              onChapterEnter: [
                {
                  layer: '3d-buildings',
                  opacity: 1
                },
              ],
              onChapterExit: [
                {
                  layer: '3d-buildings',
                  opacity: 1
                },
              ]
          },
          {
              id: 'confluence',
              title: 'Chicago River Confluence',
              image: 'https://tourchicago.s3.us-east-2.amazonaws.com/confluence.jpg',
              description: 'Most sought after corporate and residential destination. Notable tenants that relocated or have signed a lease include William Blair Co, Hyatt Corporation, Bank of America, Salesforce, McDermott Will & Emery, DLA Piper and Mead Johnson',
              location: {
                center: [-87.63837, 41.88675],
                zoom: 16.15,
                pitch: 53.50,
                bearing: -28.80
              },
              onChapterEnter: [],
              onChapterExit: [
                {
                  layer: '3d-buildings',
                  opacity: 0
                },
              ]
            },
        {
            id: 'commuter',
            title: 'Commuter Population of 5.5 Million',
            description: 'Accessible via mass transit to the top recruitment populations for Suburban employees',
            location: {
              center: [-87.74011, 42.02653],
              zoom: 8.25,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
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
            onChapterExit: [
              {
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
              title: 'CTA L 2018 Weekday Ridership',
              description: 'Fulton River District is serviced by Chicago most popular north and northwest neighborhood lines, the Brown/Purple and Blue. With access to four stations in under .5 miles the site is a proven tranit oriented location with over 26,000 average weekday ridership and growing. Chicago Avenue is the only major east-west street to connect to the CTA Red, Blue and Brown lines and the CTA Red at Chicago is the #2 station by ridership in the whole network. CTA #66 and #8, ...#2 and #3 ridership, reflective of most important streets north and west of the Loop',
              location: {
                center: [-87.64451, 41.88737],
                zoom: 13.64,
                pitch: 0.50,
                bearing: 0.20
              },
              onChapterEnter: [
                  {
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
              onChapterExit: [
                {
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
                description: 'Bicycling is an integral part of Chicagos transportation system. Every day, thousands of people bike on our streets, whether it is to ride to work, to the store, or for recreation. Milwaukee Ave #1 lane, Chicago 200m, Divvy, midpoint of 18 mile Lakefront recreational trail',
                location: {
                  center: [-87.65013, 41.88911],
                  zoom: 13.39,
                  pitch: 0.00,
                  bearing: -0.15
                },
                onChapterEnter: [
                    {
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
                onChapterExit: [
                  {
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
                  title: '3-Mile North Branch Transitway',
                  image: 'https://tourchicago.s3.us-east-2.amazonaws.com/transitway.jpeg',
                  description: 'Repurposing of 3-miles of abandoned freight rail corridor to create a dedicated pedestrian and Bus Rapid Transit (BRT) corridor anchored by Union Station, Ogilvie Station at the south end and the Metra Clybourn and 606 Trail at the north end',
                  location: {
                    center: [-87.64924, 41.89722],
                    zoom: 12.99,
                    pitch: 0.00,
                    bearing: 0.00
                  },
                  onChapterEnter: [
                      {
                        layer: 'transitway',
                        opacity: 1
                      }
                  ],
                  onChapterExit: [
                    {
                      layer: '3d-buildings',
                      opacity: 1
                    },
                    {
                      layer: 'transitway',
                      opacity: 0
                    }
                  ]
                },

                {
                    id: 'retail',
                    title: 'World-class Dining Districts',
                    image: 'https://tourchicago.s3.us-east-2.amazonaws.com/fultonmarketdistrict.jpg',
                    description: 'Home to 7 Michelin Star and 14 Bib Gourmand rated retaurants, Fulton Market and River North neighborhoods offer the Citys highest concentrations of world-class dining and entertainment and are host to venues to cause Chicago to be voted "Restaurant City of the Year" (2017) by Bon Appetit',
                    location: {
                      center: [-87.66198, 41.90537],
                      zoom: 13.03,
                      pitch: 0.00,
                      bearing: 0.00
                    },
                    onChapterEnter: [
                        {
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
                    onChapterExit: [
                        {
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
                      description: '57.7 million visitors in 2018 makes Chicago the most visited City in the U.S. after NYC. One mile east of the site, the intersection of Chicago and Michigan Avenue sits at the heart of The Magnificient Mile. Offering a variety of....',
                      location: {
                        center: [-87.62405, 41.89671],
                        zoom: 15.92,
                        pitch: 59.00,
                        bearing: -93.60
                      },
                      onChapterEnter: [],
                      onChapterExit: []
                    },

                    {
                        id: 'techhubs',
                        title: 'Proven Tech Location',
                        image: 'https://tourchicago.s3.us-east-2.amazonaws.com/600_aerial.jpg',
                        description: 'Anchored at the north by 600 W. Chicago in the old Montgomery Ward warehouse, serial start-up and venture capital group Lightbank et al. The south end of the site is proximate to The Mart, the Citys #1 tech hub, #1 suburban relocation recipient and home to 1871 incubator, ranked as the "#1 University affiliated incubator worldwide" in 2018 by X rating source',
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
                          description: 'Future pedestrian bridge connection re-establishing the old Erie Street vehicluar improves accessibility to River North amenities and transit from the center of the site and connects to the 4-acre A Montgomery Ward public riverfront park',
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
                          description: 'With more than 450,000 square feet to work out, chill out, and dine out, East Bank Club is Chicago’s premier health club. Covering over two full city blocks, the Club offers an astounding array of amenities, state-of-the-art exercise facilities',
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
                            description: 'Curvature of the river creates stunning views back to the City, Chicago Landmark "Carrol Avenue Bridge" and iconic skyscrapers',
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
        //final brackets for
    ]
};
