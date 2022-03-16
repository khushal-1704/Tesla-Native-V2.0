const cars = [{
    name: 'Model S',
    tagline: 'Order Online for',
    tagline: 'Starting at $69,420',
    image: require('../../assets/images/ModelS.jpeg'),
    key: 1
}, {
    name: 'Model 3',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/Model3.jpeg'),
    key: 2
}, {
    name: 'Model X',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/ModelX.jpeg'),
    key: 3
}, {
    name: 'Model Y',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../../assets/images/ModelY.jpeg'),
    key: 4
}, {
    name: 'Solar Panels',
    tagline: 'Lowest Cost Solar Panels in India',
    taglineCTA: '',
    image: require('../../assets/images/SolarPanels.jpeg'),
    key: 5
}, {
    name: 'Solar Roof',
    tagline: 'Produce  Clean Energy From Your Roof',
    taglineCTA: '',
    image: require('../../assets/images/SolarRoof.jpeg'),
    key: 6
}
];

const menuList = [
    { name: "Existing Inventory", reDir: '' },
    { name: "Used Inventory", reDir: '' },
    { name: "Trade-in", reDir: '' },
    { name: "Cubertruck", reDir: '' },
    { name: "Roadster", reDir: '' },
    { name: "Semi", reDir: '' },
    { name: "Charging", reDir: '' },
    { name: "Powerwall", reDir: '' },
    { name: "Commercial Energy", reDir: '' },
    { name: "Utilities", reDir: '' },
    { name: "Sign Out", reDir: '' },
]

export { cars, menuList }