import React from 'react'
import { resume } from '../data'
import parse from "html-react-parser"

const ResumeItem = () => {
    return (
    <>
        {
            resume.map((val) => {
                return (
                    <div className="resume__item">
                        <div className="resume__icon">{val.icon}</div>
                        <span className="resume__date">{val.year}</span>
                        <h3 className="resume__subtitle">{parse(val.title)}</h3>
                        <p className="resume__description">{val.desc }</p>
                </div>
                )
            })} 
    </>
  )
}

export default ResumeItem