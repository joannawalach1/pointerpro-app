import React from "react";
import Navbar from "./Navbar.js";
import { BsShare } from "react-icons/bs";
import { CgMoreVertical } from "react-icons/cg";

const AllQuestionnaires = () => {
  return (
    <div className="allquestionnaires">
      <div className="allquestionnaires__menu">
        <Navbar />
      </div>
      <div className="allquestionnaires__crudmenu">
        <div>
          <select className="allquestionnaires__select">
            <option> All questionnaires</option>
            <option>aaa</option>
            <option>aaa</option>
            <option>aaa</option>
          </select>
        </div>
        <div className="questionnaires__buttons">
          <button className="questionnaires__button--1">
            Create questionnaire
          </button>
          <button className="questionnaires__button--2">Create folder</button>
          <div>
            <input
              type="search"
              placeholder="Search"
              className="questionnaires__input"
            />
            <button className="questionnaires__button--3">bbbbbbbbb</button>
          </div>
        </div>
      </div>
      <div className="questionnaires__data">
        <table className="questionnaires__table">
          <thead>
            <tr>
              <th className="questionnaires__th--1">
                <input type="checkbox" />
              </th>
              <th className="questionnaires__th--2">Name</th>
              <th className="questionnaires__th">Lasteditet</th>
              <th className="questionnaires__th">Responses</th>
              <th className="questionnaires__th">Share</th>
              <th className="questionnaires__th">Active</th>
              <th className="questionnaires__th">More</th>
            </tr>
          </thead>
          <tbody>
            <tr className="questionnaires__tr">
              <td className="questionnaires__td--1">
                <input type="checkbox" />
              </td>
              <td className="questionnaires__td--2">
                <p>My Questionnaire</p>
                <p>su.vc/jgklmlhe</p>
              </td>
              <td className="questionnaires__td">04/04/2023</td>
              <td className="questionnaires__td">aaa</td>
              <td className="questionnaires__td--5">
                <BsShare />
              </td>
              <td className="questionnaires__td">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td className="questionnaires__td--7">
                <CgMoreVertical />
              </td>
            </tr>
            <tr className="questionnaires__tr">
              <td className="questionnaires__td--1">
                <input type="checkbox" />
              </td>
              <td className="questionnaires__td--2">
                <p>My Questionnaire</p>
                <p>su.vc/jgklmlhe</p>
              </td>
              <td className="questionnaires__td">04/04/2023</td>
              <td className="questionnaires__td">aaa</td>
              <td className="questionnaires__td--5">
                <BsShare />
              </td>
              <td className="questionnaires__td">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
              <td className="questionnaires__td--7">
                <CgMoreVertical />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="questionnaires__bottom">
          <p>
          Rows per page: 
          <select>
            <option> 5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </select>
          1 - 2 of 2 
         Previous Next</p>
        </div>
        
      </div>
    </div>
  );
};

export default AllQuestionnaires;
