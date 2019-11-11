import React, { Component } from 'react';
import './App.css';
import TimelineItem from './TimelineItem.js'
import './Timeline.css'


class Timeline extends Component {
  render() {
  	let timelineData = [
	    {
	        text: 'Engineer Ferdinand Lohner-Porsche produced the first hybrid vehicle',
	        date: '1899',
	        category: {
	            tag: 'Pre-history',
	            color: '#018f69'
	        },
	    },
	    {
	    	text: 'Dr. Andy Frank begins working on hybrids and PHEVs. He is considered the inventor of modern PHEVs.',
	    	date: '1971',
	    	category: {
	    		tag: 'Pre-history',
	    		color: '#018f69'
	    	},
	    },
	    {
	    	text: 'Popular Mechanics magazine featured a cover story. It showed a hybrid that "plugs in overnight".It was built by electronics engineer Harry Grepke.',
	    	date: 'September 1975',
	    	category: {
	    		tag: 'Pre-history',
	    		color: '#018f69'
	    	},
	    },
	    {
	        text: 'Toyota Prius Released in Japan',
	        date: '1997',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'About sixty Audi Duo PHEVs were built. Few customers were prepared to pay twice the price. Prodcution was stopped.',
	        date: '1998-1999',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Electric Power Research Institute (EPRI) sponsored the Hybrid Electric Vehicle Alliance to commercialize PHEVs',
	        date: '2000',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'California Cars Initiative was created. CalCars is a non-profit PHEV advocacy and technology development group.',
	        date: '2002',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Renault began selling the Elect\'Road, a plug-in series hybrid version of their popular Kangoo.',
	        date: '2003',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'General Motors\' Chevrolet Volt was unveiled at Detroit\'s North American International Auto Show.',
	        date: 'January 7, 2007',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Toyota announced they would start selling lithium battery plug-in hybrids by 2010',
	        date: 'January 14, 2008',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'BYD Auto\'s F3DM PHEV-60 hatchback began selling in China as the first production plug-in hybrid',
	        date: 'December 15, 2008',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Sales of the BYD F3DM to the general public began in Shenzhen. Only 417 units were sold during 2010.',
	        date: 'March 2010',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'General Motors began deliveries of the Chevrolet Volt in the United States. The Volt has an all-electric range of 35 miles',
	        date: 'December 2010',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Chrysler began field testing of the Dodge Ram 1500 Plug-in Hybrid in the United States with 140 units. The Ram PHEV has an EV range of 20 mi (32 km).',
	        date: '2011',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'The Toyota Prius Plug-in Hybrid was released in Japan, followed by the United States in February 2012, and Europe in June 2012.',
	        date: 'January 2012',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Volvo V60 Plug-in Hybrid, the world\'s first diesel plug-in hybrid, was released in Sweden.',
	        date: '2012',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Sales of plug-in hybrid cars in the Netherlands during 2012 have been notable, as PHEV sales took the lead over all-electric cars.',
	        date: '2012',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'Sales of the Honda Accord Plug-in Hybrid began in the U.S.',
	        date: 'January 2013',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        text: 'The Mitsubishi Outlander P-HEV was released in the Japanese market also, becoming the first SUV plug-in hybrid in the markets',
	        date: 'January 2013',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	    	text: 'Over 247,700 plug-in hybrids had been sold worldwide since 2008',
	    	date: 'September 2014',
	    	category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	    	text: 'United States is the world\'s largest plug-in hybrid car market with a stock of 193,770 units,',
	    	date: '2015',
	    	category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	    	text: 'Hyundai Ioniq Plug-in was released.',
	    	date: 'February 2017',
	        category: {
	            tag: 'Modern',
	            color: '#018f69'
	        },
	    },
	    {
	        // Another object with data
	    }
	];

    return (
	    timelineData.length > 0 && (
	        <div className="timeline-container">
	            {timelineData.map((data, idx) => (
	                <TimelineItem data={data} key={idx} />
	            ))}
	        </div> )
	);
  }
}

export default Timeline;