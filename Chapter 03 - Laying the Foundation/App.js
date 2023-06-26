/**
 *
 *  <div id="parent">
 *      <div id="child1">
 *          <div id="list">
 *              <ul>
 *                  <li>A</li>
 *                  <li>B</li>
 *                  <li>C</li>
 *                  <li>D</li>
 *              </ul>
 *          </div>
 *      </div>
 *      <div id="child2">
 *          <div id="list">
 *              <ul>
 *                  <li>A</li>
 *                  <li>B</li>
 *                  <li>C</li>
 *                  <li>D</li>
 *              </ul>
 *          </div>
 *      </div>
 *  </div>
 *
 *
 **/
import React from "react"
import ReactDOM from "react-dom/client"

// React Element
const heading = (
  <div
    id="parent"
    className="parent">
    <div id="child1">
      <div id="list">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    </div>
    <div id="child2">
      <div id="list">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    </div>
  </div>
)

// React Functional Components

const TitleComponent = () => <h1>This is my namaste react course</h1>

/*
 * Component Composition
 *  It means that you can use component inside another components
 */
const HeadingComponent = () => (
  <div className="body">
    <TitleComponent />
    <h2 className="heading">This is my heading functional component</h2>
  </div>
)

const FooterComponent = () => (
  <div className="footer">
    <HeadingComponent />
    <h2 className="footer">This is my footer functional component</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FooterComponent />)
