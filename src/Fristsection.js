import React  from 'react'
import "./Fristsection.css"

const Fristsection = (props) => {

  return (
    <div className="filterSection  w-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>filter based on your interest</h1>
            </div>
        </div>
        <div className="row filterOptions">

          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <p>Post Type</p>
            <select 
            
            onChange={(e)=>props.setFilter({...props.filter, posttype:e.target.value})}
            value={props.filter.postType}

            className="filter" id="jobType">
              <option value="All">All</option>
              <option value="Permanant">Permanant</option>
              <option  value="Agniveer">Agniveer</option>
              <option value={"Apprenticeship"}>Apprenticeship</option>
              </select>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <p>Job category</p>
            <select 
            onChange={(e)=>props.setFilter({...props.filter, jobcategory:e.target.value})}
            value={props.filter.category}
            className="filter" id="jobCategory">
            <option  value="All" >All</option>
            <option value="CAPFs">CAPFs</option>
            <option value="Police">Police</option>
            <option value="Defence">Defence</option>
            <option value="Bank">Bank</option>
            <option value="Railways">Railways</option>
            <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <p>Job Sector</p>
            <select
            className="filter" id="jobSector">
              <option value="All">All</option>
              <option value="Govt">Govt</option>
              </select>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <p>Job Location</p>
            <select 
            onChange={(e)=>props.setFilter({...props.filter, location:e.target.value})}
            value={props.filter.location}
            
            className="filter" id="jobLocation">
              <option>All</option>
              <option>All India</option>
              <option >Delhi</option>
              <option >Tamil Nadu</option>
              </select>
          </div>
        </div>
          </div>
          </div>
  )
}

export default Fristsection