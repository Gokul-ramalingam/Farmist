import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css'


const CircularProgressBar = (props) => {
    return (
        <div>
             <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ 
                  pathTransition: "none",
                  textColor: "#F4C724",
                   pathColor: "#26ae60",
                   trailColor: "#EAF0F1"
                   })}
              className="circularProgressBar"
            />
          );
        }}
      </AnimatedProgressProvider>
        </div>
    )
}

export default CircularProgressBar
