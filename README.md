Design Decision:  

1- Component-Based Architecture: The website was created utilizing a component-based architecture, in which various website sections, such as people, vehicles, species etc, were divided up into individual components. To encourage code reuse and modularity.

2- Use of useEffect Hook: Each component utilized the useEffect hook to retrieve data upon mounting. This guarantees that the data is only fetched when required, cutting down on pointless API calls and enhancing efficiency.

3- Responsive Design Using Material-UI: Responsive design ideas were applied using Material-UI, a well-liked React UI framework (used only in App.js ). This guarantees that the website functions and displays properly across a range of gadgets and screen sizes, giving users of desktop and mobile devices a smooth user experience.

4- Separate Components for Data Categories: Each category (people, vehicles, species, etc.) have its own separate component responsible for fetching and displaying the corresponding data. This design choice helps maintain clean and modular code and makes it easier to manage each section independently.

5- Styling: Bootstrap was used for styling Bootstrap cards. And used CSS module for stying and used media queries.


