# Learning React


# Parcel
- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification (for production build)
- Building
- Compressing
- Consistence Hashing
- Code splitting
- Differential Bundling -  support older browsers (Adding this in package.json   "browserslist" : ["last 2 versions"])
- Https also we can use
- Tree shaking algo - remove unsed code


# Food order App
/*
* Header
*   - Logo
*   - nav Item
* Body
*   - search
*   - Restaurant Container
*       - RestaurantCard
*           - Img
*           - Name of Res, Ratings, cuisine, delivery time
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

Two  Types of EXPORT/IMPORT

- Default Export/Import

export default Component
import Component from './Component'

- Named Export/Import
export const name = 'componentName'; // export the component as a named variable.
import {componentName} from 'Path'

# React Hooks
Hooks are functions that let you “hook into” React state and lifecycle features from function components.
(Normal JS Utility Functions)

Two very Important 
1. useState() - Superpowerful State variable in React
2. useEffect()